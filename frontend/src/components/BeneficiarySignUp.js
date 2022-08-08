import React, {useState} from 'react'
import Cookies from 'js-cookie'
import uuid from 'react-uuid'
import {useNavigate} from 'react-router-dom'
import './BeneficiarySignUp.css'
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
    const [organization, setOrganization] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        const sessionID = uuid()
        axios.post('/new-beneficiary-account', 
        {
            name: name,
            email: email,
            password1: pw1,
            password2: pw2,
            address: address,
            phoneNum: phoneNum,
            organization: organization,
            cookie: sessionID
        }).then((res) => {
            if (res.data.userSaved) {
                Cookies.set('session', sessionID, {expires: 36500})
                navigate("/beneficiary-request");
            } else {
                setShowError(true)
            } 
        })
    }

    return (
        <div>
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
                <div className="everything">
                    <form method="POST" action="/new-beneficiary-account" class="formclass">
                        <fieldset>
                            { showError ? <p className="ripPasswords">bro, the passwords don't even match mate</p> : null }
                            <label> Enter Your Name 
                                <input value={name} onChange={e => {setName(e.target.value)}} type="text" name="name" placeholder="Name" required></input>
                            </label>
                            <label> Enter Your Email: 
                                <input value={email} onChange={e => {setEmail(e.target.value)}} type="email" name="email" placeholder="Email" required></input>
                            </label>
                            <label> password 
                                <input value={pw1} onChange={e => {setPw1(e.target.value); setShowError(false)}} type="password" name="password1" placeholder="password" required></input>
                            </label>
                            <label> re-enter password 
                                <input value={pw2} onChange={e => {setPw2(e.target.value); setShowError(false)}} type="password" name="password2" placeholder="re-enter password" required></input>
                            </label>
                            <label> address 
                                <input value={address} onChange={e => {setAddress(e.target.value)}} type="text" name="address" placeholder="address" required></input>
                            </label>
                            <label> phone number 
                                <input value={phoneNum} onChange={e => {setPhoneNum(e.target.value)}} type="text" name="phoneNum" placeholder="phone number" required></input>
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>What Best Describes your Organisation?
                                <select name="organization" onChange={e => {setOrganization(e.target.value)}} required>
                                    <option value="select">(select one)</option>
                                    <option value="school">School</option>
                                    <option value="worshipPlace">Place of Worship</option>
                                    <option value="communityCentre">Community Centre</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </fieldset>
                        <button onClick={handleSubmit} type="submit" value="Create Account">Create Account</button>
                    </form>
                    <br></br>
                    <div class="imageHolder">
                        <img src={HeroShot} alt='Hero Shot' />
                    </div>




                </div>
            </div>
        </div>
    );


}

export default BeneficiarySignUp;