/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Ingredients({ recipe, index }) {
  const { handleCloseIngsButton } = useContext(FetchedDataContext);

  return (
    // id=ingredients-bg is positioned relative to the id=recipes-container
    <div id='ingredients-container' className='sticky mt-5 w-full h-full rounded-md'>
      <div className='bg-[#6B0FE0] p-2 rounded-md'>
        <table className='border-separate w-[90%] mx-auto table-fixed'>
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
              <td className='bg-[#3A8B5F] text-center'>
                {Math.round(recipe.calories)}
              </td>
            </tr>
          </tfoot>
        </table>
        <button
          onClick={() => handleCloseIngsButton(index)}
          className='mx-auto w-full'
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
