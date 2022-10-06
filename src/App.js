import React ,{useState}from 'react'
import './App.css';
import FirstSection from './Components/FirstSection';

import Data from "./weather.json"
function App() {
  const[data,setData]=useState(Data)

  return (
   <>
   
   <FirstSection Data={data} />
   </>
  );
}

export default App;
