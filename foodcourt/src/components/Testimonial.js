import React from 'react'
import { WALL1 } from '../utils/constants'
import { WALL2 } from '../utils/constants'
import { WALL3 } from '../utils/constants'
import { WALL4 } from '../utils/constants'
import { WALL5 } from '../utils/constants'
import { WALL6 } from '../utils/constants'

const Testimonial = () => {
    return (
        <div className='flex px-20  pt-20 h-[90vh]'>
            <div className='flex flex-wrap w-[65%] relative'>
                <img src={WALL1} alt='logo' className='w-48 aspect-square rounded-full absolute top-32' />
                <img src={WALL2} alt='logo' className='w-44 aspect-square rounded-full absolute top-72 right-96 shadow-2xl shadow-[#FF5454]' />
                <img src={WALL3} alt='logo' className='w-32 aspect-square rounded-full absolute bottom-0' />
                <img src={WALL4} alt='logo' className='w-40 aspect-square rounded-full absolute right-20 top-0' />
                <img src={WALL5} alt='logo' className='w-44 aspect-square rounded-full absolute left-72 ' />
                <img src={WALL6} alt='logo' className='w-40 aspect-square rounded-full absolute bottom-11 right-10' />

            </div>
            <div className='bg-[#fff2ea] w-[35%]'>
                <div>
                    <h1>2000+</h1>
                    <h2>Regular customers</h2>
                </div>
                <div>Testimonails here</div>
            </div>

        </div>
    )
}

export default Testimonial
