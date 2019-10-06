import React, { Component } from 'react';
import './SideMenu.scss';

class SideMenu extends Component {
  constructor() {
      super();
      this.state = {

      }
  }

  render() {
      return(
        <section>
            <div className='menu-button'>
              <i className="fas fa-bars"></i>
            </div>
            <nav>
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