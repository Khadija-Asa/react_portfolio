import React from 'react';
import { NavLink } from "react-router-dom";
import './../styles/header.css';
import Menu from './../components/Menu';
import logo from './../shared/logo.svg';


const Header = () => {
  return (
    <nav className='nav_section'>

      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <Menu />
      
    </nav>

    
  );
};

export default Header;