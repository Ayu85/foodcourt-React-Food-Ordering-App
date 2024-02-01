import React from 'react'
import LoginHeader from './LoginHeader'
import logo from "../assets/logo.png"
const Login = () => {
    return (
        <div className='relative'>
            <div className='absolute z-50 bg-gradient-to-l from-[#FFD5D4] to-[#FFF4F3]  w-screen'><img src={logo} alt='logo' /></div>
            <div className='absolute'><iframe className='w-screen aspect-video ' src="https://www.youtube.com/embed/QcOED9rj7Qw?si=hsMbArFpFNXSI5ik&amp;controls=0&amp;start=14&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </div >
    )
}

export default Login
