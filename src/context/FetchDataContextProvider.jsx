/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { fetchData } from '../utilities/edamamAPI';

export const FetchedDataContext = createContext();

function FetchDataContextProvider({ children }) {
  const [fetchedDate, setFetchedData] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = ({ target }) => {
    setUserInput(target.value);
  };

  useEffect(() => {
    setFetchedData(() => {
      if (userInput) {
        return fetchData(userInput);
      }
    });
  }, [userInput]);

  return (
    <FetchedDataContext.Provider
      value={{ fetchedDate, userInput, handleInputChange }}
    >
      {children}
    </FetchedDataContext.Provider>
  );
}

export default FetchDataContextProvider;
