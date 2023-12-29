// src/CurrencyConverter.js
import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('PKR'); // Change the default to PKR
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-300 to-green-300 bg-opacity-30 border border-gray-300 rounded p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">From Currency:</label>
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="PKR">PKR</option>
            {/* Add more currency options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">To Currency:</label>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="USD">USD</option>
            {/* Add more currency options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <strong>Converted Amount:</strong> {convertedAmount !== null ? convertedAmount : 'Loading...'}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
