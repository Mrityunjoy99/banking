import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    var loginBtn = null;
    loginBtn = (
        <Link to='/login'>
            <button className='nextButton'>
                login
            </button>
        </Link>
    );

    var registerBtn = null;
    registerBtn = (
        <Link to='/register'>
            <button className='nextButton'>
                register
            </button>
        </Link>
    );
    return (
        <div>
            {loginBtn}
            {registerBtn}
        </div>
    )
}

export default Navbar
