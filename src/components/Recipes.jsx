import Recipe from './Recipe';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Recipes() {
  const { fetchedDataState } = useContext(FetchedDataContext);

  return (
    <div className='relative top-20'>
      {/* If search button is not clicked */}
      {!fetchedDataState ? (
        <img src={icon} alt='burger' width={200} className='opacity-50' />
      ) : // If search button is clicked but no recipe found
      fetchedDataState.count === 0 ? (
        <h2>Not Found!</h2>
      ) : (
        // If search button is clicked and some recipe are found
        fetchedDataState.hits.map((currentRecipe, index) => {
          return <Recipe key={index} recipe={currentRecipe.recipe} />;
        })
      )}
    </div>
  );
}

export default Recipes;
