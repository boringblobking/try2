import React from 'react';

function BeneficiaryRequest() {
    return(<div>
        <h1>BeneficiaryRequest</h1>
        <form method="POST" action="/request-form">
            <input type="text" name="requestedFoodBank"></input>
            <input type="text" name="requestingOrganization"></input>
            <input type="text" name="email"></input>
            <input type="text" name="needQuantity"></input>
            <input type="text" name="helpType"></input>
            <input type="text" name="requestingOrganizationType"></input>
            <input type="text" name="label"></input>
            <button type="submit">Send Request</button>
        </form>
    </div>);
}

export default BeneficiaryRequest;