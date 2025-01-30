"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import SearchBar from "./searchbar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { userId } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return (
    <div className="max-h-24 w-full text-[#111111] bg-white shadow-sm">
      {/* Top Bar */}
      <div className="h-9 max-h-9 bg-[#F5F5F5] flex justify-between items-center px-3 sm:px-14">
        <div className="w-6 h-6">
          <Image
            src={"/Images/home/footballer-logo.png"}
            alt={"Logo"}
            width={24}
            height={24}
          />
        </div>
        <ul className="flex gap-2 sm:gap-5 font-helvetica text-[11px] font-medium items-center">
          <Link href={"/products"}>
            <li>Find a Store</li>
          </Link>
          <li>|</li>
          <Link href={"/contact-us"}>
            <li>Help</li>
          </Link>
          <li>|</li>
          {!userId ? (
            <Link href={"/joinus"}>
              <li>Join Us</li>
            </Link>
          ) : (
            <Link href={"/profile"}>
              <li>Profile</li>
            </Link>
          )}
          <li>|</li>
          {!userId ? (
            <Link href={"/login"}>
              <li>Sign In</li>
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="max-h-[60px] h-[60px] flex justify-between items-center px-5 py-[10px]">
        {/* Logo */}
        <div className="w-24 h-5">
          <Link href={"/"}>
            <Image
              src={"/BI Structure Images/BI Structure.png"}
              alt={"BI Structure Logo"}
              width={100}
              height={90}
            />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="lg:flex hidden gap-3 md:gap-6 text-[15px] font-medium">
          <li>News and Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>

        {/* Search and Icons for Desktop */}
        <div className="hidden sm:flex gap-3 md:gap-5 items-center">
          <SearchBar />
          <Link href={"/wishlist"}>
            <CiHeart className="text-2xl cursor-pointer" />
          </Link>
          <Link href={"/cart"}>
            <IoBagOutline className="text-xl cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <Sheet >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <Menu className="h-10 w-10 text-gray-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-100 shadow-sm">
              <SheetHeader className="bg-gray-200 py-4">
                <SheetTitle className="text-lg font-medium">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                {/* Functional Links */}
                <div className="flex flex-col gap-4 border-b pb-4">
                  <SearchBar />
                  <Link
                    href={"/wishlist"}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <CiHeart className="h-5 w-5" />
                    Wishlist
                  </Link>
                  <Link
                    href={"/cart"}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <IoBagOutline className="h-5 w-5" />
                    Cart
                  </Link>
                  <Link
                    href={"/products"}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Products
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    href={"/news-and-featured"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    News and Featured
                  </Link>
                  <Link
                    href={"/men"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Men
                  </Link>
                  <Link
                    href={"/women"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Women
                  </Link>
                  <Link
                    href={"/kids"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Kids
                  </Link>
                  <Link
                    href={"/sale"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Sale
                  </Link>
                  <Link
                    href={"/snkrs"}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    SNKRS
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;