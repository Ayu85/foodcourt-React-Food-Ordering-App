import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import chicken from "../assets/chicken.png"
import burger from "../assets/burger.png"
import cake from "../assets/cake.png"
import pizza from "../assets/pizza.png"
import snack from "../assets/fastfood.png"
import RestaurantCard from './RestaurantCard'
import { mockBurgerData } from '../utils/__mocks__'
import { mockCakeData } from '../utils/__mocks__';
import { mockPizzaData } from '../utils/__mocks__';
import { mockSandwichData } from '../utils/__mocks__';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux'
import { toogleItem } from "../redux/slices/CurrentItem"
const FoodContainer = () => {
    const [burgerdata, setBurger] = useState(mockBurgerData);
    const [pizzadata, setPizza] = useState(mockPizzaData);
    const [cakedata, setCake] = useState(mockCakeData);
    const [snackdata, setSnack] = useState(mockSandwichData);
    const currentItem = useSelector(store => store.currentItem.item.name)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setBurger(mockBurgerData)
    //         setCake(mockBurgerData)
    //         setPizza(mockBurgerData)
    //         setSnack(mockBurgerData)
    //     }, 5000)
    // }, [])
    console.log(currentItem);
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col justify-center items-center pt-10 pb-10  bg-gradient-to-b from-[#fff2ea]'>
            <div className='text-center'>
                {/* box1 (heading and sub heading)*/}
                <h1 className='text-3xl font-semibold'>Choose your favourite food !! </h1>
                <p className='text-md text-slate-600 pt-1'>Get your customized taste choosen amongst 15000+ top rated restaurants</p>
            </div>
            <div className='flex flex-wrap justify-center px-5 gap-3 pt-5'>
                {/* box 2 */}
                <div onClick={() => {
                    dispatch(toogleItem("burger"))
                }} style={currentItem === 'burger' ? { backgroundColor: "#FF5454", color: "white", fontWeight: 'normal' } : {}} className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'>
                    <img src={burger} alt='logo' className='w-9' />Burger</div>
                <div onClick={() => {
                    dispatch(toogleItem("pizza"))
                }} style={currentItem === 'pizza' ? { backgroundColor: "#FF5454", color: "white", fontWeight: 'normal' } : {}} className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'> <img src={pizza} alt='logo' className='w-9' />Pizza</div>
                <div onClick={() => {
                    dispatch(toogleItem("cake"))
                }} style={currentItem === 'cake' ? { backgroundColor: "#FF5454", color: "white", fontWeight: 'normal' } : {}} className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={cake} alt='logo' className='w-9' />Cakes</div>
                <div onClick={() => {
                    dispatch(toogleItem("snack"))
                }} style={currentItem === 'snack' ? { backgroundColor: "#FF5454", color: "white", fontWeight: 'normal' } : {}} className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={snack} alt='logo' className='w-9' />Snack</div>
                <div onClick={() => {
                    dispatch(toogleItem("chicken"))
                }} style={currentItem === 'chicken' ? { backgroundColor: "#FF5454", color: "white", fontWeight: 'normal' } : {}} className='px-4 py-3 rounded-xl font-semibold text-slate-700 text-lg cursor-pointer
                 border-slate-200 border flex items-center gap-1 hover:bg-[#ffd1bd9d] hover:border-[#FF5454] transition-all'><img src={chicken} alt='logo' className='w-9' />Chicken</div>
            </div>
            {currentItem == 'burger' && <div className='flex flex-wrap gap-8 px-20 justify-center pt-9 '>
                {/* box 3 */}
                {burgerdata.map((items) => {
                    return <RestaurantCard {...items?.card?.card?.info} />
                })}
            </div>}
            {currentItem == 'pizza' && <div className='flex flex-wrap gap-8 px-20 justify-center pt-9 '>
                {/* box 3 */}
                {pizzadata.map((items) => {
                    return <RestaurantCard {...items?.card?.card?.info} />
                })}

            </div>
            }
            {currentItem == 'snack' && <div className='flex flex-wrap gap-8 px-20 justify-center pt-9 '>
                {/* box 3 */}
                {snackdata.map((items) => {
                    return <RestaurantCard {...items?.card?.card?.info} />
                })}

            </div>
            }
            {currentItem == 'cake' && <div className='flex flex-wrap gap-8 px-20 justify-center pt-9 '>
                {/* box 3 */}
                {cakedata.map((items) => {
                    return <RestaurantCard {...items?.card?.card?.info} />
                })}

            </div>
            }


        </div>
    )
}

export default FoodContainer
