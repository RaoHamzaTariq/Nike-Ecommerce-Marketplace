'use client'
import React from 'react'
import Image from 'next/image'
import { IoBagOutline, IoSearch } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'
import Link from 'next/link'
import { useAuth, UserButton } from '@clerk/nextjs'

const Navbar =  () => {

    const {userId } = useAuth()

  return (
    <div className='max-h-24 w-full text-[#111111]'>
        <div className='h-9 max-h-9 bg-[#F5F5F5] flex justify-between items-center px-3 sm:px-14'>
            <div className='w-6 h-6'>
           <Image src={'/Images/home/footballer-logo.png'} alt={'Jorden Logo'} width={24} height={24}/>
            </div>
            <ul className='flex gap-2 sm:gap-5 font-helvetica text-[11px] font-medium items-center '>
            <Link href={"/products"}><li>Find a Store</li></Link>
                <li>|</li>
                <Link href={"/contact-us"}><li>Help</li></Link>
                <li>|</li>
                {
                    !userId ? <Link href={"/joinus"}><li>Join Us</li></Link> : <Link href={"/profile"}><li>Profile</li></Link>   
                }
                
                <li>|</li>
                {
                    !userId ? <Link href={"/login"}><li>Sign In</li></Link> :  <UserButton afterSignOutUrl="/" />   
                }
                
               
            </ul>
        </div>
        <div className='max-h-[60px] h-[60px] flex justify-between items-center px-5 py-[10px]'>
            <div className='w-16 h-5'>
            <Link href={'/'}><Image src={'/Images/home/nike-logo.png'} alt={'Jorden Logo'} width={58} height={20}/></Link>
            </div>
            <ul className='lg:!flex  hidden gap-2 sm:gap-3 md:gap-6 text-[15px] font-medium'>
                <li>News and Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
            <div className='flex gap-2 sm:gap-3 md:gap-5 items-center justify-between'>
                <div className='p-2  gap-2 bg-[#f5f5f5] hidden sm:!flex rounded-xl justify-between items-center'>
                <IoSearch className='text-xl'/>
                    <input type="text" placeholder='Search' className='bg-[#f5f5f5]  text-[#cccccc]'/>
                </div>
                <CiHeart  className='text-2xl'/>
                <Link href={'/cart'}><IoBagOutline className='text-xl'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar