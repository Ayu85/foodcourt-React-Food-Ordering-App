import React from 'react'
import instantfood from "../assets/instantfood.png"
import delivery from "../assets/delivery2.png"
import menufood from "../assets/menu.png"
const Secondarysection = () => {
  return (
    <div className='lg:flex-row justify-between lg:px-20 lg:pt-20 lg:py-10 bg-gradient-to-l from-[#f9dbce] md:flex md:flex-col items-center md:gap-44 '>
      <div className='flex flex-col max-w-96 gap-4 mt-6 relative'>
        <h1 className='text-3xl font-bold'>Why we are best?</h1>
        <p1 className="italic ">Discover the excellence of our food ordering website. With seamless navigation, real-time updates, and a tantalizing array of culinary options, we redefine convenience and taste.
          Join us and experience the best in online dining - satisfaction guaranteed!!</p1>
        <button className='bg-[#FF5454] px-6 w-36 py-3 rounded-full text-white text-md'> Read more</button>
        <div className='absolute -z-10 bg-[#f5ddd3] w-60 h-72 -left-14 top-6'></div>
      </div>
      <div className='flex gap-10  relative'>
        <img src={instantfood} alt='instant food ' className='bg-[#fff8f4] z-20 w-48 h-72 rounded-3xl  shadow-[#fbaaa8]' />
        <img src={delivery} alt='instant food ' className=' bg-[#fff8f4] w-48 h-72 rounded-3xl mt-12  shadow-[#fba9a8a4]' />
        <img src={menufood} alt='instant food ' className='bg-[#fff8f4] w-48 h-72 rounded-3xl  shadow-[#fbaaa8]' />
        <div className='absolute   text-9xl font-bold -bottom-12 w-max -left-20 text-[#fe7171] select-none'>Eat with ease</div>
      </div>
    </div>
  )
}

export default Secondarysection
