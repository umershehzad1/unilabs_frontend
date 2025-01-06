"use client"

import axios from "axios"

export const getCryptoExchangeRate = async (baseCurrency = "ethereum", quoteCurrency = "usd") => {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price`;

        const params = {
            ids: baseCurrency, // e.g., 'bitcoin', 'ethereum'
            vs_currencies: quoteCurrency, // e.g., 'usd', 'eur'
        };

        const response = await axios.get(url, { params });
        const exchangeRate = response.data[baseCurrency][quoteCurrency];
        // console.log(`${baseCurrency} to ${quoteCurrency} rate:`, exchangeRate);
        return exchangeRate;
    } catch (error) {
        console.error("Error fetching exchange rate:", error.message);
    }
}

