import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'

function App(){
  
  return (
    <BrowserRouter>
     <div className='App'>
      <Navbar/>
      <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<contact/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  
    
  )
}


export default App;
