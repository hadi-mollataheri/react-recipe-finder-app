import { MagnifyingGlass } from '@phosphor-icons/react';
import icon from '../assets/icon-360px.png';
import { useContext } from 'react';

function Header() {
  return (
    <div className='bg-slate-900 text-white py-4 fixed top-0 h-20 flex items-center w-full z-10'>
      <header className='flex justify-start items-center mx-3 w-full'>
        <div id='logo' className='flex items-center mr-2 w-full'>
          <img src={icon} alt='burger' width={34} />
          <p className='ml-2 font-semibold'>Hadi&apos;s Recipe Finder</p>
        </div>

        <div id='searchBox' className='flex items-center relative w-full'>
          <input
            type='search'
            aria-label='search box'
            placeholder='Search Recipe'
            className=' border-2 border-black pl-9 pr-1 pb-2 pt-1 sm:pb-3 sm:pt-2 leading-none w-full rounded-md text-black'
          />
          <button className='absolute left-2 pt-0.5'>
            <MagnifyingGlass size={23} color='#6c6565' />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
