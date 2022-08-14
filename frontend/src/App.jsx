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
      <h1>Header</h1>

<Routes>
      <Route path="/add" element={  <Api/>}/>
      <Route path="/show" element={ <Show/>}/>

      <Route path="/page" element={ <Page/>}/>

       
      
    
    </Routes>

 <h1>Footer</h1>
    
    </div>
  )
}

export default App
