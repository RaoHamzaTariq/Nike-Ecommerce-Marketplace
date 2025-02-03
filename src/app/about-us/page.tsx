

import Link from 'next/link';
import Image from 'next/image';
import { FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">

      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 transform transition duration-300 hover:scale-105 hover:text-blue-600">
          About BI STRUTURE
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto transform transition duration-300 hover:scale-105 hover:text-gray-800">
          Redefining Comfort, Style, and Innovation in Every Product.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="text-center flex flex-col justify-center items-center gap-5 mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 transform transition duration-300 hover:scale-105">
          Our Story
        </h2>
        <p className="text-base text-gray-600 mt-6 max-w-3xl mx-auto transform transition duration-300 hover:scale-105">
          At <strong>BI STRUTURE</strong>{", we believe that fashion is not just about looks; it’s about feeling confident, comfortable, and empowered. Founded with the mission to combine style with performance, we strive to bring the highest-quality products that deliver exceptional durability and innovative design."}
        </p>
        <Image
          src="/BI Structure Images/about-us.png" // Replace with your actual image path
          alt="Our Story"
          width={700}
          height={700}
        />
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="text-center text-3xl font-semibold text-gray-800 transform transition duration-300 hover:scale-105">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Innovation */}
          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105">
            <FaLightbulb size={40} />
            <h3 className="mt-4 text-xl font-bold">Innovation</h3>
            <p className="text-sm mt-2 text-center">
              We are dedicated to staying at the forefront of innovation.
            </p>
          </div>

          {/* Quality */}
          <div className="p-6 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105">
            <FaShieldAlt size={40} />
            <h3 className="mt-4 text-xl font-bold">Quality</h3>
            <p className="text-sm mt-2 text-center">
              Quality is at the heart of everything we do.
            </p>
          </div>

          {/* Customer Focus */}
          <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105">
            <FaUsers size={40} />
            <h3 className="mt-4 text-xl font-bold">Customer Focus</h3>
            <p className="text-sm mt-2 text-center">
              Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 transform transition duration-300 hover:scale-105">
          Join Us
        </h2>
        <p className="text-base text-gray-600 mt-4 max-w-xl mx-auto transform transition duration-300 hover:scale-105">
          Ready to experience the best in comfort, style, and performance? Explore our collection today.
        </p>
        <Link href="/products">
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full transform transition duration-300 hover:bg-gray-800 hover:scale-105 shadow-md">
            Explore Products
          </button>
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 transform transition duration-300 hover:scale-105">
          What Our Customers Say
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <p className="text-gray-600 text-lg mb-4">
            {`  "The best products I have ever used! Comfort and style combined perfectly!"`}
            </p>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">CEO, Company</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <p className="text-gray-600 text-lg mb-4">
             {` "Amazing quality and design. I can't recommend BI STRUTURE enough!"`}
            </p>
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <p className="text-gray-600 text-lg mb-4">
            {`  "The attention to detail is incredible. Truly a game-changer in fashion!"`}
            </p>
            <p className="font-semibold text-gray-800">Mark Taylor</p>
            <p className="text-sm text-gray-500">Entrepreneur</p>
          </div>
        </div>
      </section>


    </div>
  );
}
