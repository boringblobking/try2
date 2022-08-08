//import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './button'
import './Login.css'
import axios from 'axios'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function login() {
  const [showError, setShowError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
      const session = Cookies.get('session')
      if (session) {
          axios.post('/get-user-type', { session: session }).then((res) => {
              if (res.data.userType === "food bank") {
                  navigate('/food-bank-requests')
              } else if (res.data.userType === "beneficiary") {
                  navigate('/beneficiary-request')
              } else {
                  console.log("it seems some user has managed to get a session ID that is unrelated to any account in the database")
              }
          })
      }
  }, []);

  const handleSubmit = event => {
    event.preventDefault()
    const sessionID = uuid()
    axios.post('/login', { email: email, password: password, session: sessionID })
         .then((res) => {
           if (res.data.result === "food bank successful login") {
             Cookies.set('session', sessionID, {expires : 36500})
             navigate('/food-bank-requests')
           } else if (res.data.result === "beneficiary successful login") {
             Cookies.set('session', sessionID, {expires : 36500})
             navigate('/beneficiary-request')
           } else if (res.data.result === "food bank wrong password" || res.data.result === "beneficiary wrong password" || res.data.result === "wrong email") {
             console.log(res.data.result)
             setShowError(true)
           }
         })
  }

  return(
    <section>
         <div className='logo'><img src={require('../images/logo.png')} alt="sry img is rekt" width='200' height='50' /></div>
          <header class="mainHeader"></header>
          <body>
    <header>
      <h1>Beneficiary/Foodbank Login</h1>
      <section>
        <div>
          { showError ? <p className="ripPasswords">bro, either ur emails wrong ur u didnt even get ur password right</p> : null}
          <strong>email: <input value={email} onChange={e => {setEmail(e.target.value); setShowError(false)}} name="email" type="text" /> </strong>
          <br />
          <br />
          <div>password: <input value={password} onChange={e => {setPassword(e.target.value); setShowError(false)}} name="password" type="password" /></div>
          <br />
          
        </div>
        <button onClick={handleSubmit} type="submit">Login</button>
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