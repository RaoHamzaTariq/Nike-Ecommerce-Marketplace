import React from 'react'
import Image from 'next/image'
import { IoBagOutline, IoSearch } from 'react-icons/io5'
import { CiHeart } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='max-h-24 text-[#111111]'>
        <div className='h-9 max-h-9 bg-[#F5F5F5] flex justify-between items-center px-3 sm:px-14'>
            <div className='w-6 h-6'>
            <Image src={'/Images/home/footballer-logo.png'} alt={'Jorden Logo'} width={24} height={24}/>
            </div>
            <ul className='flex gap-2 sm:gap-5 font-helvetica text-[11px] font-medium '>
                <li>Find a Store</li>
                <li>|</li>
                <li>Help</li>
                <li>|</li>
                <li>Join Us</li>
                <li>|</li>
                <li>Sign In</li>
            </ul>
        </div>
        <div className='max-h-[60px] h-[60px] flex justify-between items-center px-5 py-[10px]'>
            <div className='w-16 h-5'>
            <Image src={'/Images/home/nike-logo.png'} alt={'Jorden Logo'} width={58} height={20}/>
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
                <IoBagOutline className='text-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar