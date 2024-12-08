import React from 'react';
import { FaLocationDot, FaThumbsDown, FaThumbsUp } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { MdEmail, MdOutlinePhoneAndroid } from 'react-icons/md';
import { TbMessageDots } from 'react-icons/tb';

const ContactUs = () => {
  return (
    <div className="my-10 flex justify-center items-center text-[#111111] px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-[32px] font-medium text-center">Get Help</h1>
          <div className="border border-[#757575] rounded-lg p-2 w-full max-w-[457px] bg-[#f5f5f5] flex justify-between items-center">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="text-[#757575] w-full bg-transparent"
            />
            <IoSearch className="text-xl" />
          </div>
        </div>

        <div className="p-7 flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-10 lg:w-2/3">
            <h1 className="font-medium text-[28px]">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h1>
            <div className="space-y-5">
              <p className="text-base">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc pl-5">
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                <li>
                  {"If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card."}
                </li>
                <li>Apple Pay</li>
              </ul>
              <p>
                {"Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today."}
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#111111] text-white text-base px-[20px] py-[7px] rounded-[30px]">
                  Join Us
                </button>
                <button className="bg-[#111111] text-white text-base px-[20px] py-[7px] rounded-[30px]">
                  Shop Nike
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-medium">FAQS</h3>
              <div className="space-y-3">
                {/* FAQ Items */}
                {[
                  {
                    question: "Does my card need international purchases enabled?",
                    answer:
                      "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.",
                  },
                  {
                    question: "What payment method is accepted for SNKRS orders?",
                    answer: "You can use any accepted credit card to pay for your SNKRS order.",
                  },
                  {
                    question: "Why don't I see Apple Pay as an option?",
                    answer:
                      "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
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
                  <FaThumbsUp />
                  <FaThumbsDown />
                </div>
                <p className="text-base text-[#757575]">RELATED</p>
              </div>
              <div className="ml-3 text-base underline">
                <h4>{"WHAT ARE NIKE'S DELIVERY OPTIONS?"}</h4>
                <h4>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h4>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center gap-5 lg:w-1/3">
            <h2 className="text-[28px] font-medium text-center lg:text-left">
              CONTACT US
            </h2>
            <div className="space-y-10">
              {[
                {
                  icon: <MdOutlinePhoneAndroid className="text-7xl" />,
                  heading: "000 800 919 0566",
                  subheading:
                    "Products & Orders: 24 hours a day, 7 days a week\nCompany Info & Enquiries: 07:30 - 16:30, Monday - Friday",
                },
                {
                  icon: <TbMessageDots className="text-7xl" />,
                  heading: "24 hours a day",
                  subheading: "7 days a week",
                },
                {
                  icon: <MdEmail className="text-7xl" />,
                  heading: "We'll reply within",
                  subheading: "five business days",
                },
                {
                  icon: <FaLocationDot className="text-7xl" />,
                  heading: "STORE LOCATOR",
                  subheading: "Find Nike retail stores near you",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-5 max-w-[265px] text-center"
                >
                  {contact.icon}
                  <div>
                    <p>{contact.heading}</p>
                    <p className="whitespace-pre-wrap">{contact.subheading}</p>
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
