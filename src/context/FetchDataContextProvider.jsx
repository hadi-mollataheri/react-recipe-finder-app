/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { fetchData } from '../utilities/edamamAPI';

export const FetchedDataContext = createContext();

function FetchDataContextProvider({ children }) {
  const [fetchedDataState, setFetchedDataState] = useState(null); // fetchedDataState.hits[0].recipe.'label' or '...'
  const [userInput, setUserInput] = useState('');

  const getDefaultIngsVisibility = () => {
    if (fetchedDataState) {
      return new Array(fetchedDataState.hits.length).fill(false);
    }
  };

  // getDefaultIngsVisibility default value will be: [false, ...]
  const [isIngredientsVisible, setIsIngredientsVisible] = useState(
    getDefaultIngsVisibility() || []
  );

  useEffect(() => {
    setIsIngredientsVisible(getDefaultIngsVisibility() || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedDataState]);

  const handleInputChange = ({ target }) => {
    setUserInput(target.value);
  };

  const handleSearchClick = () => {
    fetchData(userInput).then((data) => {
      if (userInput) {
        setFetchedDataState(data);
              console.log(data.hits[0].recipe.ingredients);
      }
    });
  };

  const handleShowIngredientsClick = (index) => {
    isIngredientsVisible.map((_, currentIndex) => {
      if (currentIndex === index) {
        setIsIngredientsVisible((prev) => [
          ...prev,
          (prev[currentIndex] = true),
        ]);
      }
    });
  };

  const handleCloseIngsButton = (index) => {
    isIngredientsVisible.map((_, currentIndex) => {
      if (currentIndex === index) {
        setIsIngredientsVisible((prev) => [
          ...prev,
          (prev[currentIndex] = false),
        ]);
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
        isIngredientsVisible,
        handleShowIngredientsClick,
        handleCloseIngsButton,
      }}
    >
      {children}
    </FetchedDataContext.Provider>
  );
}

export default FetchDataContextProvider;
