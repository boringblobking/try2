//import logo from './logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './button';
import './Home.css';

function login() {
  return(
    <section>
         <div className='logo'><img src={require('../images/logo.png')} width='200' height='50' /></div>
          <header class="mainHeader"></header>
          <body>
    <header>
      <h1>Beneficiary/Foodbank Login</h1>
      <section>
        <div>
          <strong>email: <input type="text" /> </strong>
          <br />
          <br />
          <div>password: <input type="text" /></div>
          <br />
          
        </div>
        <Link to='/foodbank'><button>Login</button></Link>
        <h2>Haven't signed up?</h2>
   
        <Link to='/signup'>
        <Button name="button" className='btns' buttonStyle='btn-outline' buttonSize='btn--medium'>
           Sign Up
        </Button>
        </Link>
      </section>
    </header>
  </body>
  
  </section>
  );
}
export default login;