import Image from "next/image";
import Link from "next/link";
import BestOfBIStructure from "@/components/best-of-bi-structure";
import GearUp from "@/components/gearup";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, ChevronRight, ShoppingCart,  } from "lucide-react";
import { Product } from "@/data/interfaces";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const { userId } = await auth();

  const fetchProduct = async ()=>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  const fetchData:Product[] = await fetchProduct()
  const products:Product[] = fetchData.filter((item)=>item.status=="Trending")

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section className="md:pb-36 sm:pb-28 w-full pb-20">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-[17px] text-center font-medium animate-fade-in">
              Hello BI Structure App
            </p>
            <p className="text-[11px] text-center animate-fade-in">
              Find Your Flow. Discover Nike Now.{" "}
              <span className="font-medium underline">Get Your Great</span>
            </p>
          </div>
          <div className="mx-3 sm:mx-5 md:mx-7 lg:mx-10 flex-col flex gap-12">
            <Image
              src={"/Images/home/hero-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="flex flex-col gap-6 justify-between items-center animate-slide-up">
              <p className="text-base -mb-5 flex items-center gap-2">
                Innovate Your Style <ChevronRight className="w-5 h-5" />
              </p>
              <h1 className="text-5xl sm:text-[56px] text-center font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BI STRUCTURE EXCLUSIVE COLLECTION
              </h1>
              <p className="text-base text-center max-w-[551px]">
                Elevate your fashion. Redefine your comfort. Discover our premium range of products, designed for performance and style.
              </p>
              <div className="flex gap-5">
                {!userId && (
                  <Link href={"/login"}>
                    <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2 flex items-center gap-2 hover:bg-[#333333] transition-colors duration-300">
                      Sign In <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                )}
                <Link href={"/products"}>
                  <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2 flex items-center gap-2 hover:bg-[#333333] transition-colors duration-300">
                    Explore Collection <ShoppingCart className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Best of BI Structure Section */}
        <BestOfBIStructure />

        {/* Featured Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium animate-fade-in">Featured</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <Image
              src={"/Images/home/featured-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="flex flex-col gap-7 justify-between items-center animate-slide-up">
              <h1 className="text-5xl sm:text-[56px] text-center font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                STEP INTO WHAT FEELS GOOD
              </h1>
              <p className="text-base text-center max-w-[551px]">
                Cause everyone should know the feeling of running in that perfect pair.
              </p>
              <Link href={"/products"}>
                <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2 flex items-center gap-2 hover:bg-[#333333] transition-colors duration-300">
                  Find Your Shoe <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gear Up Section */}
        <GearUp />

        {/* Don't Miss Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium animate-fade-in">{"Don't Miss"}</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <Image
              src={"/Images/home/dont-miss-sec-img.png"}
              alt={"Hero Image"}
              width={1344}
              height={700}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="flex flex-col gap-7 justify-between items-center animate-slide-up">
              <h1 className="text-5xl sm:text-[56px] text-center font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FLIGHT ESSENTIALS
              </h1>
              <p className="text-base text-center max-w-[551px]">
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
              </p>
              <Link href={"/products"}>
                <button className="text-base rounded-3xl text-white bg-[#111111] px-4 sm:px-5 py-2 flex items-center gap-2 hover:bg-[#333333] transition-colors duration-300">
                  Shop <ShoppingCart className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Essentials Section */}
        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
          <div className="py-1 flex flex-col gap-1 text-[#111111]">
            <p className="text-2xl font-medium animate-fade-in">{"Don't Miss"}</p>
          </div>
          <div className="mt-6 flex-col flex gap-12">
            <div className="flex-col flex sm:flex-row gap-3">
              {["Men's", "Women's", "Trending's"].map((category, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={`/Images/home/essentials-${category.slice(0, -2).toLowerCase()}.png`}
                    alt={category}
                    width={440}
                    height={540}
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <Link href={`/products?filter=${category.slice(0,-2).toLowerCase()}`}>
                    <button className="px-5 py-2 bg-white absolute rounded-3xl left-10 bottom-10 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300">
                      {category} <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
  <div className="py-1 flex flex-col gap-1 text-[#111111]">
    <p className="text-2xl font-medium">Trending Products</p>
  </div>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.slice(0,3).map((product, index) => (
      <div key={index} className="relative overflow-hidden group">
        <Image
          src={
                      product.image
                        ? urlFor(product.image).url()
                        : "/default-image.png"
                    } 
          alt={`${product} Image`}
          width={440}
          height={540}
          className="transition-transform duration-300 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-white text-lg font-semibold">{product.productName}</h3>
          <Link href={`/products/${product.slug.current}`}>
            <button className="mt-2 px-4 py-2 bg-white rounded-full text-black font-medium transition-colors duration-300 hover:bg-gray-200">
              View Product
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


      </div>
    </>
  );
}