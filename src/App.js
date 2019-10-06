import React, { Component } from 'react';
import './reset.scss';
import './App.scss';

import Header from './Header/Header';
import SearchProperty from './SearchProperty/SearchProperty';
import PropertyContainer from './PropertyContainer/PropertyContainer';
import Favourites from './Favourites/Favourites';
import BookingsCalendar from './BookingsCalendar/BookingsCalendar';
import AddProperty from './AddProperty/AddProperty';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return(
      <main className='App'>
        <Header />
        <SearchProperty />
        <section className='property-filtering'>
          <Favourites />
          <BookingsCalendar />
          <AddProperty />
        </section>
        <PropertyContainer />
      </main>
    )
  }
}

export default App;
