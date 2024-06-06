import Recipe from './Recipe';
import icon from '../assets/icon-360px.png';
import {useContext} from 'react';

function Recipes() {
  
  return (
    <div className='relative top-20'>
      <Recipe />
      <img src={icon} alt='burger' width={200} className='opacity-50' />
    </div>
  );
}

export default Recipes;
