import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar';
import TypeBtns from './components/TypeBtns';
import SqlGrid from './components/sqlGrid';
import { useEffect } from 'react';


function App() {

  return (
    // center this div in middle of screen


    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className='pt-50 mt-20 text-5xl text-white font-bold mb-[25px]'>Search engine</h1>
      <TypeBtns/>
      <Searchbar/>
      <SqlGrid/>
      
    </div>
  );
}

export default App;
