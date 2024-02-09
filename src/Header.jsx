import React, { useState, useEffect, useRef } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleOutsideClick = (event) => {
    // Close search box if clicked outside
    if (isSearchVisible && !event.target.closest('.search-box')) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSearchVisible]);

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-box'>
          <BsSearch className='icon' onClick={handleSearchClick} />
          {isSearchVisible && (
            <input type='text' placeholder='Search...' />
          )}
        </div>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;