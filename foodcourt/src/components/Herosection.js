import React, { useEffect } from 'react'
import herobg from "../assets/herobg.png"
import { TbChartDonutFilled } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import { MdPlayCircle } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import useLetterAnimation from '../hooks/useLetterAnimation';
import { SiNextra } from "react-icons/si";
const Herosection = () => {
    const disableScroll = () => {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    const enableScroll = () => {
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
    }
    const showHamburgermenu = useSelector(store => store.hamburgerslice.menu)
    const isHeightScrolled = useSelector(store => store.headerTransparency.value)
    const navigate = useNavigate();
    useEffect(() => {
        showHamburgermenu && disableScroll();
        !showHamburgermenu && enableScroll();
    }, [showHamburgermenu])
    const text = useLetterAnimation();
    return (
        <div className='relative bg-gradient-to-l overflow-hidden  from-[#FEBEA3]  gap-5 h-[100vh] flex justify-between items-center '>
            <div className='absolute top-44  -left-14'><TbChartDonutFilled className='text-9xl text-[#f8b5ad] animate-spin-slow ' />
            </div>
            <div className='absolute top-10  lg:right-[750px] sm:right-44 right-44 hidden md:block lg:block'><ImLocation2 className='text-8xl text-[#F64E61] animate-[bounce_2s_ease-in-out_infinite] ' />
            </div>
            <div className=' lg:w-[600px] lg:pl-20 sm:pr-14 sm:pl-10 pl-5 pr-5 z-40 sm:-mt-20  -mt-20'>
                <h1 className=' text-6xl font-semibold text-[#00031F]'>Fastest <span className='text-[#FF5454]'>Food Delivery</span> & Easy Pickup</h1>
                <p className='italic pt-4 text-[#434768]'>"Welcome to FlavorFusionHub - your ultimate destination for culinary delight! Discover a world of flavors, from savory to sweet, all in one place. Whether you're craving classics or eager to explore new tastes,
                    our app brings the best of dining right to your fingertips. Bon appétit!"
                </p>
                <buttonsection className="flex gap-5 pt-8">
                    <button onClick={() => {
                        navigate('/restaurants')
                    }} className='bg-[#FF5454] px-6 py-3 rounded-full text-white text-md flex items-center gap-2'>Explore Restaurants Near You <SiNextra />
                    </button>

                </buttonsection>

            </div>
            <div className='h-full  rounded-l-full lg:block hidden'>
                <img src={herobg} alt='logo' className='h-full ' />
            </div>
            {
                <div className={`absolute right-0 top-0 text-xl z-50
                 list-none gap-10 flex flex-col bg-gradient-to-l   from-[#febea3a2] backdrop-blur-sm 
                 px-10 py-10 rounded-sm h-[100vh] ${!showHamburgermenu && "translate-x-56 transition-all duration-200"} ${showHamburgermenu && "-translate-x-0 transition-all duration-200"}`}>
                    <li className='text-[#FF5454]'>Why foodcourt ?</li>
                    <li>Services</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <Link to={'login'}> <li className='bg-[#FF5454] py-2 rounded-full px-4 flex items-center gap-1 hover:bg-zinc-800 transition-all duration-300 text-white'>Login<IoMdLogIn />
                    </li>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Herosection
