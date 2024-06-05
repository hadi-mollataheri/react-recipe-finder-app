import Recipe from './Recipe';
import icon from './assets/icon-360px.png';

function Recipes() {
  return (
    <div>
      <Recipe />
      <img src={icon} alt='burger' width={200} className='opacity-50' />
    </div>
  );
}

export default Recipes;
