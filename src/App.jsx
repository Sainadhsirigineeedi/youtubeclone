import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import { adddataMorevideos } from './utils/userSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { YOUTUBEAPI } from './constants';



function App() {
  const isSidebar = useSelector((store) => store.app.isSidebar);
   const dispatch=useDispatch();
  useEffect(()=>{
    getVideosData()
  })
  const getVideosData = async () => {
    try {
      const response = await axios.get(YOUTUBEAPI);
      const data = response?.data?.items;
      const data1=data.slice(0,9)
      dispatch(adddataMorevideos(data1))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

 
      <div className="flex">
       
        <div className={`${isSidebar ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
          {isSidebar && <Sidebar />}
        </div>

       
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebar ? 'ml-0' : 'ml-0'}`}>
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;