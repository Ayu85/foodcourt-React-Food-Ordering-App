import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className=''>
            <div><img src={logo} alt='logo' /></div>
            <div>
                <li>Why foodcourt ?</li>
                <li>Menu</li>
                <li>Contact</li>
                <li>Login</li>

            </div>
        </div>
    )
}

export default Header
