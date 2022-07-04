import React from 'react';
import './BeneficiarySignUp.css'

function BeneficiarySignUp() {
    return(    <div><h1>Create an Account</h1>
    <p>Tell us about yourself?</p>
    <form action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label> Enter Your Name <input type="text" name="name" placeholder="Name"required></input></label>
        <label> Enter Your Email: <input type="email" name="email" placeholder="Email" required></input></label>
        <label> Enter Location <input type="text" name="name" placeholder="Location" required></input></label>
        <label> Enter contact number <input type="text" name="number" pattern="[0-9]{11,}" placeholder="phone" required></input></label>
        <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-9]{8,}" placeholder="password"required></input></label>
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
    </form></div>);
}

export default BeneficiarySignUp;