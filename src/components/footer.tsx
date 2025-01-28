import React from 'react'
import { FaFacebookF, FaLocationDot, FaTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io5'
import { TiSocialInstagram } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className=' min-h-[331px] justify-between h-auto flex flex-col  gap-10 sm:gap-3 bg-[#111111] md:px-7 md:pt-7 sm:px-4 sm:pt-2 px-2 py-5'>
        <div className='min-h-[213px] flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10'>
            <div className='flex items-center sm:items-start flex-col sm:flex-row gap-10 sm:gap-7 md:gap-12 lg:gap-28'>
                <ul className='items-center sm:items-start flex flex-col gap-4 text-[10px] text-white'>
                    <li>FIND A STORE</li>
                    <li>BECOME A MEMBER</li>
                    <li>SIGN UP FOR EMAIL</li>
                    <li>Send Us Feedback</li>
                    <li>STUDENT DISCOUNTS</li>
                </ul>
                <ul className='items-center sm:items-start flex flex-col gap-4 text-[11px] text-[#7e7e7e]'>
                    <li className='text-white text-[10px]'>GET HELP</li>
                    <li>Order Status</li>
                    <li>Delievery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>    
                </ul>
                <ul className='items-center sm:items-start flex flex-col gap-4 text-[11px] text-[#7e7e7e]'>
                    <li className='text-white text-[10px]'>ABOUT NIKE</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainabilty</li>
                </ul>   
            </div>
            <div className='flex gap-2 md:gap-4 items-center'>
            <FaTwitter className='social-media'/>
            <FaFacebookF className='social-media'/>
            <IoLogoYoutube className='social-media'/>
            <TiSocialInstagram className='social-media'/>
            </div>
        </div>
        <div className='min-h-11 flex flex-col justify-between gap-10 sm:flex-row text-[#7e7e7e] '>
            <div className='flex gap-1 sm:gap-4 flex-col sm:flex-row items-center'>
            <FaLocationDot className='text-white'/>
                <p className='text-white'>Pakistan</p>
                <p className='text-center'>© 2025 BI Structure, Inc. All Rights Reserved</p>
            </div>
            <ul className='flex flex-col sm:flex-row gap-7 text-sm justify-center  items-center'>
                <li>Guides</li>
                <li>Terms of Sale</li>
                <li>Term of Use</li>
                <li>BI Structure Privacy Policy</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer