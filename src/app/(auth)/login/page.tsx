'use client';
import Image from 'next/image';  
import Link from 'next/link';  
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs'; // Ensure bcrypt is installed
import { User } from '@/data/interfaces';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const API_URL = process.env.API_URL;
      const response = await fetch(`${API_URL}/api/register`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      
      // Assuming data.data is an array of users
      const user = data.data.find((user: User) => user.email === email);

      if (user) {
        // Compare the hashed password with the input password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
          setErrorMessage(''); // Clear any previous error messages
          router.push('/'); // Redirect to the homepage or another page
        } else {
          setErrorMessage('Invalid password'); // Set error message for invalid password
          console.error('Invalid password');
        }
      } else {
        setErrorMessage('User not found'); // Set error message if user not found
        console.error('User not found');
      }
    } catch (error) {
      console.error('Sign In error:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.'); // General error message
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-7 py-9">
      <div className="text-[#111111] max-w-[380px] w-full">
        <div className="flex flex-col gap-7 items-center">
          <Image
            src={`/Images/home/nike-logo.png`}
            className="h-4 w-10"
            alt={"Logo Image"}
            width={700}
            height={700}
          />
          <h4 className="max-w-[185px] text-base sm:text-lg font-bold text-center">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h4>
        </div>
        
        

        <form onSubmit={handleSubmit} className="text-[#8d8d8d] py-1 flex flex-col items-center gap-[14px]">
          <input
            type="text"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Display error message if exists */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 text-xs items-start sm:items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[#bcbcbc]">Keep me signed in</p>
            </div>
            <p className="text-[#bcbcbc] underline">Forgotten your password?</p>
          </div>
          <p className="text-[#bcbcbc] text-xs text-center">
            {"By logging in, you agree to Nike's "}
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms of Use</span>.
          </p>
          <button type="submit" className="bg-black text-white w-full sm:w-auto sm:px-20 py-3 text-xs">
            SIGN IN
          </button>
          <p className="text-sm">
            Not a Member? 
            <Link href={'/joinus'}>
              <span className="underline text-black">Join Us</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
