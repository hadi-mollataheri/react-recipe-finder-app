/* eslint-disable react/prop-types */

function Recipe({ recipe }) {
  return (
    recipe && (
      <div className='flex flex-col items-center justify-center rounded-lg shadow-[0_0_3px_rgba(0,0,0,0.4)] w-[90%]'>
        <h2 className='text-center align-middle bg-black w-full rounded-tl-md rounded-tr-md pb-2 pt-1 px-1 text-white'>{recipe.label}</h2>
        <div id='img-container' className='max-w-full'>
          <img src={recipe.image} alt={recipe.label} className='object-contain p-5 h-auto' />
        </div>
        <div id='ingredients'></div>
        <div id='complete-recipe-link'>
          <button>
            <a href={recipe.url} target="_blank">See Complete Recipe</a>
          </button>
        </div>
      </div>
    )
  );
}

export default Recipe;
