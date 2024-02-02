import React from 'react'
import logo from "../assets/logo.png"
import bg from "../assets/loginBg.jpg"
const Login = () => {
    return (
        <div className='  gap-3 h-[100vh] bg-hero bg-cover filter flex flex-col items-center justify-center' >
            <h1 className='text-4xl text-black font-serif font-semibold py-3  '>Login</h1>
            <h1>More than <span className='text-[#FF5454] font-semibold'>15000+ Recipes</span> around the world</h1>
            <div className='flex items-center flex-col justify-center bg-[#ffd5d481] bg-white  backdrop-blur-sm w-[450px] rounded-lg'>
                <form className='flex flex-col gap-10 px-10 py-20 '>
                    <input type='mail' placeholder='Enter email ' className='py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                    <input type='password' placeholder='Enter password ' className='py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                    <button className='py-3 w-72 rounded-md bg-[#FF5454] text-white'>Login</button>
                </form>
            </div >

        </div>
    )
}

export default Login
