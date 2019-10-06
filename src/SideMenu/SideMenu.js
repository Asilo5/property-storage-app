import React, { Component } from 'react';
import './SideMenu.scss';

class SideMenu extends Component {
  constructor() {
      super();
      this.state = {
        isSideBarOpen: false
      }
  }

  handleMenuClick = () => {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen })
  }

  render() {
      console.log(this.state.isSideBarOpen)
     const { isSideBarOpen } = this.state;
      return(
        <section className='side-menu'>
            <div className='menu-button' onClick={() => this.handleMenuClick()} >
              <i className="fas fa-bars"></i>
            </div>
            <nav className={`nav ${isSideBarOpen ? '' : 'show'}`}>
                {/* if sidebar is true add class show, else hide  */}
              <div className='close-nav' onClick={() => this.handleMenuClick()} ><i className="fas fa-times"></i></div>
              <ul className='menu-items'>
                <li className='menu-list'>Your Information</li>
                <li className='menu-list'>Sign out</li>
              </ul>
            </nav>

        </section>
      )
  }
}

export default SideMenu;