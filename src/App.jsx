import icon from './assets/icon-360px.png';

function App() {
  return (
    <>
      <header>
        <div id='icon'>
          <img src={icon} alt='burger' width={30} />
          <p>Hadi&apos;s Recipe Finder</p>
        </div>
        <div id='searchBox'>
          <input type='search' className=' border-2 border-black pl-1' />
        </div>
      </header>
      <img
        src={icon}
        alt='burger'
        width={200}
        className='opacity-50'
      />
    </>
  );
}

export default App;

