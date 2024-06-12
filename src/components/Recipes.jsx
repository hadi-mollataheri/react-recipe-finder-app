import Recipe from './Recipe';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Recipes() {
  const { fetchedDataState } = useContext(FetchedDataContext);

  return (
    <div className='relative top-20 pb-10 h-full'>
      <div id='recipes-container' className=' my-10 mx-7'>
        {/* If search button is not clicked */}
        {!fetchedDataState ? (
          <img
            src={icon}
            alt='burger'
            width={200}
            className='opacity-50 mx-auto'
          />
        ) : // If search button is clicked but no recipe found
        fetchedDataState.count === 0 ? (
          <h2 className='flex justify-center text-lg'>Not Found!</h2>
        ) : (
          <div className='grid grid-cols-1 gap-10 justify-items-center items-start justify-center sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-10'>
            {
              // If search button is clicked and some recipe are found
              fetchedDataState.hits.map((currentRecipe, index) => {
                return (
                  <Recipe
                    key={index + 1}
                    recipe={currentRecipe.recipe}
                    index={index}
                  />
                );
              })
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;
