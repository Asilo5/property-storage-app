import React, { Component } from 'react';

class SearchProperty extends Component {
    constructor() {
      super();
      this.state = {
         location: ''
      }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name] : e.target.value })
    }

    submitSearch = (e) => {
      e.preventDefault();

      // method in app goes here to search property by location

      this.setState({ location: '' })
    }

    render() {
        return(
          <form>
              <input className='search-property' 
                     type='text'
                     name='location' 
                     value={this.state.location}
                     onChange={(e) => this.handleChange(e)}/>
              <button className='search-button' onClick={(e) => {this.submitSearch(e)}}>Search</button>
          </form>
        )
    }
}

export default SearchProperty;