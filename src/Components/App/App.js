import React, { Component } from 'react';
import '../../reset.scss';
import './App.scss';
import { Route } from 'react-router-dom'

import NavBar from '../NavBar/NavBar';
import MainPage from '../MainPage/MainPage';
import PropertyContainer from '../PropertyContainer/PropertyContainer';
import LoginForm from '../LoginForm/LoginForm';

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
        <Route exact path='/' render= { () => <MainPage /> } />
        <Route exact path='/login' render= { () => <LoginForm /> } />
        <Route exact path='/userproperties' render= { () => <PropertyContainer /> } />
      </main>
    )
  }
}

export default App;
