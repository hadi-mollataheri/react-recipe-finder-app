/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Ingredients({ recipe, index }) {
  const { handleCloseIngsButton } = useContext(FetchedDataContext);

  return (
    <div className='bg-[#6B0FE0] p-2 absolute top-40 z-10 rounded-md'>
      <table className='border-separate w-11/12 mx-auto table-fixed'>
        <caption className='caption-top my-3 font-bold text-white'>
          {recipe.label}
        </caption>
        <thead>
          <tr>
            <th scope='col' className='bg-[#E0953F] w-2/3 mx-auto'>Ingredients</th>
            <th scope='col' className='bg-[#E0953F] w-1/3 mx-auto'>weight</th>
          </tr>
        </thead>
        <tbody>
          {recipe.ingredients.map((ingredientObj, index) => {
            return (
              <tr key={index + 1} className=''>
                <td className='bg-[#3A8B5F]'>{ingredientObj.text}</td>
                <td className='bg-[#3A8B5F] text-center'>{Math.round(ingredientObj.weight)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope='row' className='bg-[#E0953F] w-2/3 mx-auto'>
              Calories
            </th>
            <td className='bg-[#3A8B5F] text-center'>{Math.round(recipe.calories)}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => handleCloseIngsButton(index)} className='mx-auto w-full'>Close</button>
    </div>
  );
}

export default Ingredients;
