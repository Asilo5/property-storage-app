import React, { Component } from 'react';
import './Login.scss';

class LoginForm extends Component {
    constructor() {
      super();
      this.state = {
          userEmail: '',
          userPassword: '',
          isLoggedIn: false
      }
    }

    render() {
        return (
            <form>
                 <input placeholder='youremail@here.com' 
                        type='email' 
                        name='userEmail' 
                        value={this.state.userEmail} 
                        />
                 <input placeholder='Password' 
                        type='password' 
                        name='userPassword' 
                        value={this.state.userPassword} 
                        />
                 <button> Submit </button>
            </form>
        )
    }
}

export default LoginForm;