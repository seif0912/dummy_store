import React from 'react';
//import FontAwesome from 'react-fontawesome'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShop, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {Link, link} from 'react-router-dom'




function Header() {


    const [isActive, setActive] = React.useState(false)

    function flipActive(){
        setActive( prevState => !prevState )
    }


    window.addEventListener("resize", function(){
        const winWidth = window.innerWidth
        if (winWidth >= 790 && isActive){
            setActive( false )
        }
    })

    return (
        <nav className={isActive ? 'active' : ''}>
            <div className="container">
                <Link to='/'>
                    <h1 className="logo">DUMMY STORE</h1>
                </Link>
                <ul className="links">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="shop">shop</Link></li>
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
                <div onClick={flipActive} className={isActive ? 'burger active' : 'burger'} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Header;