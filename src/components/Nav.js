import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
 return (
  <div>
    <nav className='nav'>
 <ul className='navbar-nav listHeader '>
         <li className='nav-item'><NavLink to="/" className='logo nav-link '>ShareNote</NavLink></li>
         <li className='nav-item'><NavLink to='/' className='nav-link'>Home</NavLink></li>
         <li className='nav-item'><NavLink to="/note" className='nav-link'>Note</NavLink></li>
         <li className='nav-item'><NavLink to="/create" className='nav-link'>Create</NavLink></li>
         <li className='nav-item'><NavLink to="/about" className='nav-link'>About </NavLink></li>
        </ul>
     </nav>

  </div>
 );
};

export default Nav;
          