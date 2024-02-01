import React from 'react'
import herobg from "../assets/herobg.png"
const Herosection = () => {
    return (
        <div className=' bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3] h-[100vh] flex justify-between items-center px-20'>
            <div className=' max-w-[500px] '>
                <h1 className=' text-6xl font-semibold '>Fastest <span className='text-[#FF5454]'>Food Delivery</span> & Easy Pickup</h1>
                <p className='italic pt-4'>"Welcome to FlavorFusionHub - your ultimate destination for culinary delight! Discover a world of flavors, from savory to sweet, all in one place. Whether you're craving classics or eager to explore new tastes,
                    our app brings the best of dining right to your fingertips. Bon appétit!"
                </p>
            </div>
            <div className='h-full bg-[#FCD3D1] rounded-l-full'>
                <img src={herobg} alt='logo' className='h-full ' />
            </div>
        </div>
    )
}

export default Herosection
