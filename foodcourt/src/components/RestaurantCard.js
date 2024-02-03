import React from 'react'
import { IMAGE_API } from '../utils/constants'

const RestaurantCard = ({ name, cloudinaryImageId, locality, areaName, costForTwo, avgRating }) => {
    return (
        <div className='border-slate-200 border '>
            <img src={IMAGE_API + cloudinaryImageId} alt='logo' className='w-56 rounded-xl aspect-square' />
            <h1>{name}</h1>
            <h1>{locality},{areaName}</h1>
        </div>
    )
}

export default RestaurantCard
