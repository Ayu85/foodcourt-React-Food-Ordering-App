import React from 'react'
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { toogleHeader } from '../redux/slices/HeaderSlice'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
const Header = () => {
    const isTransparentHeader = useSelector(store => store.headerTransparency.value)
    useScroll();
    return (
        <div className={`flex sticky top-0 justify-between px-20 py-3 items-center bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3] ${isTransparentHeader && "backdrop-blur-sm filter bg-gradient-to-l from-[#ffd5d492] to-[#fff4f38b]"}`}>
            <div><img src={logo} alt='logo' /></div>
            <div className='list-none flex gap-3 text-lg items-center'>
                <li className='text-[#FF5454]'>Why foodcourt ?</li>
                <li>Services</li>
                <li>Menu</li>
                <li>Contact</li>
                <Link to={'login'}> <li className='bg-[#FF5454] py-2 rounded-full px-4 text-white'>Login</li>
                </Link>
            </div>
        </div>
    )
}

export default Header
