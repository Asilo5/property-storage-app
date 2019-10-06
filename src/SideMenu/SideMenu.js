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
            <i className="fas fa-bars"></i>
        </section>
      )
  }
}

export default SideMenu;