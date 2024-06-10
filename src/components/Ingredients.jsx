/* eslint-disable react/prop-types */
function Ingredients({ recipe }) {
  return (
    <div className='bg-[#463242] text-white p-2 absolute top-40 z-10 rounded-md'>
      <table>
        <caption className='caption-top my-3 underline font-bold'>
          {recipe.label}
        </caption>
        <thead>
          <tr>
            <th scope='col'>Ingredients</th>
            <th scope='col'>weight</th>
          </tr>
        </thead>
        <tbody>
          {recipe.ingredients.map((ingredientObj, index) => {
            return (
              <tr key={index + 1}>
                <td>{ingredientObj.text}</td>
                <td>{Math.round(ingredientObj.weight)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope='row' colSpan='2'>
              Calories
            </th>
            <td>{Math.round(recipe.calories)}</td>
          </tr>
        </tfoot>
      </table>
      <button>Close</button>
    </div>
  );
}

export default Ingredients;
