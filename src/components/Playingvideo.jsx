import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { closeSidebar } from '../utils/userSlice';


const Playingvideo = () => {
  const dispatch=useDispatch()
  const {id}=useParams();
  
  useEffect(()=>{
       dispatch(closeSidebar()) 
  },[])
  return (
    <div className='border flex'>
     <div className='border'>
     <iframe width="760" height="515" 
     src={'https://www.youtube.com/embed/' + id +"?autoplay=1"}
     title="YouTube video player" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen
     className=' p-2'
     ></iframe>
     </div>
     <div>
       <h1>kk</h1>
     </div>
     
    </div>
  )
}

export default Playingvideo