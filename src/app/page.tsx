import Image from "next/image";
import Link from "next/link";
import BestOfAirMax from "@/components/best-of-air-max";
import GearUp from "@/components/gearup";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {

  const { userId } = await auth()
  
  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section className="md:pb-36 sm:pb-28 w-full pb-20">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-[17px] text-center font-medium">
              Hello BI Structure App
            </p>
            <p className="text-[11px] text-center">
            Find Your Flow. Discover Nike Now. 
              <span className="font-medium underline">Get Your Great</span>
            </p>
          </div>
          <div className="mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex-col flex gap-12">
            <Image
              src={"/Images/home/hero-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
            />
           <div className="flex flex-col gap-6 justify-between items-center">
  <p className="text-base -mb-5">Innovate Your Style</p>
  <h1 className="text-5xl sm:text-[56px] text-center font-medium">
    BI STRUTURE EXCLUSIVE COLLECTION
  </h1>
  <p className="text-base text-center max-w-[551px]">
    Elevate your fashion. Redefine your comfort. Discover our premium range of products, designed for performance and style.
  </p>
  <div className="flex gap-5">

{!userId && <Link href={"/login"}>
      <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2">
        Sign In
      </button>
    </Link> }

  
    <Link href={"/products"}>
      <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2">
        Explore Collection
      </button>
    </Link>
  </div>
</div>

          </div>
        </section>

        {/* Best of Air Max Section */}
        <BestOfAirMax/>

        {/* Featured Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium">Featured</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <Image
              src={"/Images/home/featured-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
            />
            <div className="flex flex-col gap-7 justify-between items-center">
              <h1 className="text-5xl sm:text-[56px] text-center font-medium">
                STEP INTO WHAT FEELS GOOD
              </h1>
              <p className="text-base text-center max-w-[551px]">
                Cause everyone should know the feeling of running in that
                perfect pair.
              </p>
              <Link href={"/products"}><button className="text-base  rounded-3xl text-white bg-[#111111] px-4 sm:px-5  py-2">
                Find Your Shoe
              </button></Link>
            </div>
          </div>
        </section>

          {/* Gear Up Section */}
          <GearUp/>

        {/* Don't Miss Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium">{"Don't Miss"}</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <Image
              src={"/Images/home/dont-miss-sec-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
            />
            <div className="flex flex-col gap-7 justify-between items-center">
              <h1 className="text-5xl sm:text-[56px] text-center font-medium">
                FLIGHT ESSENTIALS
              </h1>
              <p className="text-base text-center max-w-[551px]">
                Your built-to-last, all-week wears—but with style only Jordan
                Brand can deliver.
              </p>
             <Link href={"/products"}> <button className="text-base  rounded-3xl text-white bg-[#111111] px-4 sm:px-5  py-2">
                Shop
              </button></Link>
            </div>
          </div>
        </section>

        {/* The Essentials Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium">{"Don't Miss"}</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <div className="flex-col flex sm:flex-row gap-3">
              <div className="relative">
                <Image
                  src={"/Images/home/essentials-men.png"}
                  alt={"Hero Image"}
                  width={440}
                  height={540}
                />
                <Link href={"/products"}><button className="px-5 py-2 bg-white absolute rounded-3xl left-10 bottom-10">
                  {"Men's"}
                </button></Link>
              </div>
              <div className="relative">
                <Image
                  src={"/Images/home/essentials-women.png"}
                  alt={"Hero Image"}
                  width={440}
                  height={540}
                />
                <Link href={"/products"}><button className="px-5 py-2 bg-white absolute rounded-3xl left-10 bottom-10">
                  {"Women's"}
                </button></Link>
              </div>
              <div className="relative">
                <Image
                  src={"/Images/home/essentials-kids.png"}
                  alt={"Hero Image"}
                  width={440}
                  height={540}
                />
                <Link href={"/products"}><button className="px-5 py-2 bg-white absolute rounded-3xl left-10 bottom-10">
                  {"Kid's"}
                </button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10 text-[#757575] flex justify-center ">
          <div className="max-w-[800px] w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <ul className="text-base flex flex-col gap-3 text-center sm:text-start">
              <li className="text-[#111111] mb-3 font-medium">Icons</li>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
            <ul className="text-base flex flex-col gap-3 text-center sm:text-start">
              <li className="text-[#111111] mb-3 font-medium">Shoes</li>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>

            <ul className="text-base flex flex-col gap-3 text-center sm:text-start">
              <li className="text-[#111111] mb-3 font-medium">Shoes</li>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>

            <ul className="text-base flex flex-col gap-3 text-center sm:text-start">
              <li className="text-[#111111] mb-3 font-medium">Shoes</li>
              <li>Infant & Toddler Shoes</li>
              <li>{"Kids' Shoes"}</li>
              <li>{"Kids' Jordan Shoes"}</li>
              <li>{"Kids' Basketball Shoes"}</li>
            </ul>
          </div>
        </section>

        

        

        {/* <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex gap-3">
      <Carousel items={items} />
      </section> */}

    
      </div>
    </>
  );
}
