import React, { Component } from 'react';
import '../../reset.scss';
import './App.scss';
import { Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar';
import SearchProperty from '../SearchProperty/SearchProperty';
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
        <Route exact path='/' render= { () => <SearchProperty /> } />
        <Route exact path='/' render= { () => <PropertyContainer /> } />
      </main>
    )
  }
}

export default App;
