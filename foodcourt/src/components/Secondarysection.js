import React from 'react'
import instantfood from "../assets/instantfood.png"
import delivery from "../assets/delivery2.png"
import menufood from "../assets/menu.png"
const Secondarysection = () => {
  return (
    <div className='flex justify-between px-20 pt-20 py-10 bg-gradient-to-l from-[#f9dbce]'>
      <div className='flex flex-col max-w-96 gap-4 mt-6'>
        <h1 className='text-3xl font-bold'>Why we are best?</h1>
        <p1 className="italic ">Discover the excellence of our food ordering website. With seamless navigation, real-time updates, and a tantalizing array of culinary options, we redefine convenience and taste.
          Join us and experience the best in online dining - satisfaction guaranteed!!</p1>
        <button className='bg-[#FF5454] px-6 w-36 py-3 rounded-full text-white text-md'> Read more</button>
      </div>
      <div className='flex gap-10'>
        <img src={instantfood} alt='instant food ' className='bg-[#fff8f4] w-48 h-72 rounded-3xl shadow-2xl shadow-[#fbaaa8]' />
        <img src={delivery} alt='instant food ' className=' bg-[#fff8f4] w-48 h-72 rounded-3xl mt-12 shadow-2xl shadow-[#fba9a8a4]' />
        <img src={menufood} alt='instant food ' className='bg-[#fff8f4] w-48 h-72 rounded-3xl shadow-2xl shadow-[#fbaaa8]' />

      </div>
    </div>
  )
}

export default Secondarysection
