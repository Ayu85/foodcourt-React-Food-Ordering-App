import React from 'react'
import { WALL1 } from '../utils/constants'
import { WALL2 } from '../utils/constants'
import { WALL3 } from '../utils/constants'
import { WALL4 } from '../utils/constants'
import { WALL5 } from '../utils/constants'
import lines from '../assets/lines.png'
const Testimonial = () => {
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
            <div className='bg-[#fff2ea] w-[35%] absolute right-5 h-[90%] top-16 flex justify-center flex-col items-center'>
                <div>
                    <h1 className='text-6xl  text-zinc-700'>2000+</h1>
                    <h2 className='text-[#FF5454] text-sm tracking-wide pt-3 '>REGULAR CUSTOMERS</h2>
                </div>
                <div>Testimonails here</div>
            </div>

        </div>
    )
}

export default Testimonial
