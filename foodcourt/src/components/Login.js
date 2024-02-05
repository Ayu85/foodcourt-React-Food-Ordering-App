import React, { useEffect, useState } from 'react'
import validate from '../utils/validate';
const Login = () => {
    const [isSignin, setSignin] = useState(false)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    // const error2=validate(email)
    useEffect(() => {
        const error1 = validate(email, password)
        console.log(error1);
    }, [email, password])

    return (
        <div className=' bg-food  gap-3 h-[100vh]  bg-cover bg-no-repeat filter  flex flex-col items-center justify-center' >
            {!isSignin && <><h1 className='text-4xl text-black font-serif font-semibold py-3  '>Login</h1>
                <h1>More than <span className='text-[#FF5454] font-semibold'>15000+ Recipes</span> around the world</h1>
                <div className='flex items-center flex-col py-5 justify-center border border-[#fba3a3] bg-[#ffd5d40e] bg-white  backdrop-blur-lg w-[450px] rounded-lg'>
                    <form className='flex flex-col gap-10 px-10 py-20 '>
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} type='mail' placeholder='Enter email ' className='border-[#FF5454] border-b py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} type='password' placeholder='Enter password ' className=' border-[#FF5454] border-b py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                        <button className='py-3 w-72 rounded-md bg-[#FF5454] text-white'>Login</button>
                    </form>
                    <h2>New user ? <span className='text-[#FF5454] cursor-pointer' onClick={() => {
                        setSignin(true)
                    }}>Register Now !!</span> </h2>
                </div >


            </>}
            {
                isSignin && <><h1 className='text-4xl text-black font-serif font-semibold py-3  '>Sign In</h1>
                    <h1>More than <span className='text-[#FF5454] font-semibold'>15000+ Recipes</span> around the world</h1>
                    <div className='flex items-center flex-col py-5 justify-center rounded-lg border border-[#fba3a3] bg-[#ffd5d40e] bg-white  backdrop-blur-lg w-[450px]'>
                        <form className='flex flex-col gap-10 px-10 py-20 '>
                            <input onChange={(e) => {
                                setName(e.target.value)
                            }} type='text' placeholder='Enter name ' className='border-[#FF5454] border-b py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                            <input onChange={(e) => {
                                setEmail(e.target.value)
                            }} type='mail' placeholder='Enter email ' className='border-[#FF5454] border-b py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                            <input onChange={(e) => {
                                setPassword(e.target.value)
                            }} type='password' placeholder='Enter password ' className=' border-[#FF5454] border-b py-3 w-72 rounded-md pl-2 placeholder-shown:bg-[#FFF4F3]' />
                            <button className='py-3 w-72 rounded-md bg-[#FF5454] text-white'>Login</button>
                        </form>
                        <h2>Already registered ? <span className='text-[#FF5454] cursor-pointer' onClick={() => {
                            setSignin(false)
                        }}>Sign In</span> </h2>
                    </div ></>
            }
        </div >

    )
}

export default Login
