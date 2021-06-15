import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import SelectDropdown from './components/SelectDropdown';
import Button from './components/Button';
import Input from './components/Input';
import CurrencyData from './CurrencyData';

function App() {
  const questionData = CurrencyData;
  const state = useSelector(state => state);
  const [appState,updateAppState] = useState(state);
  const dispatch = useDispatch();
  const currencies = questionData.currencyList;
  //const [appState,updateAppState] = useState({isError : false,currencyFrom : "AUD", currencyTo : "AUD", amount : 0, convertedValue : 0});
  useEffect(()=>{
    updateAppState(state);
  })
  const exchangeDirect = (exchange_from,exchange_to) => {
    let direct = questionData.direct;
    let exchangeRate = 0;
    let exchangedValue = 0;
    for (let i=0;i<direct.length;i++) {
      if (direct[i].currency1 === exchange_from && direct[i].currency2 === exchange_to) {
        exchangeRate = direct[i].exchange;
        break;
      }
    }
    for (let i=0;i<direct.length;i++) {
      if (direct[i].currency1 === exchange_to && direct[i].currency2 === exchange_from) {
        exchangeRate = (1/direct[i].exchange);
        break;
      }
    }
    return exchangeRate;
  }
  const handleChange = (event) => {
    if (event.target.id === "currency_from") {
      //updateAppState(Object.assign({},appState,{currencyFrom: event.target.value}));
      dispatch({type: "UPDATE_CURRENCY_FROM",payload: event.target.value})
    }
    if (event.target.id === "currency_to") {
      //updateAppState(Object.assign({},appState,{currencyTo: event.target.value}));
      dispatch({type: "UPDATE_CURRENCY_TO",payload: event.target.value })
    }
  }
  const convertCurrencyHelper = (currency_from,currency_to,arr) => {
    let conversion = questionData.conversions;
    let via_currency = "";
    let next = "";
    let count = 0;
    while(count < arr.length-1) {
      for(let i = 0;i<conversion.length;i++) {
        if (conversion[i].curr_from == currency_from) {
          for (let j=0;j<conversion[i].curr_to.length;j++) {
            if (conversion[i].curr_to[j].currency === currency_to) {
              via_currency = conversion[i].curr_to[j].exchange;
              break;
            }
          }
        }
      }
      if (via_currency === "Inv" || via_currency === "D") {
        let temp = currency_from;
        currency_from = currency_to;
        currency_to = next;
        count++;
        if (currency_to === currency_from)
        break;
      } else if(via_currency.length === 0){
        return [];
      }else {
        let x = arr.indexOf(currency_from);
        if(x === arr.length-1) break;
        arr.splice(x+1,0,via_currency);
        next = currency_to;
        currency_to = via_currency;
      }
      }
      return arr;
  }

  const convertCurrency = () => {
    let conversion = questionData.conversions;
    let via_currency = "";
    let prod = 1;
    let isError = false;
    if(appState.currencyFrom === appState.currencyTo) {
      prod = 1;
    } else {
      let curency_conversion_array = convertCurrencyHelper(appState.currencyFrom,appState.currencyTo,[appState.currencyFrom,appState.currencyTo]);
      if (curency_conversion_array.length === 0) {
        prod=0;
        isError = true;
      } else {
      for(let i=0;i<curency_conversion_array.length-1;i++) {
        prod = prod * (exchangeDirect(curency_conversion_array[i],curency_conversion_array[i+1]));
      }
      isError = false;
    }
    }
    let convertedAmount = (prod * appState.amount);
    if (appState.currencyTo === "JPY") convertedAmount = parseInt(convertedAmount);
    else convertedAmount = convertedAmount.toFixed(2);
    dispatch({type: "UPDATE_ERROR",payload: isError});
    //updateAppState(Object.assign({},appState,{convertedValue : convertedAmount},{isError : isError}));
    dispatch({type: "CONVERTED_VALUE",payload: convertedAmount});
    
  }

  const handleInputChange = (amount) => {
    //updateAppState(Object.assign({},appState,{amount : amount}));
    dispatch({type: "UPDATE_AMOUNT",payload: amount })
  }
  return (
    <div className="grid-container">
      <p><SelectDropdown testid = "currency_from" onSelectChange = {handleChange} params={currencies} id="currency_from"></SelectDropdown></p>
      <p><Input testid = "currency_from_amount" onInputChange = {handleInputChange} placeholder="Please enter amount to convert"></Input></p>
      <p><SelectDropdown testid = "converted_to" onSelectChange = {handleChange} params={currencies} id="currency_to"></SelectDropdown></p>
      <p>
      <Input testid = "converted_value" disabled="disabled" value={appState.convertedValue} placeholder="Converted Value"></Input>
      </p>
      <p>
        <Button name="Convert" onClick = {convertCurrency}></Button>
      </p>
      <p>
        <span className={`${(appState.isError) ? "errorDisplay" :"errorHide"}`}>Unable to find rate for {appState.currencyFrom} : {appState.currencyTo}</span>
      </p>  
      
    </div>
  );
}

export default App;
