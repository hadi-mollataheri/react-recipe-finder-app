/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { fetchData } from '../utilities/edamamAPI';

export const FetchedDataContext = createContext();

function FetchDataContextProvider({ children }) {
  const [fetchedDataState, setFetchedDataState] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = ({ target }) => {
    setUserInput(target.value);
  };

  const handleSearchClick = () => {
    setFetchedDataState(() => {
      if (userInput) {
        return fetchData(userInput);
      }
    });
  };

  return (
    <FetchedDataContext.Provider
      value={{
        fetchedDataState,
        userInput,
        handleInputChange,
        handleSearchClick,
      }}
    >
      {children}
    </FetchedDataContext.Provider>
  );
}

export default FetchDataContextProvider;
