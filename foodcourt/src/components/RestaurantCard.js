import React from 'react'
import { IMAGE_API } from '../utils/constants'
import { IoLocation } from "react-icons/io5";

const RestaurantCard = ({ name, cloudinaryImageId, locality, areaName, costForTwo, avgRating }) => {
    return (
        <div className='flex flex-col min-w-[220px] max-w-[220px] py-2 px-2 gap-2 items-center card-font   shadow-[#facdcd8f] shadow-xl  bg-white justify-center '>
            <img src={IMAGE_API + cloudinaryImageId} alt='logo' className=' w-48 aspect-square   ' />
            <div className=' text-[#00031F]  bottom-0 text-center   w-full rounded-3xl  '> <h1 className='text-lg font-semibold   bottom-5'>{name}</h1>
                <h1 className=' text-md text-[#434768] flex items-center justify-center gap-1  '>
                    {locality},{areaName}<IoLocation className='text-[#FF5454]' />
                </h1></div>
        </div>
    )
}

export default RestaurantCard
