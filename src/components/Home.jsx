import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { useSelector } from 'react-redux'
import Smallside from './Smallside'


const Home = () => {
  const isSidebar=useSelector((store)=>store.app.isSidebar);
 
 
  
  return (
    <div className='flex'>
     {
      isSidebar?<Sidebar></Sidebar>:<Smallside></Smallside>
     }
     <Maincontainer></Maincontainer>
        
    </div>
  )
}

export default Home