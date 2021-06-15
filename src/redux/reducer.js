import CurrencyData from '../CurrencyData'
import InitialState from '../InitialState'
import React from 'react';	
 
function reducer(state = InitialState, action){
    switch (action.type) {
        case "UPDATE_AMOUNT" : {
            return Object.assign({},state,{amount : action.payload});
        }
        case "UPDATE_CURRENCY_FROM" : {
            return Object.assign({},state,{currencyFrom : action.payload});
        }
        case "UPDATE_CURRENCY_TO" : {
            return Object.assign({},state,{currencyTo : action.payload});
        }
        case "UPDATE_ERROR" : {
            return Object.assign({},state,{isError : action.payload});
        }
        case "CONVERTED_VALUE" : {
            return Object.assign({},state,{convertedValue : action.payload});
        }
        default:
            return state;
  }
}

export default reducer