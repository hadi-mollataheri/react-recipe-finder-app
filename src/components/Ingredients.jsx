/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Ingredients({ recipe, index }) {
  const { handleCloseIngsButton } = useContext(FetchedDataContext);
  return (
    <div id='ingredients-container' className='mt-5 w-full h-full rounded-md lg:absolute lg:-top-20 lg:z-10 lg:left-1/2 lg:rounded-none lg:-translate-x-1/2 lg:bg-slate-900 lg:bg-opacity-40'>
      <div id='bg-container' className='bg-[#6B0FE0] p-2 rounded-md lg:w-1/2 lg:mx-auto lg:mt-28'>
        <table className='border-separate w-[90%] mx-auto table-fixed lg:text-lg'>
          <caption className='caption-top my-3 font-bold text-white'>
            {recipe.label}
          </caption>
          <thead>
            <tr>
              <th scope='col' className='bg-[#E0953F] w-2/3 mx-auto'>
                Ingredients
              </th>
              <th scope='col' className='bg-[#E0953F] w-1/3 mx-auto'>
                weight
              </th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients.map((ingredientObj, index) => {
              return (
                <tr key={index + 1} className=''>
                  <td className='bg-[#3A8B5F] pl-1'>{ingredientObj.text}</td>
                  <td className='bg-[#3A8B5F] text-center'>
                    {Math.round(ingredientObj.weight)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope='row' className='bg-[#E0953F] w-2/3 mx-auto'>
                Calories
              </th>
              <td className='bg-[#3A8B5F] text-center font-semibold'>
                {`${Math.round(recipe.calories)} kcal`}
              </td>
            </tr>
          </tfoot>
        </table>
        <button
          onClick={() => handleCloseIngsButton(index)}
          className='flex justify-center items-start mx-auto bg-red-600 mt-5 mb-4 text-white rounded-md py-2 sm:pt-1 sm:pb-2 px-4 sm:px-6 lg:px-10 lg:pt-2 lg:pb-3'
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
