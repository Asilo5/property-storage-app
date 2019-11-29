import React, { Component } from 'react';
import './LoginForm.scss';
import { NavLink } from 'react-router-dom';

class LoginForm extends Component {
    constructor() {
      super();
      this.state = {
          userEmail: '',
          userPassword: '',
          isLoggedIn: false
      }
    }

    handleChange = (e) => {
      this.setState ({[e.target.name] : e.target.value })
    }

    render() {
        return (
        <section className='modal-background'>
            <form>
                <NavLink to='/' className='exit-login'> X </NavLink>
                <section className='login-info'>
                        <label>Email:</label>
                        <input placeholder='youremail@here.com' 
                               type='email' 
                               name='userEmail' 
                               value={this.state.userEmail} 
                               onChange={(e) => this.handleChange(e)}/>
                        <label>Password:</label>
                        <input placeholder='Password' 
                               type='password' 
                               name='userPassword' 
                               value={this.state.userPassword} 
                               onChange={(e) => this.handleChange(e)}/>
                        <button> Submit </button>
                </section>
            </form>
      </section>
        )
    }
}

export default LoginForm;