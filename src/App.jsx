import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="ml-3">
     <Outlet></Outlet>
    </div>
  );
}

export default App;
