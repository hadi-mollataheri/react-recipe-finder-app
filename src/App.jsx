import icon from './assets/icon-360px.png';
import { MagnifyingGlass } from '@phosphor-icons/react';

function App() {
  return (
    <>
      <header className='sm:flex sm:justify-between'>
        <div id='icon'>
          <img src={icon} alt='burger' width={30} />
          <p>Hadi&apos;s Recipe Finder</p>
        </div>

        <div id='searchBox' className='flex items-center sm:relative sm:block'>
          <input
            type='search'
            aria-label='search box'
            placeholder='Search Recipe'
            className=' border-2 border-black pl-9 pb-2 pt-1 sm:pb-3 sm:pt-2 leading-none'
          />
          {/* sm:top-[(input or div height(45.33px) - button height(23px)) / 2]  
          This(-) gives the amount of space that needs to be distributed 
          above and below the inner element and then divide by 2  
          gives the amount of space that should be placed above 
          the inner element to center it vertically*/}
          <button className='absolute left-2 sm:top-[11.165px] pt-0.5 sm:pt-0'>
            <MagnifyingGlass size={23} color='#6c6565' />
          </button>
        </div>
      </header>
      <img src={icon} alt='burger' width={200} className='opacity-50' />
    </>
  );
}

export default App;

