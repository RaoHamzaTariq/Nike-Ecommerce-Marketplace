import Link from 'next/link';
import React from 'react';
import { FaLocationDot, FaThumbsDown, FaThumbsUp } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdEmail, MdOutlinePhoneAndroid } from 'react-icons/md';
import { TbMessageDots } from 'react-icons/tb';

const ContactUs = () => {
  return (
    <div className="my-10 flex justify-center items-center text-[#111111] px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-[1200px]">
        {/* Search Section */}
        <div className="flex flex-col gap-5 items-center animate-fade-in">
          <h1 className="text-[32px] font-medium text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get Help
          </h1>
          <div className="border border-[#757575] rounded-lg p-2 w-full max-w-[457px] bg-[#f5f5f5] flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="text-[#757575] w-full bg-transparent focus:outline-none"
            />
            <IoSearch className="text-xl text-[#757575]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-7 flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-10 lg:w-2/3">
            {/* About BI Structure */}
            <h1 className="font-medium text-[28px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ABOUT BI STRUCTURE
            </h1>
            <div className="space-y-5">
              <p className="text-base">
                Welcome to <strong>BI Structure</strong>, your trusted source for authentic and original Nike products. We are committed to providing high-quality products and exceptional customer service.
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Products:</strong> Authentic and Original Nike Products</li>
                <li><strong>Delivery:</strong> 3 to 5 days</li>
                <li><strong>Payment:</strong> Currently Cash on Delivery. More payment options coming soon!</li>
                <li><strong>Location:</strong> Online website</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href={'/products'}>
                  <button className="bg-[#111111] text-white text-base px-[20px] py-[7px] rounded-[30px] hover:bg-[#333333] transition-colors duration-300">
                    Shop Now
                  </button>
                </Link>
                <Link href={'/joinus'}>
                  <button className="bg-[#111111] text-white text-base px-[20px] py-[7px] rounded-[30px] hover:bg-[#333333] transition-colors duration-300">
                    Join Us
                  </button>
                </Link>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="space-y-5">
              <h3 className="text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <div className="space-y-3">
                {/* FAQ Items */}
                {[
                  {
                    question: "How can I track my order?",
                    answer:
                      "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
                  },
                  {
                    question: "What is your return policy?",
                    answer:
                      "We offer a 30-day return policy for unused and undamaged products. Please contact our support team for assistance.",
                  },
                  {
                    question: "Do you offer international shipping?",
                    answer:
                      "Currently, we only ship within Pakistan. Stay tuned for updates on international shipping!",
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-2 text-base">
                    <p className="font-bold">{faq.question}</p>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-base">Was this answer helpful?</p>
                <div className="flex text-2xl gap-2">
                  <FaThumbsUp className="hover:text-green-500 transition-colors duration-300 cursor-pointer" />
                  <FaThumbsDown className="hover:text-red-500 transition-colors duration-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="flex flex-col items-center gap-5 lg:w-1/3">
            <h2 className="text-[28px] font-medium text-center lg:text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CONTACT US
            </h2>
            <div className="space-y-10">
              {[
                {
                  icon: <MdOutlinePhoneAndroid className="text-7xl text-blue-600" />,
                  heading: "+92 336 7446641",
                  subheading:
                    "Customer Support: 24 hours a day, 7 days a week",
                },
                {
                  icon: <TbMessageDots className="text-7xl text-purple-600" />,
                  heading: "Live Chat",
                  subheading: "Available 24/7 for instant support",
                },
                {
                  icon: <MdEmail className="text-7xl text-blue-600" />,
                  heading: "bistructure9211@gmail.com",
                  subheading: "We'll reply within 24 hours",
                },
                {
                  icon: <FaLocationDot className="text-7xl text-purple-600" />,
                  heading: "Online Store",
                  subheading: "Visit our website for the latest products",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-5 max-w-[265px] text-center hover:scale-105 transition-transform duration-300"
                >
                  {contact.icon}
                  <div>
                    <p className="font-medium">{contact.heading}</p>
                    <p className="whitespace-pre-wrap text-[#757575]">{contact.subheading}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;