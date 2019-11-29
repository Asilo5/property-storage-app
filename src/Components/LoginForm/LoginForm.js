import React, { Component } from 'react';
import './LoginForm.scss';
import { NavLink, Route, Link } from 'react-router-dom';

class LoginForm extends Component {
    constructor() {
      super();
      this.state = {
          userEmail: '',
          userPassword: '',
          isLoggedIn: false
      }
    }

    modalToggle = () => {
      this.setState ({
         modalOpen: !this.state.modalOpen
      })
    }

    render() {
        return (
        <section className='modal-background'>
            <form>
                <NavLink to='/' className='exit-login'> X </NavLink>
                <section className='login-info'>
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
                </section>
            </form>
      </section>
        )
    }
}

export default LoginForm;