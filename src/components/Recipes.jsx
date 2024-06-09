import Recipe from './Recipe';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Recipes() {
  const { fetchedDataState } = useContext(FetchedDataContext);

  return (
    <div className='relative top-20 my-10 mx-7'>
      {/* If search button is not clicked */}
      {!fetchedDataState ? (
        <img src={icon} alt='burger' width={200} className='opacity-50 mx-auto' />
      ) : // If search button is clicked but no recipe found
      fetchedDataState.count === 0 ? (
        <h2 className='flex justify-center text-lg'>Not Found!</h2>
      ) : (
        // If search button is clicked and some recipe are found
        fetchedDataState.hits.map((currentRecipe, index) => {
          return (
            <div
              key={index + 1}
              className='grid grid-cols-1 justify-items-center items-center pb-10'
            >
              <Recipe recipe={currentRecipe.recipe} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Recipes;
