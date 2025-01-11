'use client';
import Image from 'next/image';  
import Link from 'next/link';  
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignIn } from '@clerk/nextjs';
import { isClerkError } from '@/data/data';


const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const { isLoaded, signIn, setActive } = useSignIn();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isLoaded || !signIn) {
      setErrorMessage('Authentication is still loading or not available.');
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // Check if authData is valid
      if (signInAttempt?.status === 'complete') {
        // Session created successfully
        await setActive({ session: signInAttempt.createdSessionId });
        router.push('/');
        console.log('Signed in successfully!');
      } else {
        // Further steps needed (e.g., email verification)
        console.log(JSON.stringify(signInAttempt, null, 2));
        setErrorMessage('Further verification required.');
      }
    } 
    
    catch (error: unknown) {
      console.error(JSON.stringify(error, null, 2));
      if (isClerkError(error)) {
        setErrorMessage(error.errors[0].message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
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
