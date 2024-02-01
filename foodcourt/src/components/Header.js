import React from 'react'
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { toogleHeader } from '../redux/slices/HeaderSlice'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
    const isTransparentHeader = useSelector(store => store.headerTransparency.value)
    useScroll();
    return (
        <div className={`z-50 flex sticky top-0 justify-between px-20 py-3 items-center bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3] ${isTransparentHeader && "backdrop-blur-sm filter bg-gradient-to-l from-[#ffd5d492] to-[#fff4f38b]"}`}>
            <div><img src={logo} alt='logo' /></div>
            <div className='list-none flex gap-3 text-lg items-center'>
                <li className='text-[#FF5454]'>Why foodcourt ?</li>
                <li>Services</li>
                <li>Menu</li>
                <li>Contact</li>
                <Link to={'login'}> <li className='bg-[#FF5454] py-2 rounded-full px-4 flex items-center gap-1 hover:bg-zinc-800 transition-all duration-300 text-white'>Login<IoMdLogIn />
                </li>
                </Link>
            </div>
        </div>
    )
}

export const LoginHeader = () => {
    <div className=' bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3]   text-teal-950'>
        <img src={logo} alt='logo' className='w-44'/>
        
    </div>
}
export default Header