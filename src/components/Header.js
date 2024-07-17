import React from 'react';
import { NavLink } from "react-router-dom";
import './../styles/header.css';
import logo from './../shared/logo.svg';


const Header = () => {
  return (
    <nav className='nav_section'>

      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <ul className='menu_section'>
        <li className='menu_links' id='#work'>
          <a href='#work'>
            <span className='menu_number'>01</span>
            <span className='menu_link'>work</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2YXU4CMRCA63s75Qb+HUACdMAYTbyBol5HxXuhLxJvIOgJ1BCmgi88rRmDBhMeVmDKSuZLmjS73U2+tDPpjDGKoiiKoijrDzV8hYJrxeDuCKEb0X3w+Jrzs+BavMYUkcyYDUJ/Tgi9iJDlGbyW6v6MvzVFgNBvU4CHvAIzhDpU91srlRhW7QEFeJ1XYkqmT+iPVyIxCPaIEMaLSkzJjPmfSSX4KBDC27IkpncmVmE3XWAvEBN5YiZLkQAi+gspifgtU7PNBGk2f4qdWyTAo6hIrPuqtET8kfFlMRFCd5NOxF2LifAVI5VIDK4tJkIBnpPtCEJPTCQGN0q4IyNJkWFCkXcxEUJ4Sni0umIiMbjbNQl210omgnApJ9LwlVQiAyztiYmszRWF4fJUPtDtiZFmsisdOQm4N6kY7Jc2l1HizpDox5rfSSYiVuqiPTQrbD68/Ovmw6920AIxwzHBR9UUgYwTQM02OW3+JcVSsKemqFDw5YhwxVeMSZt0xGMyb/M70epPURRFURTFFIZP5uV0txU7y28AAAAASUVORK5CYII=" alt='Dot' />
          </a> 
        </li>
        <li className='menu_links' id='#contact'>
          <a href='#contact'>
            <span className='menu_number'>02</span>
            <span className='menu_link'>contact</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO2YXU4CMRCA63s75Qb+HUACdMAYTbyBol5HxXuhLxJvIOgJ1BCmgi88rRmDBhMeVmDKSuZLmjS73U2+tDPpjDGKoiiKoijrDzV8hYJrxeDuCKEb0X3w+Jrzs+BavMYUkcyYDUJ/Tgi9iJDlGbyW6v6MvzVFgNBvU4CHvAIzhDpU91srlRhW7QEFeJ1XYkqmT+iPVyIxCPaIEMaLSkzJjPmfSSX4KBDC27IkpncmVmE3XWAvEBN5YiZLkQAi+gspifgtU7PNBGk2f4qdWyTAo6hIrPuqtET8kfFlMRFCd5NOxF2LifAVI5VIDK4tJkIBnpPtCEJPTCQGN0q4IyNJkWFCkXcxEUJ4Sni0umIiMbjbNQl210omgnApJ9LwlVQiAyztiYmszRWF4fJUPtDtiZFmsisdOQm4N6kY7Jc2l1HizpDox5rfSSYiVuqiPTQrbD68/Ovmw6920AIxwzHBR9UUgYwTQM02OW3+JcVSsKemqFDw5YhwxVeMSZt0xGMyb/M70epPURRFURTFFIZP5uV0txU7y28AAAAASUVORK5CYII=" alt='Dot' />
          </a> 
        </li>
      </ul>
      
    </nav>

    
  );
};

export default Header;