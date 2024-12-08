import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import BestOfAirMax from './best-air-max'

const GearUp = () => {
  return (
    <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex flex-col gap-3">
          <div className="py-1 flex justify-between gap-1 text-[#111111]">
            <p className="text-2xl font-medium">Gear Up</p>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-3'>
            <div className='flex flex-col items-end gap-3'>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium">{"Men's"}</p>
              <div className="flex gap-2">
                <button className="bg-[#e5e5e5] px-4 py-2 rounded-full">
                  <IoIosArrowBack />
                </button>
                <button className="bg-[#e5e5e5] px-4 py-2 rounded-full">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className='flex gap-3'>
                <div>
                <BestOfAirMax
              name={"Nike Dri-FIT ADV TechKnit Ultra"}
              category={"Men's Short-Sleeve Running Top"}
              price={"3 895"}
              image={"nike-dri-fit-adv"}
            />
                </div>
            <div className={"hidden sm:!block"}>
            <BestOfAirMax
              name={"Nike Dri-FIT Challenger"}
              category={"Men's 18cm (approx.) 2-in-1 Versatile Shorts"}
              price={"2 495"}
              image={"nike-dri-fit-challenger"}
            />
            </div>
            
            </div>
            </div>
            <div className='flex flex-col items-end gap-3'>
            <div className="flex items-center gap-3">
              <p className="text-base font-medium">{"Men's"}</p>
              <div className="flex gap-2">
                <button className="bg-[#e5e5e5] px-4 py-2 rounded-full">
                  <IoIosArrowBack />
                </button>
                <button className="bg-[#e5e5e5] px-4 py-2 rounded-full">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className='flex gap-3'>
                <div>
                <BestOfAirMax
              name={"Nike Dri-FIT ADV Run Division"}
              category={"Women's Long-Sleeve Running Top"}
              price={"5 295"}
              image={"nike-dri-fit-adv2"}
            />
                </div>
            <div className={"hidden sm:!block"}>
            <BestOfAirMax
              name={"Nike Fast"}
              category={"Women's Mid-Rise 7/8 Running Leggings with Pockets"}
              price={"3 795"}
              image={"nike-fast"}
            />
            </div>
            
            </div>
            </div>
          </div>
        </section>
  )
}

export default GearUp