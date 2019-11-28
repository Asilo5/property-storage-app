import React, { Component } from 'react';
import '../../reset.scss';
import './App.scss';

import NavBar from '../NavBar/NavBar';
import SearchProperty from '../SearchProperty/SearchProperty';
import PropertyFiltering from '../PropertyFiltering/PropertyFiltering';
import PropertyContainer from '../PropertyContainer/PropertyContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return(
      <main className='App'>
        <NavBar />
        <SearchProperty />
        <PropertyFiltering />
        <PropertyContainer />
      </main>
    )
  }
}

export default App;
