/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';
import Ingredients from './Ingredients';

function Recipe({ recipe, index }) {

  const { isIngredientsVisible, handleShowIngredientsClick } =
    useContext(FetchedDataContext);

  return (
    recipe && (
      <div className='flex flex-col items-center justify-center rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.4)] w-[90%]'>
        <h2 className='text-center align-middle bg-black w-full rounded-tl-lg rounded-tr-lg pb-3 pt-2 px-1 text-white font-semibold'>
          {recipe.label}
        </h2>
        <div id='content' className='p-5'>
          <div id='img-container' className='max-w-full'>
            <img
              src={recipe.image}
              alt={recipe.label}
              className='mb-5 h-auto border rounded'
            />
          </div>
          <div id='info' className='flex flex-col space-y-5 w-full relative'>
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
          {isIngredientsVisible[index] ? <Ingredients recipe={recipe} index={index} /> : null}
        </div>
      </div>
    )
  );
}

export default Recipe;
