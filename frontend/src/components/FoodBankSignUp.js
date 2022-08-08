import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './FoodBankSignUp.css'
import uuid from 'react-uuid'
import Cookies from 'js-cookie'
import './LandingPage.css'
import smallLogo from '../images/logo.png'
import HeroShot from '../images/HeroShot.png'
import axios from 'axios'

function BeneficiarySignUp() {
    const navigate = useNavigate()
    const [showError, setShowError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pw1, setPw1] = useState('')
    const [pw2, setPw2] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [helpType, setHelpType] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        const sessionID = uuid()
        axios.post('/new-food-bank-account', 
        {
            name: name,
            email: email,
            password1: pw1,
            password2: pw2,
            address: address,
            phoneNumber: phoneNum,
            helpType: helpType,
            cookie: sessionID
        }).then((res) => {
            if (res.data.passwordsSame) {
                Cookies.set('session', sessionID, {expires: 36500})
                navigate("/food-bank-requests");
            } else {
                setShowError(true)
            } 
        })
    }

    return (
        <div className='landing-bdy'>
            <nav className='navbar'>
                <div className='full-logo'>
                    <img src={smallLogo} alt="sry img rekt" className='logo' />
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>

                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className='Content'>
                <div className='LHS'>
                    <div className='Header'>
                        <h1>Create an account</h1>
                        <p>Tell us about yourself</p>
                    </div>

                    <form method="POST" action="/new-food-bank-account">
                        <div class="TextBox">
                            { showError ? <p className="ripPasswords">bro, the passwords don't even match mate</p> : null}
                            <br />
                            <div><input value={name} onChange={e => {setName(e.target.value)}} name="name" type="text" placeholder="Name of centre or organisation" /></div>
                            <br />
                            <div><input value={email} onChange={e => {setEmail(e.target.value)}} name="email" type="email" placeholder="Email" /></div>
                            <br />
                            <div><input value={pw1} onChange={e => {setPw1(e.target.value); setShowError(false)}} name="password1" type="password" placeholder="Password" /></div>
                            <br />
                            <div><input value={pw2} onChange={e => {setPw2(e.target.value); setShowError(false)}} name="password2" type="password" placeholder="Retype Password" /></div>
                            <br />
                            <div><input value={address} onChange={e => {setAddress(e.target.value)}} name="address" type="text" placeholder="Full address" /></div>
                            <br />
                            <div><input value={phoneNum} onChange={e => {setPhoneNum(e.target.value)}} name="phoneNumber" type="text" placeholder="Contact number" /></div>
                            <br />
                            <div><input value={helpType} onChange={e => {setHelpType(e.target.value)}} name="helpType" type="text" placeholder="Type of help" /></div>
                            <br />
                            <button onClick={handleSubmit} type="submit" value="Create Account">submit</button>
                            </div>
                    </form>
                </div>

                <div class="imageHolder">
                    <img src={HeroShot} alt='Hero Shot' />
                </div>


            </div>

        </div>


    );

}

export default BeneficiarySignUp;