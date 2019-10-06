import React from 'react'; 
import './Header.scss';
import SideMenu from '../SideMenu/SideMenu';

const Header = () => {
  return(
    <header>
        <h1>Proplr</h1>
        <SideMenu />
    </header> 
  )
}

export default Header;