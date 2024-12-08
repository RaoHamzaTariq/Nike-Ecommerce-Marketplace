"use client";
import React, { useState } from "react";
import BestOfAirMax from "./best-air-max";
import { Items } from "@/data/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  items: {
    name: string;
    category: string;
    price: string;
    image: string;
  }[]; // Array of carousel items
}

const Carousel: React.FC<CarouselProps> = ({ items }:{items:Items[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="md:pb-36 sm:pb-28 pb-20 mx-3 sm:mx-5 md:mx-7 lg:mx-10">
      {/* Header Section */}
      <div className="py-1 flex justify-between gap-1 text-[#111111]">
        <p className="text-2xl font-medium">Featured</p>
        <div className="flex items-center gap-3">
          <p className="text-2xl font-medium">Shop</p>
          <div className="flex gap-2">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-full"
              onClick={handlePrev}
            >
              <IoIosArrowBack />

            </button>
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-full"
              onClick={handleNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`, // Adjust container width based on items
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 flex justify-center"
            >
              <BestOfAirMax
                name={item.name}
                category={item.category}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
