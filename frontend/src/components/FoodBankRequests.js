import React, {useEffect, useState} from 'react';
import './FoodBankRequests.css'
import smallLogo from '../images/logo.png'

function FoodBankRequests() {
    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/support-requests');
        const items = await data.json();
        setItems(items);
    };

    return(
        <div className="pageContent">
            <nav className='navbar'>
                <div className='full-logo'>
                    <img src={smallLogo} className='logo'/> 
                    <h3 className='logo-txt'><span className='red'>Food</span><span className='purple'>&Flow</span></h3>
                </div>

                <ul className='nav-links'>
                    <li><strong>Home</strong></li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="topGap"></div>
            <div className="welcomeBox">
                <h2 className="welcomeMessage">Welcome, Liverpool Street Food Bank</h2>
                <p className="welcomeSubText">Use this area to track and receive requests for help.</p>
            </div>
            <div>
                <h2 className="yourRequests">Your requests</h2>
                <p className="yourRequestsSubText">When you receive requests for help, they will appear here</p>
            </div>
            <div className="cardsContainer">
                {items.map(item => (
                    <div>
                        <div className='card' key={item.email}>
                            <div className='purpleLine'></div>
                            <div className="textDiv">
                                <div>
                                    <span className='cardTitle'>{item.requestingOrganization}</span> 
                                    <span className="cardTitleSubText">has sent a request for help</span>
                                </div>
                                <div className="quantityContainer"> 
                                    <div className='quantityLabel'>Number of people in need:</div> 
                                    <div className="quantityTag">
                                        <p className="quantityText">{item.needQuantity}</p>
                                    </div> 
                                </div>
                                <div className="helpTypeContainer"> 
                                    <div className='helpTypeLabel'>Type of help needed:</div> 
                                    <div className="helpTypeTag">
                                        <p className="helpTypeText">{item.helpType}</p>
                                    </div> 
                                </div>
                                <div className="statusContainer"> 
                                    <div className='statusLabel'>Status:</div> 
                                    <div className="statusTag">
                                        <p className="statusText">To do</p>
                                    </div> 
                                </div>
                                <div className='received'>
                                    <p>Received {new Date(item.createdAt).getDate()}/{new Date(item.createdAt).getMonth() + 1}/{new Date(item.createdAt).getFullYear()}</p>
                                </div>
                                <button className='completedBtn'>Mark as completed</button>
                            </div>
                        </div>
                        <br></br>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoodBankRequests;