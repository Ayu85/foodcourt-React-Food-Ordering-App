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

const Testimonial = () => {
    const [currentUser, setCurrentUser] = useState(0);
    return (
        <div className='flex px-20  pt-20 h-[90vh]  bg-gradient-to-t from-[#fff2ea] relative  border-slate-100'>
            <div className=' flex-wrap w-[65%] absolute hidden lg:flex'>
                <img src={WALL1} alt='logo' className='w-48 aspect-square rounded-full absolute top-10' />
                <img src={WALL2} alt='logo' className='w-44 aspect-square rounded-full absolute top-72 right-44 shadow-2xl shadow-[#FF5454]' />
                <img src={WALL3} alt='logo' className='w-32 aspect-square rounded-full absolute top-80' />
                <img src={WALL4} alt='logo' className='w-40 aspect-square rounded-full absolute right-44 top-10' />
                <img src={WALL5} alt='logo' className='w-32 aspect-square rounded-full absolute  top-44 left-64  ' />
                {/* <img src={WALL6} alt='logo' className='w-40 aspect-square rounded-full absolute bottom-28 right-10 ' /> */}
                <img src={lines} alt='logo' className='absolute -z-10 w-full -left-20 ' />
            </div>
            <div className='bg-[#fff2ea] w-[35%] absolute right-5 h-[90%] top-16 flex justify-center flex-col pl-20'>
                <div>
                    <h1 className='text-6xl  text-zinc-700'>2000+</h1>
                    <h2 className='text-[#FF5454] text-sm tracking-wide pt-1 '>REGULAR CUSTOMERS</h2>
                </div>
                <div>
                    <h1 className='pt-4 text-2xl pb-3 font-semibold'>Our customers says..</h1>
                    <div className='w-96 flex flex-col gap-3 pt-4 border-[#efc3c3] border px-5 py-3'>
                        {/* testimonial card */}
                        <div className='flex items-center gap-4'>
                            {/* profile and name */}
                            <img src={CUSTOMERS[0].profile_picture} alt='logo' className='w-20 aspect-square rounded-full' />
                            <div><h1 className='text-xl text-zinc-800 font-semibold'>{CUSTOMERS[0].name}</h1>
                                <h2>{CUSTOMERS[0].place}</h2>
                            </div>
                        </div>
                        <div>
                            {/* review */}
                            <p className='text-zinc-600 italic'>{CUSTOMERS[0].review}</p>
                            <h2 className='pt-2'>{CUSTOMERS[0].rating}⭐</h2>
                        </div>
                        <div className='flex gap-3 pt-3'>
                            <button className='text-[#FF5454]  px-3 py-3 rounded-full bg-white border-[#ed9898] border'><GrPrevious />
                            </button>
                            <button className='bg-[#FF5454] text-white px-3 py-3 rounded-full'><GrNext />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Testimonial
