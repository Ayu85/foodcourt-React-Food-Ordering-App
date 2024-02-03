import React from 'react'
import { IMAGE_API } from '../utils/constants'

const RestaurantCard = ({ name, cloudinaryImageId, locality, areaName, costForTwo, avgRating }) => {
    return (
        <div className='flex flex-col gap-1 items-center card-font relative'>
            <img src={IMAGE_API + cloudinaryImageId} alt='logo' className='w-56 h-64 rounded-3xl ' />
            <div className='absolute  bottom-0 text-center   bg-gradient-to-t from-[#202020d7] w-full rounded-3xl'> <h1 className='text-xl font-semibold  text-white bottom-5'>{name}</h1>
                <h1 className=' text-white bottom-0'>{locality},{areaName}</h1></div>
        </div>
    )
}

export default RestaurantCard
