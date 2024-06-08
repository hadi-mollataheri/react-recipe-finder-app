/* eslint-disable react/prop-types */

function Recipe({ recipe }) {
  return (
    recipe && (
      <div>
        <h2>{recipe.label}</h2>
        <div id='img-container'>
          <img src={recipe.image} alt={recipe.label} />
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
