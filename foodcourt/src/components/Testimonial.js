import React, { useState } from 'react'
import { WALL1 } from '../utils/constants'
import { WALL2 } from '../utils/constants'
import { WALL3 } from '../utils/constants'
import { WALL4 } from '../utils/constants'
import { WALL5 } from '../utils/constants'
import { CUSTOMERS } from '../utils/__mocks__'
import lines from '../assets/lines.png'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";

const Testimonial = () => {
    let [currentUser, setCurrentUser] = useState(0);
    const handlePrevious = () => {
        if (currentUser == 0)
            setCurrentUser(4)
        else
            setCurrentUser(currentUser -= 1)
    }
    const handleNext = () => {
        if (currentUser == 4)
            setCurrentUser(0)
        else
            setCurrentUser(currentUser += 1)
    }
    return (
        <div className='flex px-20   pt-20 h-[90vh]  bg-gradient-to-t from-[#fff2ea] relative  border-slate-100'>
            <div className=' flex-wrap w-[65%] lg:absolute md:flex md:gap-4 md:flex-wrap sm:flex-wrap sm:flex sm:gap-5 hidden'>
                <img src={WALL1} alt='logo' className='w-48 md:w-36 md:h-36 md:rounded-full sm:w-36 sm:h-36 sm:rounded-full aspect-square rounded-full lg:absolute top-10' />
                <img src={WALL2} alt='logo' className='w-44 md:w-36 md:h-36 md:rounded-full sm:w-36 sm:h-36 sm:rounded-full aspect-square rounded-full lg:absolute top-72 right-44 shadow-2xl shadow-[#FF5454]' />
                <img src={WALL3} alt='logo' className='w-32 md:w-36 md:h-36 md:rounded-full sm:w-36 sm:h-36 sm:rounded-full aspect-square rounded-full lg:absolute top-80' />
                <img src={WALL4} alt='logo' className='w-40 md:w-36 md:h-36 md:rounded-full sm:w-36 sm:h-36 sm:rounded-full aspect-square rounded-full lg:absolute right-44 top-10' />
                <img src={WALL5} alt='logo' className='w-32 md:w-36 md:h-36 md:rounded-full sm:w-36 sm:h-36 sm:rounded-full aspect-square rounded-full lg:absolute  top-44 left-64  ' />
                {/* <img src={WALL6} alt='logo' className='w-40 aspect-square rounded-full absolute bottom-28 right-10 ' /> */}
                <img src={lines} alt='logo' className='absolute -z-10 w-full -left-20 ' />
            </div>
            <div className='bg-[#fff2ea]  lg:w-[35%] md:w-[35%] sm:w-[35%] w-[100%] px-20 absolute right-5 h-[90%] top-16 flex justify-center flex-col md:pl-5 lg:pl-14 sm:pl-5'>
                <div>
                    <h1 className='text-6xl  text-zinc-700'>2000+</h1>
                    <h2 className='text-[#FF5454] text-sm tracking-wide pt-1 '>REGULAR CUSTOMERS</h2>
                </div>
                <div>
                    <h1 className='pt-4 text-2xl pb-3 font-semibold'>Our customers says..</h1>
                    <div className='w-96 flex flex-col gap-3 pt-4 border-[#efc3c3]  px-4 py-3'>
                        {/* testimonial card */}
                        <div className='flex items-center gap-4 z-50'>
                            {/* profile and name */}
                            <img src={CUSTOMERS[currentUser].profile_picture} alt='logo' className='w-20 aspect-square rounded-full' />
                            <div><h1 className='text-xl text-zinc-800 font-semibold'>{CUSTOMERS[currentUser].name}</h1>
                                <h2>{CUSTOMERS[currentUser].place}</h2>
                            </div>
                        </div>
                        <div className='z-50'>
                            {/* review */}
                            <p className='text-zinc-600 italic w-80'>{CUSTOMERS[currentUser].review}</p>
                            <h2 className='pt-2'>{CUSTOMERS[currentUser].rating}⭐</h2>
                        </div>
                        <div className='flex gap-3 pt-3'>
                            <button onClick={handlePrevious} className='text-[#FF5454]  px-3 py-3 rounded-full bg-white border-[#ed9898] border'><GrPrevious />
                            </button>
                            <button onClick={handleNext} className='bg-[#FF5454] text-white px-3 py-3 rounded-full'><GrNext />
                            </button>
                        </div>
                    </div>

                </div>
                <div className='absolute text-9xl text-[#ffd5c3] right-0 '><FaDotCircle /></div>
            </div>

        </div>
    )
}

export default Testimonial
