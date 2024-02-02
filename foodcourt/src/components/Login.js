import React from 'react'
import logo from "../assets/logo.png"
import bg from "../assets/loginBg.jpg"
const Login = () => {
    return (
        <div className='  gap-5 h-[100vh] bg-hero' >
            <nav>
                <img src={logo} alt='logo' />
            </nav>
            <div className='flex items-center flex-col justify-center bg-[#ffd5d481]  backdrop-blur-sm w-[450px] rounded-lg ml-[50%] -translate-x-[50%] translate-y-[20%]'>
                <h1 className='text-3xl text-zinc-900 font-semibold py-3  '>Login</h1>
                <form className='flex flex-col gap-10 px-10 py-5 '>
                    <input type='mail' placeholder='Enter email ' className='py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                    <input type='password' placeholder='Enter password ' className='py-3 w-72 rounded-md pl-2' />
                    <button className='py-3 w-72 rounded-md bg-[#FF5454] text-white'>Login</button>
                </form>
            </div >

        </div>
    )
}

export default Login
