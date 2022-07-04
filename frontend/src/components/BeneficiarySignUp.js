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

                    <form class="formclass">
                        <fieldset>
                            <label> Enter Your Name <input type="text" name="name" placeholder="Name" required></input></label>
                            <label> Enter Your Email: <input type="email" name="email" placeholder="Email" required></input></label>
                            <label> Enter Location <input type="text" name="name" placeholder="Location" required></input></label>
                            <label> Enter contact number <input type="text" name="number" pattern="[0-9]{11,}" placeholder="phone" required></input></label>
                            <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-9]{8,}" placeholder="password" required></input></label>
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
                        <input type="submit" value="Create Account"></input>
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