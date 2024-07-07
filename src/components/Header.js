import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './../styles/header.css';
import Menu from './../components/Menu';
import umbro from './../shared/umbra-03.jpeg';


const Header = () => {
  return (
    <nav className='nav_section'>

      <NavLink to="/">
        logo
      </NavLink>

      <div className='nav_title'>
        khadidja ait si ali
      </div>

      <Menu />
      
    </nav>

    
  );
};

export default Header;