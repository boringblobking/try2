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
            <h2>Your requests</h2>
            <p>when you receive requests for help, they will appear here</p>
            <div>
            {items.map(item => (
                <div className='card' key='item.email'>


                        <div className='purpleLine'></div>


                    <div className="textDiv">
                        <p>{item.requestedFoodBank}</p>
                        <p>{item.requestingOrganization}</p>
                        <p>{item.email}</p>
                        <p>{item.needQuantity}</p>
                        <p>{item.helpType}</p>
                        <p>{item.requestingOrganizationType}</p>
                        <p>{item.label}</p>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    );
}

export default FoodBankRequests;