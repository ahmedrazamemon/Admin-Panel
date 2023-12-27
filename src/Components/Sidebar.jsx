// Sidebar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-content">
        {/* Your sidebar content goes here */}
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
    </div>
  );
};

export default Sidebar;
