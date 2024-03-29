import React from 'react'
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { toogleHeader } from '../redux/slices/HeaderSlice'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import { IoMdLogIn } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { setHamburger, setSymbol } from '../redux/slices/HamburgerSlice'

const Header = () => {
    const isTransparentHeader = useSelector(store => store.headerTransparency.value)
    const showHamburgersymbol = useSelector(store => store.hamburgerslice.symbol)
    const showHamburgermenu = useSelector(store => store.hamburgerslice.menu)

    // console.log(showHamburgersymbol);

    useScroll();
    const dispatch = useDispatch();
    return (
        <div className={`  z-50  flex sticky top-0 justify-between lg:px-20 md:px-20 sm:px-10 px-10 sm:gap-10 py-3 items-center bg-gradient-to-l from-[#FEBEA3]   ${isTransparentHeader && "backdrop-blur-sm filter bg-gradient-to-l from-[#febea39d]"}`}>
            <div><img src={logo} alt='logo' /></div>
            <div className='list-none text-[#00031F] lg:flex gap-3 text-lg items-center md:hidden sm:hidden hidden'>
                <li className='text-[#FF5454]'>Why foodcourt ?</li>
                <li>Services</li>
                <li>Menu</li>
                <li>Contact</li>
                <Link to={'login'}> <li className='bg-[#FF5454] py-2 rounded-full px-4 flex items-center gap-1 hover:bg-zinc-800 transition-all duration-300 text-white'>Login<IoMdLogIn />
                </li>
                </Link>
            </div>
            {!isTransparentHeader && <div className='lg:hidden sm:block md:block ' onClick={() => {
                dispatch(setHamburger(!showHamburgermenu))
            }}>
                <RxHamburgerMenu className='text-4xl cursor-pointer' />
            </div>}

        </div>
    )
}

export const LoginHeader = () => {
    <div className=' bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3]   text-teal-950'>
        <img src={logo} alt='logo' className='w-44' />

    </div>
}
export default Header