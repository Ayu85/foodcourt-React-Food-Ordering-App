import React from 'react'
import herobg from "../assets/herobg.png"
import { TbChartDonutFilled } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import { MdPlayCircle } from "react-icons/md";

const Herosection = () => {
    return (
        <div className='relative bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3] gap-5 h-[100vh] flex justify-between items-center '>
            <div className='absolute top-44  -left-14'><TbChartDonutFilled className='text-9xl text-[#f8b5ad] animate-[spin_4s_ease-in-out_infinite] ' />
            </div>
            <div className='absolute top-20  lg:right-[750px] sm:right-44 right-44'><ImLocation2 className='text-8xl text-[#F64E61] animate-[bounce_2s_ease-in-out_infinite] ' />
            </div>
            <div className=' lg:max-w-[500px] lg:pl-20 sm:pr-10 sm:pl-10 pl-10 z-50 '>
                <h1 className=' text-6xl font-semibold '>Fastest <span className='text-[#FF5454]'>Food Delivery</span> & Easy Pickup</h1>
                <p className='italic pt-4'>"Welcome to FlavorFusionHub - your ultimate destination for culinary delight! Discover a world of flavors, from savory to sweet, all in one place. Whether you're craving classics or eager to explore new tastes,
                    our app brings the best of dining right to your fingertips. Bon appétit!"
                </p>
                <buttonsection className="flex gap-5 pt-8">
                    <button className='bg-[#FF5454] px-6 py-3 rounded-full text-white text-md'>Get started</button>
                    <button className='text-[#FF5454] px-6 py-3 rounded-full
                     bg-white text-md flex items-center gap-1'><MdPlayCircle className='text-4xl' />
                        Watch Video</button>
                </buttonsection>

            </div>
            <div className='h-full bg-[#FCD3D1] rounded-l-full lg:block hidden'>
                <img src={herobg} alt='logo' className='h-full ' />
            </div>
        </div>
    )
}

export default Herosection
