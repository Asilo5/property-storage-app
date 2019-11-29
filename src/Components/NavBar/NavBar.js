import React from 'react'; 
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <navbar>
        <h1>Proplr</h1>
        <div className='nav-links'>
          <NavLink to='/aboutus' className='nav' activeClassName='active'> About us </NavLink>
          <NavLink to='/contact' className='nav' activeClassName='active'> Contact </NavLink>
          <NavLink to='/login' className='nav' activeClassName='active'> Login </NavLink>
        </div>
    </navbar> 
  )
}

export default NavBar;