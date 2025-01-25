import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-48 h-screen shadow-md overflow-y-scroll">
      <div className="p-2">
        <ul>
          <li>i Home</li>
          <li>i Shorts</li>
          <li>i Subscriptions</li>
        </ul>
      </div>
      <div className="p-2">
        <h1 className="font-bold">You</h1>
        <ul>
          <li>i History</li>
          <li>i Playlist</li>
          <li>i Your Videos</li>
          <li>i Netflix</li>
        </ul>
      </div>
      <div className="p-2">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>i E TV</li>
          <li>i Maa TV</li>
          <li>i TV 9</li>
          <li>i Watched Videos</li>
        </ul>
      </div>
     
     
      
    </div>
  );
};

export default Sidebar;
