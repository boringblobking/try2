import React, {useEffect} from 'react'
import Cookies from 'js-cookie'
import './LandingPage.css'
import smallLogo from '../images/logo.png'
import bigLogo from '../images/big-logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const session = Cookies.get('session')
        if (session) {
            console.log("yes theres a session here")
            axios.post('/get-user-type', { session: session }).then((res) => {
                console.log("posted ennit")
                if (res.data.userType === "food bank") {
                    console.log("going to food bank")
                    navigate('/food-bank-requests')
                } else if (res.data.userType === "beneficiary") {
                    console.log("going to beneficiary")
                    navigate('/beneficiary-request')
                } else {
                    console.log("it seems some user has managed to get a session ID that is unrelated to any account in the database")
                }
            })
        } 
    }, []);
    


    return (
        <div className='landing-bdy'>
            <nav className='navbar'>
                <div className='full-logo'>
                    <img src={smallLogo} alt="sry rekt" className='logo' />
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>

                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='jumbotron'>
                <div>
                    <div className='jumbo-full-logo'>
                        <img src={bigLogo} alt="rekt" className='jumbo-logo' />
                        <h4 className='jumbo-logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h4>
                    </div>
                    <h1 className='white jumbo-txt'>A single place to help those in need</h1>
                    <p className='white jumbo-mini-txt'>Food&Flow provides a single place to communicate with your recipients and suppliers</p>
                </div>
                <div className='circle-container'>
                    <div className='circle-one'></div>
                    <div className='circle-two'></div>
                </div>
            </div>

            <div className='Signup'>
                <h2 >Sign up to food & flow</h2>
            </div>

            <div className='Singup-Options'>
                <a href='http://localhost:3000/beneficiary-sign-up'>
                    <div className='Beneficiary-Signup'>
                        <h3>I am representing my community</h3>
                        <p> You are a representative of a school, religous centre, or other community centre
                        </p>
                    </div >
                </a>

                <a href='http://localhost:3000/food-bank-sign-up'>
                    <div className='Foodbank-Signup'>
                        <h3>I am representing a foodbank</h3>
                        <p> You are a volunteer or a leader at a foodbank looking to streamline operations
                        </p>
                    </div>
                </a>

            </div>

            <a href='http://localhost:3000/login'>
                <div className='Already-Have-an-Account'>
                    <h4> Already have an account? Sign in</h4>
                </div>
            </a>

        </div >
    )
}

export default LandingPage;