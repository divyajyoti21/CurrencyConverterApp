const CurrencyData = {
    conversions: [
    {
        curr_from : "AUD",
        curr_to :[{currency: "AUD",exchange: 1},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "CAD",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: 1},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "CNY",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: 1},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "CZK",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: 1},{currency: "DKK",exchange: "EUR"},{currency: "EUR",exchange: "Inv"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "EUR"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "EUR"}]
    },
    {
        curr_from : "DKK",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "EUR"},{currency: "DKK",exchange: 1},{currency: "EUR",exchange: "Inv"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "EUR"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "EUR"}]
    },
    {
        curr_from : "EUR",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "D"},{currency: "DKK",exchange: "D"},{currency: "EUR",exchange: 1},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "D"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "GBP",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: 1},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "JPY",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: 1},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "Inv"}]
    },
    {
        curr_from : "NOK",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "EUR"},{currency: "DKK",exchange: "EUR"},{currency: "EUR",exchange: "Inv"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: 1},{currency: "NZD",exchange: "USD"},{currency: "USD",exchange: "EUR"}]
    },
    {
        curr_from : "NZD",
        curr_to :[{currency: "AUD",exchange: "USD"},{currency: "CAD",exchange: "USD"},{currency: "CNY",exchange: "USD"},{currency: "CZK",exchange: "USD"},{currency: "DKK",exchange: "USD"},{currency: "EUR",exchange: "USD"},{currency: "GBP",exchange: "USD"},{currency: "JPY",exchange: "USD"},{currency: "NOK",exchange: "USD"},{currency: "NZD",exchange: 1},{currency: "USD",exchange: "D"}]
    },
    {
        curr_from : "USD",
        curr_to :[{currency: "AUD",exchange: "Inv"},{currency: "CAD",exchange: "Inv"},{currency: "CNY",exchange: "Inv"},{currency: "CZK",exchange: "EUR"},{currency: "DKK",exchange: "EUR"},{currency: "EUR",exchange: "Inv"},{currency: "GBP",exchange: "Inv"},{currency: "JPY",exchange: "D"},{currency: "NOK",exchange: "EUR"},{currency: "NZD",exchange: "Inv"},{currency: "USD",exchange: 1}]
    }],

    direct: [
        {currency1 : "AUD", currency2:"USD", exchange: 0.8371},
        {currency1 : "CAD", currency2:"USD", exchange: 0.8711},
        {currency1 : "USD", currency2:"CNY", exchange: 6.1715},
        {currency1 : "EUR", currency2:"USD", exchange: 1.2315},
        {currency1 : "GBP", currency2:"USD", exchange: 1.5683},
        {currency1 : "NZD", currency2:"USD", exchange: 0.7750},
        {currency1 : "USD", currency2:"JPY", exchange: 119.95},
        {currency1 : "EUR", currency2:"CZK", exchange: 27.6028},
        {currency1 : "EUR", currency2:"DKK", exchange: 7.4405},
        {currency1 : "EUR", currency2:"NOK", exchange: 8.6651}
    ],
    currencyList : ["AUD","CAD","CNY","CZK","DKK","EUR","GBP","JPY","NOK","NZD","USD","INR","SGD"],
}
export default CurrencyData

