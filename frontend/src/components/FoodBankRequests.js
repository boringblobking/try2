import React, {useEffect, useState} from 'react';

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
        <section>
            {items.map(item => (
                <div>
                    <p>{item.requestedFoodBank}</p>
                    <p>{item.requestedOrganization}</p>
                    <p>{item.email}</p>
                    <p>{item.needQuantity}</p>
                    <p>{item.helpType}</p>
                    <p>{item.requestingOrganizationType}</p>
                    <p>{item.label}</p>
                </div>
            ))
            }
        </section>
    );
}

export default FoodBankRequests;