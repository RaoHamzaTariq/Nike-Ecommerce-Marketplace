import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import Image from 'next/image'

const CheckOut = () => {
  return (
    <div className='w-full font-inter flex justify-center mt-10 items-center'>
    <div className='max-w-[880px] lg:gap-[120px] md:gap-[70px] sm:gap-[35px] sm:flex-row flex-col mb-24 mx-5 flex items-start'>
        <div className='max-w-[440px]'>
        <div className='pt-5 flex flex-col gap-1'>
            <h4 className='text-xl font-medium '>How would you like to get your order?</h4>
            <div className='flex flex-col gap-6 pb-6'>
            <p className='text-[#757575] text-base'>{"Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact yock the link for more information. Learn More"}</p>
            <button className='flex gap-6 py-7 items-center rounded-lg px-5 border-[#111111] border-2 w-full'><TbTruckDelivery className='text-2xl'/>  Deliver it</button>
            </div>
        </div>
        <div className="text-black py-1 flex flex-col  gap-[14px]">
        <h4 className='text-xl font-medium '>Enter your name and address:</h4>

      <input
        type="text"
        className="w-full text-[#111111] border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="First Name"
      />
      <input
        type="text"
        className="w-full border text-[#111111] rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Last Name"
      />
      <input
        type="text"
        className="w-full border text-[#111111] rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Address Line 1"
      />
      <p className="text-xs text-[#8d8d8d]">
      We do not ship to P.O. boxes
      </p>
      <input
        type="text"
        className="w-full border text-[#111111] rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Address Line 2"
      />
      <div className="flex w-full flex-row gap-4">
        <input
          type="text"
          className="w-full text-center sm:w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5]"
          placeholder="Postal Code"
        />
        <input
          type="text"
          className="w-full text-center sm:w-1/2 border rounded px-4 py-3 text-sm border-[#e5e5e5]"
          placeholder="Locality"
        />
      </div>
      <div className="flex w-full flex-row gap-4">
      <select
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        defaultValue="State/Territory"
      >
        <option>State/Territory</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
      </select>
      <select
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        defaultValue="India"
      >
        <option>India</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
      </select>
      </div>
      
        <div className="flex items-center  gap-2">
          <input type="checkbox" />
          <p className="text-[#bcbcbc]">Save this address to my profile</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-[#bcbcbc]">Make this my preferred address</p>
        </div>
      
    </div>
        <div className='text-black py-1 flex flex-col pt-5 pb-2 gap-7'>
        <h4 className='text-xl font-medium '>{"What's your contact information?"}</h4>
            <div className='flex flex-col'>
            <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Email"
      />
      <p className="text-xs text-[#8d8d8d]">
      A confirmation email will be sent after checkout.
      </p>
            </div>
            <div className='flex flex-col'>
            <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Phone Number"
      />
      <p className="text-xs text-[#8d8d8d]">
      A carrier might contact you to confirm delivery.
      </p>
            </div>
        </div>
        <div className='text-black py-1 flex flex-col pt-5 pb-2 gap-7'>
        <h4 className='text-xl font-medium '>{"What's your PAN?"}</h4>
            <div className='flex flex-col'>
            <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="PAN"
      />
      <p className="text-xs text-[#8d8d8d]">
      Enter your PAN to enable payment with UPI, Net Banking or local card methods
      </p>
            </div>
            <div className='flex flex-col'>
            <input
        type="text"
        className="w-full border rounded px-4 py-3 text-sm border-[#e5e5e5]"
        placeholder="Phone Number"
      />
      <p className="text-xs text-[#8d8d8d]">
      A carrier might contact you to confirm delivery.
      </p>
            </div>
            <div className="flex items-center  gap-2">
          <input type="checkbox" />
          <p className="text-[#bcbcbc]">Save PAN details to Nike Profile</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-[#bcbcbc]">{"I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner."}</p>
        </div>
        </div>
        <button className="bg-[#f5f5f5] text-[#757575] mt-14 w-full sm:w-auto sm:px-20 py-3 text-xs">Continue</button>
        <ul className='flex flex-col gap-7 mt-7 text-[#757575] text-xl font-medium'>
            <li className='text-[#111111]'>Delivery</li>
            <li>Shipping</li>
            <li>Billing</li>
            <li>Payment</li>
        </ul>
    </div>
    <div className='max-w-[320px] w-[320px] '>
        <h1 className='text-[#111111] text-5 py-5 font-medium'>Order Summary</h1>
        <div className='w-full flex flex-col gap-3'>
            <div className='text-[#8d8d8d] text-base flex justify-between w-full'>
                <p>Subtotal</p>
                <p>{"₹ 20890.00"}</p>
            </div>
            <div className='text-[#8d8d8d] text-base flex justify-between w-full'>
                <p>Delivery/Shipping</p>
                <p>Free</p>
            </div>
            <div className='text-[#111111] text-base flex justify-between w-full'>
                <p>Total</p>
                <p>{"₹ 20 890.00"}</p>
            </div>
            <p className="text-xs text-[#111111]">(The total reflects the price of your order, including all duties and taxes)
      </p>
      <div className='flex flex-col gap-3'>
        <p className='text-base font-bold'>{"Arrives Mon, 27 Mar - Wed, 12 Apr"}</p>
        <div className='flex gap-3'>
        <Image
        src={`/Images/check-out/nike-dri-fit.png`}
        alt={"Logo Image"}
        width={208}
        height={208}
      />
      <div className='text-sm text-[#8d8d8d]'>
        <p className='text-[#111111]'>{"Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"}</p>
        <p>Qty 1</p>
        <p>Size L</p>
        <p>{"₹ 3 895.00"}</p>
      </div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p>{"Arrives Mon, 27 Mar - Wed, 12 Apr"}</p>
        <div className='flex gap-3'>
        <Image
        src={`/Images/check-out/nike-air-max.png`}
        alt={"Logo Image"}
        width={208}
        height={208}
      />
      <div className='text-sm text-[#8d8d8d]'>
        <p className='text-[#111111]'>{"Nike Air Max 97 SE Men's Shoes"}</p>
        <p>Qty 1</p>
        <p>Size UK 8</p>
        <p>{"₹ 16 995.00"}</p>
      </div>
        </div>
      </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CheckOut