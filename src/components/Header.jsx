import { MagnifyingGlass } from '@phosphor-icons/react';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';
import {FetchedDataContext} from '../context/FetchDataContextProvider';

function Header() {
  const { userInput, handleInputChange, handleSearchClick } = useContext(FetchedDataContext);

  return (
    <div className='bg-slate-900 text-white py-4 fixed top-0 h-20 flex items-center w-full z-20'>
      <header className='flex justify-start items-center mx-3 w-full'>
        <div id='logo' className='flex items-center mr-2 w-full'>
          <img src={icon} alt='burger' width={34} className='sm:w-11 md:w-12' />
          <p className='ml-2 sm:text-lg md:text-2xl font-semibold'>Hadi&apos;s Recipe Finder</p>
        </div>

        <div id='searchBox' className='flex items-center relative w-full'>
          <input
            type='search'
            value={userInput}
            onChange={handleInputChange}
            aria-label='search box'
            placeholder='Search Recipe'
            className=' border-2 border-black pl-9 pr-1 py-2 sm:pb-3 sm:pt-2 leading-none w-full rounded-md text-black'
          />
          <button onClick={handleSearchClick} className='absolute left-2 pt-0.5'>
            <MagnifyingGlass size={23} color='#6c6565' />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
