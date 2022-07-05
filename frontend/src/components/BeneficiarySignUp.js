import React from 'react';
import './BeneficiarySignUp.css'
import './LandingPage.css'
import './BeneficiarySignUp.css'
import smallLogo from '../images/logo.png'
import bigLogo from '../images/big-logo.png'
import HeroShot from '../images/HeroShot.png'

function BeneficiarySignUp() {
    return (
        <div>
            <div className='landing-bdy'>
                <nav className='navbar'>
                    <div className='full-logo'>
                        <img src={smallLogo} className='logo' />
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
                            <label> Enter Your Name <input type="text" name="name" placeholder="Name" required></input></label>
                            <label> Enter Your Email: <input type="email" name="email" placeholder="Email" required></input></label>
                            <label> password <input type="password" name="password1" placeholder="password" required></input></label>
                            <label> re-enter password <input type="password" name="password2" placeholder="re-enter password" required></input></label>
                            <label> address <input type="text" name="address" placeholder="address" required></input></label>
                            <label>phone number <input type="text" name="phoneNumber" placeholder="phone number" required></input></label>
                            <label>Type of organization <input type="text" name="organizationType" placeholder="type of organization" required></input></label>
                        </fieldset>
                        <fieldset>
                            <label>What Best Describes your Organisation?
                                <select name="beneficiary-type" required>
                                    <option value="">(select one)</option>
                                    <option value="1">School</option>
                                    <option value="2">Place of Worship</option>
                                    <option value="3">Community Centre</option>
                                    <option value="4">Other</option>
                                </select>
                            </label>
                        </fieldset>
                        <button type="submit" value="Create Account">Create Account</button>
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