import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to="/volunteer" className='nav-item nav-link'>Requests</Link>
                     <Link to="/login" className='nav-item nav-link'>Login</Link>
                     <Link to="/signup" className='nav-item nav-link'>Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;