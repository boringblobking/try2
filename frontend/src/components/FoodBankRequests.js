import React, {useEffect, useState} from 'react';
import './FoodBankRequests.css'

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
        <div>
            <div className="pageContent">
                <h2 className="yourRequests">Your requests</h2>
                <p className="yourRequestsSubText">when you receive requests for help, they will appear here</p>
            </div>
            <div>
                {items.map(item => (
                    <div className='card' key={item.email}>
                        <div className='purpleLine'></div>
                        <div className="textDiv">
                        <div>
                            <span className='cardTitle'>{item.requestedFoodBank}</span> 
                            <span className="cardTitleSubText">has sent a request for help</span>
                        </div>
                        <div className="quantityContainer"> 
                            <div className='quantityLabel'>Number of people in need:</div> 
                            <div className="quantityBox">
                                <p className="quantityText">{item.needQuantity}</p>
                            </div> 
                        </div>
                            {/* <p>{item.requestingOrganization}</p>
                            <p>{item.email}</p>
                            <p>{item.helpType}</p>
                            <p>{item.requestingOrganizationType}</p>
                            <p>{item.label}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoodBankRequests;