import React from 'react'
import appstore from '../assets/macstore.png'
import playstore from '../assets/google-play-badge.png'
import app from '../assets/application.png'
const Advertisment = () => {
    return (
        <wrapper className='flex justify-center items-center bg-gradient-to-b from-[#fff2ea]'>
            <div className='flex gap-44 bg-white px-44 py-14 rounded-[100px]'>
                <div className='flex flex-col gap-2'>
                    {/* left box */}
                    <h1 className='text-3xl w-80 font-semibold text-[#00031F]'>Get upto 20% off on your first transaction on our app !</h1>
                    <p className='italic w-96 text-[#434768]'>"Explore endless flavors with our food app! Easy ordering, quick delivery, and delicious meals await. Download now for culinary delight!"</p>
                    <buttonsection className='flex items-center'>
                        <img src={appstore} alt='logo' className='w-44 h-14' />
                        <img src={playstore} alt='logo' className='w-52 h-20 ' />
                    </buttonsection>
                </div>
                <div>
                    {/* right box */}
                    <img src={app} alt='logo' className=' w-72' />

                </div>
            </div>
        </wrapper>
    )
}

export default Advertisment
