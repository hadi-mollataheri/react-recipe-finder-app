import Header from './components/Header';
import Recipes from './components/Recipes';
import FetchDataContextProvider from './context/FetchDataContextProvider.jsx';

function App() {
  return (
    <div id='app-container'>
      <FetchDataContextProvider>
        <Header />
        <Recipes />
      </FetchDataContextProvider>
    </div>
  );
}

export default App;

