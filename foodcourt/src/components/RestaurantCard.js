import React from 'react'
import { IMAGE_API } from '../utils/constants'

const RestaurantCard = ({ name, cloudinaryImageId, locality, areaName, costForTwo, avgRating }) => {
    return (
        <div className='flex flex-col py-2 px-2 gap-2 items-center card-font  bg-white justify-center '>
            <img src={IMAGE_API + cloudinaryImageId} alt='logo' className=' w-48 aspect-square   ' />
            <div className=' text-black  bottom-0 text-center   w-full rounded-3xl  '> <h1 className='text-xl font-semibold   bottom-5'>{name}</h1>
                <h1 className='  bottom-0'>{locality},{areaName}</h1></div>
        </div>
    )
}

export default RestaurantCard
