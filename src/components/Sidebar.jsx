import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = {
    main: [
      {  label: 'Home', path: '/' },
      { icon: '📱', label: 'Shorts', },
      { icon: '📺', label: 'Subscriptions', },
    ],
    personal: [
      { icon: '📚', label: 'Library',},
      { icon: '⏱️', label: 'History',},
      { icon: '🎬', label: 'Your Videos',},
      { icon: '⏰', label: 'Watch Later', },
      { icon: '👍', label: 'Liked Videos',},
    ],
    subscriptions: [
      { icon: '📺', label: 'E TV', },
      { icon: '📺', label: 'Maa TV',},
      { icon: '📺', label: 'TV 9',},
      { icon: '📺', label: 'News',},
    ],
  };

  const MenuItem = ({ icon, label, path }) => (
    <li>
      <button
      
        className="flex items-center w-[100] px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors"
      >
        
        <span className="">{label}</span>
      </button>
    </li>
  );

  const MenuSection = ({ title, items }) => (
    <div className="mb-4 px-1">
      {title && (
        <h3 className="px-3 py-2 text-sm font-medium text-gray-700">
          {title}
        </h3>
      )}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );

  return (
    <div className="w-64 h-[calc(100vh-56px)] overflow-y-auto bg-white py-3 flex flex-col  ">
      <MenuSection items={menuItems.main} />
      
      <div className="border-t border-gray-200 my-2" />
      
      <MenuSection title="You" items={menuItems.personal} />
      
      <div className="border-t border-gray-200 my-2" />
      
      <MenuSection title="Subscriptions" items={menuItems.subscriptions} />
      
      <div className="border-t border-gray-200 my-2" />
      
      <div className="px-4 py-3 text-xs text-gray-500">
        <p>About Press Copyright sainadh</p>
        <p>Contact us Creators</p>
        <p>Advertise Developers</p>
        <p className="mt-4">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;