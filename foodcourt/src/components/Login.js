import React from 'react'
import LoginHeader from './LoginHeader'
import logo from "../assets/logo.png"
const Login = () => {
    return (
        <div className='relative'>
            <div className='absolute z-50  backdrop-blur-sm bg-[#ffd5d48f]  w-screen px-10 py-1'><img src={logo} alt='logo' /></div>
            <div className='absolute h-screen filter brightness-50'>
                <iframe className='w-screen aspect-video h-screen' src="https://www.youtube.com/embed/QcOED9rj7Qw?si=hsMbArFpFNXSI5ik&amp;controls=0&amp;start=14&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            <div className='absolute z-50 bg-[#ffd5d48f] filter rounded-md backdrop-blur-sm flex flex-col justify-center items-center left-[50%] -translate-x-[50%] translate-y-[50%]  py-10'>
                <h1 className='text-3xl text-zinc-900 font-semibold py-3  '>Login</h1>
                <form className='flex flex-col gap-10 px-10 py-5 '>
                    <input type='mail' placeholder='Enter email ' className='py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                    <input type='password' placeholder='Enter password ' className='py-3 w-72 rounded-md pl-2' />
                    <button className='py-3 w-72 rounded-md bg-[#FF5454] text-white'>Login</button>
                </form>
            </div>
        </div >
    )
}

export default Login
