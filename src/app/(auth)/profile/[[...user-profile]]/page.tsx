'use client';
import { UserProfile } from '@clerk/nextjs';
import React from 'react'

const Profile = () => {
  return (
    <div className='flex w-full justify-center items-center py-5 sm:py-10'>
        <UserProfile/>
    </div>
  )
}

export default Profile