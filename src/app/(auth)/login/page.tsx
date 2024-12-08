import React from 'react'
import Image from 'next/image'

const Login = () => {
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
    <div className="text-[#8d8d8d] py-1 flex flex-col items-center gap-[14px]">
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
      <button className="bg-black text-white w-full sm:w-auto sm:px-20 py-3 text-xs">
        SIGN IN
      </button>
      <p className="text-sm">
        Not a Member? <span className="underline text-black">Join Us</span>
      </p>
    </div>
  </div>
</div>

    
  )
}

export default Login