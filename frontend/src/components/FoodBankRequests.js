import React, {useEffect, useState} from 'react';

function FoodBankRequests() {
    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/food-bank-requests');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {items.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                    <p>{item.username}</p>
                </div>
            ))
            }
        </section>
    );
}

export default FoodBankRequests;