import React from 'react';
//import FontAwesome from 'react-fontawesome'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShop, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'





function Header() {
    return (
        <nav className="ff">
            <div className="container">
                <h1 className="logo">DUMMY STORE</h1>
                <ul className="links">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">support</a></li>
                </ul>
                <ul className="ca-se">
                    <a href="#">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="i"/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faCartShopping} className="i"/>
                    </a>
                </ul>
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Header;