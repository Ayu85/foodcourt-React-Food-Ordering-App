import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <wrapper className='flex items-center justify-center'>
            <div className='flex px-10'>
                {/* footer main box */}
                <div className='flex flex-col gap-2'>
                    {/* box1 */}
                    <img src={logo} alt='logo' className='w-36' />
                    <p>"Welcome to FlavorFusionHub - your ultimate destination for culinary delight! Discover a world of flavors, from savory to sweet, all in one place. Whether you're craving classics or eager to explore new tastes,
                        our app brings the best of dining right to your fingertips. Bon appétit!"</p>
                    <profiles className='flex gap-1'>
                        <FaLinkedin />
                        <RiInstagramFill />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </profiles>
                </div>
                <div className='flex flex-col gap-2'>
                    {/* box2 */}
                    <h1>About us</h1>
                    <li>About us</li>
                    <li>Features</li>
                    <li>News </li>
                    <li>Menu</li>
                </div>
                <div>
                    {/* box3 */}
                    <h1>Company</h1>
                    <li>Why food court?</li>
                    <li>Partner with us</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </div>
                <div>
                    {/* box4 */}
                    <h1>Support</h1>
                    <li>Contact</li>
                    <li>Account</li>
                    <li>Feedback </li>
                    <li>Other queries</li>
                </div>
                <div>
                    {/* box5*/}
                    <h1>Get In Touch</h1>
                    <li>Questions or feedback !</li>
                    <li>We,d love to hear from you !</li>

                </div>
            </div>

        </wrapper>
    )
}

export default Footer
