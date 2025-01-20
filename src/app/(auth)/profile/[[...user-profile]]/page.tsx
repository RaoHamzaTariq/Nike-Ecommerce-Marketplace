'use client'
import React from 'react'
import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
  return (
    <div className='flex justify-center lg:my-7 sm:my-5 my-3'>
    <UserProfile />
    </div>
  )
}

export default UserProfilePage