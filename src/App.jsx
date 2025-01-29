import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const isSidebar = useSelector((store) => store.app.isSidebar);

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