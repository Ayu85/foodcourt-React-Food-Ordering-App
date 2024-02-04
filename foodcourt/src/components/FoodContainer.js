import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import chicken from "../assets/chicken.png"
import burger from "../assets/burger.png"
import cake from "../assets/cake.png"
import pizza from "../assets/pizza.png"
import snack from "../assets/fastfood.png"
import RestaurantCard from './RestaurantCard'
import { mockBurgerData } from '../utils/__mocks__'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const FoodContainer = () => {
    const [burgerdata, setBurger] = useState(mockBurgerData);
    return (
        <div className='flex flex-col justify-center items-center pt-10 bg-[#fff2ea]'>
            <div className='text-center'>
                {/* box1 (heading and sub heading)*/}
                <h1 className='text-3xl font-semibold'>Choose your favourite food !! </h1>
                <p className='text-md text-slate-600 pt-1'>Get your customized taste choosen amongst 15000+ top rated restaurants</p>
            </div>
            <div className='flex gap-3 pt-5'>
                {/* box 2 */}
                <div className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={burger} alt='logo' className='w-9' />Burger</div>
                <div className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={chicken} alt='logo' className='w-9' />Chicken</div>
                <div className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'> <img src={pizza} alt='logo' className='w-9' />Pizza</div>
                <div className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={cake} alt='logo' className='w-9' />Cakes</div>
                <div className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={snack} alt='logo' className='w-9' />Snack</div>
            </div>
            <div className='flex flex-wrap gap-8 px-20 justify-center pt-9 '>
                {/* box 3 */}
                {burgerdata.map((items) => {
                    return <RestaurantCard {...items?.card?.card?.info} />

                })}
            </div>

        </div>
    )
}

export default FoodContainer
