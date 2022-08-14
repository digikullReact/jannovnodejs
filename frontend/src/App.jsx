import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Api from './components/Api'
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Show from './components/Show';
import Page from './components/Page';

function App() {


  return (
    <div className="App">

<Routes>
      <Route path="/add" element={  <Api/>}/>
      <Route path="/show" element={ <Show/>}/>
      <Route path="/page" element={ <Page/>}/>
       
      
    
    </Routes>

 
    
    </div>
  )
}

export default App
