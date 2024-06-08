/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { fetchData } from '../utilities/edamamAPI';

export const FetchedDataContext = createContext();

function FetchDataContextProvider({ children }) {
  const [fetchedDataState, setFetchedDataState] = useState(null); // fetchedDataState.hits[0].recipe.'label' or '...'
  const [userInput, setUserInput] = useState('');
  // console.log(fetchedDataState.hits[0].recipe.url);
  const handleInputChange = ({ target }) => {
    setUserInput(target.value);
  };

  const handleSearchClick = () => {
    fetchData(userInput).then((data) => {
      if (userInput) {
        setFetchedDataState(data);
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
