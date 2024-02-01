import React from 'react'
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { toogleHeader } from '../utils/slices/HeaderSlice'
const Header = () => {
    const isTransparentHeader = useSelector(store => store.headerTransparency.value)
    const dispatch = useDispatch();
    window.addEventListener('scroll', (e) => {
        console.log(scrollY);
        if (scrollY > 50)
            dispatch(toogleHeader(true))
        else
            dispatch(toogleHeader(false))
    })
    return (
        <div className={`flex sticky top-0 justify-between px-20 py-3 items-center bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3] ${isTransparentHeader&&"backdrop-blur-sm filter bg-gradient-to-l from-[#ffd5d492] to-[#fff4f38b]"}`}>
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
