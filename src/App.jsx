import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { useSelector } from 'react-redux';
import Smallside from './components/Smallside';
import Sidebar from './components/Sidebar';
useSelector

function App() {
  const isSidebar=useSelector((store)=>store.app.isSidebar);
  return (
    <div>
    <Navbar></Navbar>
    <div>
    <div className='flex'>
     {
      isSidebar?<Sidebar></Sidebar>:<div></div>
     }
     <Outlet></Outlet>
        
    </div>
    </div>
    
    
    </div>
  );
}

export default App;
