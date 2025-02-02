import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sideBartoggle } from '../utils/userSlice';
import { SEARCH_API } from '../constants';
import axios from 'axios';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (query) {
      getSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getSearchResults = async () => {
    try {
      const response = await axios.get(SEARCH_API + query);
      setSearchResults(response?.data[1]);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      navigate(`/searchvideo/${encodeURIComponent(searchQuery)}`);
      setQuery('');
      setIsSearchFocused(false);
      setShowSearch(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsSearchFocused(false);
        setQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex items-center justify-between h-14 px-2 sm:px-4">
         
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Home"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube Logo"
                className="h-4 sm:h-5"
              />
            </button>

            <button
              onClick={() => dispatch(sideBartoggle())}
              className="p-2 hover:bg-gray-100 rounded-full hidden sm:block"
              aria-label="Toggle Sidebar"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

         
          <div
            className={`
              ${showSearch
                ? 'fixed inset-x-0 top-0 bg-white h-14 px-4 flex items-center z-50'
                : 'hidden'
              }
              sm:static sm:flex sm:flex-1 sm:max-w-2xl sm:mx-4 sm:px-0
            `}
            ref={searchInputRef}
          >
            {showSearch && (
              <button
                onClick={() => setShowSearch(false)}
                className="mr-4 sm:hidden"
                aria-label="Close Search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div className="flex flex-1 items-center">
              <div className="flex flex-1 items-center border rounded-l-full px-4 py-1.5 sm:py-2 focus-within:border-blue-500">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full focus:outline-none text-sm"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(query);
                    }
                  }}
                />
              </div>
              <button
                onClick={() => handleSearch(query)}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200"
                aria-label="Search"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white mt-1 shadow-lg rounded-lg max-h-[calc(100vh-80px)] overflow-y-auto mx-2 sm:mx-4">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(result)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-sm"
                  >
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>{result}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

         
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 hover:bg-gray-100 rounded-full sm:hidden"
              aria-label="Open Search"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full hidden sm:block"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <div className="dropdown dropdown-end">
              <button
                className="btn btn-ghost btn-circle avatar p-1 sm:p-2"
                aria-label="User Menu"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
              <ul className="dropdown-content menu menu-sm mt-3 w-48 sm:w-52 bg-white shadow-lg rounded-lg border">
                <li><a className="py-2 hover:bg-gray-100 text-sm">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;