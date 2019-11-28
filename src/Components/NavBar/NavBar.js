import React from 'react'; 
import './NavBar.scss';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <navbar>
        <h1>Proplr</h1>
        <NavLink to='/aboutus' > About us </NavLink>
        <NavLink to='/contact' > Contact </NavLink>
        <NavLink to='/login'> Login </NavLink>
    </navbar> 
  )
}

export default NavBar;