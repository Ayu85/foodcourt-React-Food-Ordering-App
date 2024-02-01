import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className='flex  justify-between px-20 py-3 items-center bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3]'>
            <div><img src={logo} alt='logo' /></div>
            <div className='list-none flex gap-3 text-lg items-center'>
                <li className='text-[#FF5454]'>Why foodcourt ?</li>
                <li>Services</li>
                <li>Menu</li>
                <li>Contact</li>
                <li className='bg-[#FF5454] py-2 rounded-full px-4 text-white'>Login</li>

            </div>
        </div>
    )
}

export default Header
