/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { fetchData } from '../utilities/edamamAPI';

export const FetchedDataContext = createContext();

function FetchDataContextProvider({ children }) {
  const [fetchedDataState, setFetchedDataState] = useState(null); // fetchedDataState.hits[0].recipe.'label' or '...'
  const [userInput, setUserInput] = useState('');
  const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);

  // /*  TEST */ console.log(fetchedDataState);
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

  const handleShowIngredientsClick = () => {
    setIsIngredientsVisible(true);
  };

  return (
    <FetchedDataContext.Provider
      value={{
        fetchedDataState,
        userInput,
        handleInputChange,
        handleSearchClick,
        isIngredientsVisible,
        handleShowIngredientsClick,
      }}
    >
      {children}
    </FetchedDataContext.Provider>
  );
}

export default FetchDataContextProvider;
