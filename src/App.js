import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar';
import TypeBtns from './components/TypeBtns';
import sqlGrid from './components/sqlGrid';

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className='text-5xl text-white font-bold mb-[25px]'>Search engine</h1>
      <TypeBtns/>
      <Searchbar/>
      <sqlGrid/>
      
    </div>
  );
}

export default App;
