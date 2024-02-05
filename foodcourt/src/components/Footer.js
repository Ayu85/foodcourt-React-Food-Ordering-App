import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <wrapper className='flex items-center justify-center pt-5 pb-5'>
            <div className='flex flex-wrap px-16 gap-20 pt-10 border-b border-slate-300  pb-10'>
                {/* footer main box */}
                <div className='flex flex-col gap-2 w-72'>
                    {/* box1 */}
                    <img src={logo} alt='logo' className='w-36' />
                    <p className='text-[#434768] italic'> Discover a world of flavors, from savory to sweet, all in one place. Whether you're craving classics or eager to explore new tastes,
                        our app brings the best of dining right to your fingertips. Bon appétit!"</p>
                    <profiles className='flex gap-1 text-[#FF5454] pt-2'>
                        <FaLinkedin />
                        <RiInstagramFill />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </profiles>
                </div>
                <div className='flex flex-col gap-6'>
                    {/* box2 */}
                    <h1 className='font-semibold text-lg text-[#00031f]'>About us</h1>
                    <ul className='list-none text-[#434768] flex flex-col gap-3 cursor-pointer text-sm'> <li>About us</li>
                        <li>Features</li>
                        <li>News </li>
                        <li>Menu</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    {/* box3 */}
                    <h1 className='font-semibold text-lg text-[#00031f]'>Company</h1>
                    <ul className='list-none text-[#434768] flex flex-col gap-3 cursor-pointer text-sm'> <li>Why food court?</li>
                        <li>Partner with us</li>
                        <li>FAQ</li>
                        <li>Blog</li></ul>
                </div>
                <div className='flex flex-col gap-6'>
                    {/* box4 */}
                    <h1 className='font-semibold text-lg text-[#00031f]'>Support</h1>
                    <ul className='list-none text-[#434768] flex flex-col gap-3 cursor-pointer text-sm'> <li>Contact</li>
                        <li>Account</li>
                        <li>Feedback </li>
                        <li>Other queries</li></ul>
                </div>
                <div className='flex flex-col gap-6'>
                    {/* box5*/}
                    <h1 className='font-semibold text-lg text-[#00031f]'>Get In Touch</h1>
                    <ul  className='list-none text-[#434768] flex flex-col gap-3 cursor-pointer text-sm'>    <li>Questions or feedback !</li>
                        <li>We,d love to hear from you !</li></ul>

                </div>
            </div>

        </wrapper>
    )
}

export default Footer
