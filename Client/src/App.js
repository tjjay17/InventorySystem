import {useState} from 'react';
import Navbar from "./UI/Navbar/Navbar"
import "./App.css"
import AddItem from "./UI/AddItem/AddItem"
import PageDim from './UI/PageDim/PageDim';

function App() {
  const[isOpen, updateOpen] = useState(false);
  
  let addBtnHandler = (e) =>{
    updateOpen(prevstatus => !prevstatus);
  }

  return (
    <div className="App">
      <Navbar btnHandler = {addBtnHandler} />
      {isOpen ? <PageDim  /> : null}
      {isOpen ? <AddItem btnHandler = {addBtnHandler}/> : null}
    </div>
  );
}

export default App;
