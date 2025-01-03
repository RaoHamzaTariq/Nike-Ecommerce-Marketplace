'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const JoinUs = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState<"India"|"United States"|"Canada"|"United Kingdom">("India");
  const [gender, setGender] = useState<"Male"|"Female">("Male");
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const API_URL = process.env.API_URL ;
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName, dateOfBirth, country, gender }),
      });

      if (!response.ok) {
        // Handle specific error responses
        const data = await response.json();
        if (data.message === 'Email already in use') {
          setErrorMessage('Email is already in use. Please choose another one.');
        } else {
          throw new Error('Registration failed');
        }
      } else {
        // Clear error message and redirect on successful registration
        setErrorMessage('');
        router.push('/login'); // Redirect to the login page
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-7 py-9">
      <div className="text-[#111111] max-w-[380px] w-full">
        <div className="flex flex-col gap-7 items-center text-center">
          <Image
            src={`/Images/home/nike-logo.png`}
            className="h-4 w-10"
            alt={"Logo Image"}
            width={700}
            height={700}
          />
          <h4 className="text-lg font-bold">BECOME A NIKE MEMBER</h4>
          <p className="text-[#8d8d8d]">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
        </div>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit} className="text-[#8d8d8d] py-4 flex flex-col gap-4">
          {/* Input fields */}
          <input
            type="email"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="date"
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <p className="text-xs text-[#8d8d8d]">
            Get a Nike Member Reward every year on your Birthday.
          </p>
          
          {/* Country Selection */}
          <select
            className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
            value={country}
            onChange={(e) => setCountry(e.target.value as "India" | "United States" | "Canada" | "United Kingdom")}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>

          {/* Gender Selection */}
          <div className="flex flex-row gap-4">
              <button
                type="button"
                onClick={() => setGender("Male")}
                className={`w-full text-center sm:w-1/2 border hover:bg-slate-100 rounded px-4 py-3 text-sm ${gender === "Male" ? "bg-gray-300" : ""}`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender("Female")}
                className={`w-full text-center sm:w-1/2 border hover:bg-slate-100 rounded px-4 py-3 text-sm ${gender === "Female" ? "bg-gray-300" : ""}`}
              >
                Female
              </button>
          </div>

          {/* Checkboxes */}
          <div className="flex items-start gap-2 text-xs">
              <input type="checkbox" />
              <p>Sign up for emails to get updates from Nike on products, offers, and your Member benefits.</p>
          </div>
          
          {/* Terms and Conditions */}
          <p className="text-xs text-[#bcbcbc]">
              {"By logging in, you agree to Nike's"} 
              <span className="underline">Privacy Policy</span> and 
              <span className="underline">Terms of Use</span>.
          </p>

          {/* Submit Button */}
          <button type="submit" className="bg-black text-white py-3 text-sm w-full">
              JOIN US
          </button>

          {/* Sign In Link */}
          <p className="text-sm">
              Already a Member? 
              <Link href={"/login"}>
                  <span className="underline text-black">Sign In</span>
              </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
