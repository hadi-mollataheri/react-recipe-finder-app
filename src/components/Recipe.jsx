/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';
import Ingredients from './Ingredients';

function Recipe({ recipe, index }) {
  const { isIngredientsVisible, handleShowIngredientsClick } =
    useContext(FetchedDataContext);
  // console.log(recipe.label); 
  return (
    recipe && (
      <div className='flex flex-col items-center justify-center rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.4)] w-[90%] sm:w-full'>
        <div id='recipe-name-container' className='bg-black w-full rounded-tl-lg rounded-tr-lg px-[1px]'>
          <h2 className='text-center align-middle  pb-3 pt-2 px-1 text-white font-semibold sm:min-h-20 sm:m-[1px] sm:p-[1px] sm:flex sm:items-center sm:justify-center'>
            {recipe.label}
          </h2>
        </div>

        <div id='content' className='p-5 sm:p-2 sm:h-full'>
          <div id='img-container' className='max-w-full flex justify-center'>
            <img
              src={recipe.image}
              alt={recipe.label}
              className='mb-5 sm:mb-2 w-full h-auto border rounded'
            />
          </div>
          <div
            id='info'
            className='flex flex-col space-y-5 sm:space-y-2 w-full'
          >
            <button
              id='ingredients'
              onClick={() => handleShowIngredientsClick(index)}
              className='bg-green-600 pb-3 pt-2 text-white font-semibold rounded'
            >
              Ingredients
            </button>
            <button
              id='full-recipe'
              className='bg-[#9B3B8B] pb-3 pt-2 text-white font-semibold rounded'
            >
              <a href={recipe.url} target='_blank'>
                See Complete Recipe
              </a>
            </button>
          </div>
          {isIngredientsVisible[index] ? (
            <Ingredients recipe={recipe} index={index} />
          ) : null}
        </div>
      </div>
    )
  );
}

export default Recipe;
