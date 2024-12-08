import React from 'react'
import Image from 'next/image'

const JoinUs = () => {
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

    <div className="text-[#8d8d8d] py-4 flex flex-col gap-4">
      {/* Input fields */}
      <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Password"
      />
      <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="First Name"
      />
      <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Last Name"
      />
      <input
        type="date"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Date of Birth"
      />
      <p className="text-xs text-[#8d8d8d]">
        Get a Nike Member Reward every year on your Birthday.
      </p>
      <select
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        defaultValue="India"
      >
        <option>India</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
      </select>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="w-full text-center sm:w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5]"
          placeholder="Male"
        />
        <input
          type="text"
          className="w-full text-center sm:w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5]"
          placeholder="Female"
        />
      </div>

      {/* Checkboxes */}
      <div className="flex items-start gap-2 text-xs">
        <input type="checkbox" />
        <p>
          Sign up for emails to get updates from Nike on products, offers, and
          your Member benefits.
        </p>
      </div>
      <p className="text-xs text-[#bcbcbc]">
        {"By logging in, you agree to Nike's "}
        <span className="underline">Privacy Policy</span> and
        <span className="underline">Terms of Use</span>.
      </p>
      <button className="bg-black text-white py-3 text-sm w-full">
        JOIN US
      </button>
      <p className="text-sm">
        Already a Member? <span className="underline text-black">Sign In</span>
      </p>
    </div>
  </div>
</div>

  )
}

export default JoinUs