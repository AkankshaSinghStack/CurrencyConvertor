import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then(response => response.json())
      .then(result => {
        setData(result[currency]);
      })
      .catch(error => console.error('Error fetching currency info:', error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
