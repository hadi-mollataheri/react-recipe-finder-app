import Recipe from './Recipe';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';
import { FetchedDataContext } from '../context/FetchDataContextProvider';

function Recipes() {
  const { fetchedDataState } = useContext(FetchedDataContext);
  return (
    <div className='relative top-20'>
      <Recipe />
      <img src={icon} alt='burger' width={200} className='opacity-50' />
    </div>
  );
}

export default Recipes;
