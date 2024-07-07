import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/header.css';
import './../styles/menu.css';

const Navbar = () => {
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger_bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger_bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger_bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div>
            <div className="burger_menu" onClick={updateMenu}>
                <span className={burger_class} ></span>
                <span className={burger_class} ></span>
                <span className={burger_class} ></span>
            </div>

            <div className={menu_class} onClick={"menu hidden"}>

              <ul className='menu_section'>
                <li className='menu_links'>
                    <NavLink to="/">
                        <span className='menu_number'>00</span>
                        <span className='menu_title'>home</span>
                    </NavLink> 
                </li>
                <li className='menu_links'>
                    <NavLink to="/work">
                        <span className='menu_number'>01</span>
                        <span className='menu_title'>work</span>
                    </NavLink> 
                </li>
                <li className='menu_links'>
                    <NavLink to="/contact">
                        <span className='menu_number'>02</span>
                        <span className='menu_title'>contact</span>
                    </NavLink> 
                </li>
              </ul>

              


            </div>
        </div>
  );
};

export default Navbar;