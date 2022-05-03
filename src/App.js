import React from 'react';
import SideLeft from './Components/SideLeft';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Zones from './Components/Zones'
import Branches from './Components/Branches'
import Members from './Components/Members'
import Birthdays from './Components/Birthdays'
import Pins from './Components/Pins'
import Users from './Components/Users'

import {Navbar} from './Navbar/Navbar'




import './App.css'


export const App = () => {
  return (
    <HashRouter>
      
      
        
        <aside>
          <Navbar/>
        <SideLeft/>
      
        <Routes>
        <Route path='Dashboard/' element={<Dashboard/>}/>
        <Route path='/Zones' element={<Zones/>}/>
        <Route path='/Branches' element={<Branches/>}/>
        <Route path='/Members' element={<Members/>}/>
        <Route path='/Birthdays' element={<Birthdays/>}/>
        <Route path='/Pins' element={<Pins/>}/>
        
        <Route path='/Users' element={<Users/>}/>

     
    
      </Routes> 
        </aside>
    </HashRouter>
    
  )
}

{/* <HashRouter>
<div className=''></div>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/> 
      <Route path='/team' element={<Team/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Form/>}/>
</Routes>  */}

