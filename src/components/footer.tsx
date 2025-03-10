import Link from 'next/link'
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
                    <Link href={"/products"}><li>FIND A STORE</li></Link>
                    <Link href={"/joinus"}><li>BECOME A MEMBER</li></Link>
                    <Link href={"/joinus"}><li>SIGN UP FOR EMAIL</li></Link>
                </ul>
                <ul className='items-center sm:items-start flex flex-col gap-4 text-[11px] text-[#7e7e7e]'>
                    <Link href={'/contact-us'}><li className='text-white text-[10px]'>GET HELP</li></Link>
                    <Link href={'/contact-us'}><li>Order Status</li></Link>
                    <Link href={'/contact-us'}><li>Delievery</li></Link>
                    <Link href={'/contact-us'}><li>Payment Options</li></Link>  
                </ul>
                <ul className='items-center sm:items-start flex flex-col gap-4 text-[11px] text-[#7e7e7e]'>
                <Link href={'/about-us'}><li className='text-white text-[10px]'>ABOUT BI STRUCTURE</li></Link>
                <Link href={'/about-us'}><li>News</li></Link>
                <Link href={'/about-us'}><li>Careers</li></Link>
                <Link href={'/about-us'}><li>Investors</li></Link>
                <Link href={'/about-us'}><li>Sustainabilty</li></Link>

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