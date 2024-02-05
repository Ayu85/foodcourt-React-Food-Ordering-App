import React from 'react'
import appstore from '../assets/macstore.png'
import playstore from '../assets/google-play-badge.png'
import app from '../assets/application.png'
import { FaDotCircle } from "react-icons/fa";

const Advertisment = () => {
    return (
        <wrapper className='flex justify-center items-center bg-gradient-to-b from-[#fff2ea]'>
            <div className='flex flex-wrap gap-44 overflow-hidden bg-white px-20 pt-14 rounded-[100px] border'>
                <div className='flex flex-col gap-2'>
                    {/* left box */}
                    <h1 className='text-3xl w-80 font-semibold text-[#00031F]'>Get upto 20% off on your first transaction on our app !</h1>
                    <p className='italic w-96 text-[#434768]'>"Explore endless flavors with our food app! Easy ordering, quick delivery, and delicious meals await. Download now for culinary delight!"</p>
                    <buttonsection className='flex items-center'>
                        <img src={appstore} alt='logo' className='w-44 h-14' />
                        <img src={playstore} alt='logo' className='w-52 h-20 ' />
                    </buttonsection>
                </div>
                <div className='relative flex'>
                    {/* right box */}
                    <img src={app} alt='logo' className=' w-[450px] z-40' />
                    <FaDotCircle className='absolute  text-9xl -right-32 top-20 text-[#ffd5c3] '/>
                </div>
            </div>
        </wrapper>
    )
}

export default Advertisment
