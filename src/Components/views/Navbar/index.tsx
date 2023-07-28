"use client";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import {
  NavbarArray,
  NavbarItemType,
} from "@/Components/utils/NavbarArrayandTypes";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./SubComponent/DropDown";
import Expand from "./SubComponent/Expand";
import ContextWrapper from "@/global/context";
import CartState from "./SubComponent/CartState";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <ContextWrapper>
      <div>
        <div className="py-6 flex  justify-between items-center space-x-12 relative">
          <Link href="/" className="w-36 flex-shrink-0">
            <Image width={500} height={500} src="/logo.webp" alt="Logo" />
          </Link>
          <div className="hidden lg:flex justify-between items-center w-full">
            <ul className="flex space-x-3 font-medium text-lg">
              {NavbarArray.map((item: NavbarItemType, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-0 relative  px-3 py-1 hover:bg-gray-100 cursor-pointer group"
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.isDropDown ? (
                    <div className="rotate-0 group-hover:rotate-180 duration-300">
                      <RiArrowDropDownLine size={25} />
                    </div>
                  ) : (
                    ""
                  )}
                  {item.isDropDown && (
                    <div
                      className={`invisible group-hover:visible absolute border left-0 top-8 py-2 px-4 bg-gray-100 text-sm font-light`}
                    >
                      <DropDown item={item} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className=" outline-none border flex  items-center text-gray-600 px-3 rounded-md w-80 ">
              <BiSearch />
              <input
                type="text"
                className="pl-1 pr-2 py-1 focus:border-none"
                placeholder="Search in Our Store"
              />
            </div>
            <CartState />
            {/* <div className="flex-shrink-0 w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center relative">
            <div className=" absolute top-1 right-2 rounded-full w-4 h-4 flex items-center justify-center bg-red-400 text-xs font-light">
              {cartItemNo}
            </div>
            <BsCart2 size={24} />
          </div> */}
          </div>
          <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <div className="flex lg:hidden">
                <IoMdClose size={30} />
              </div>
            ) : (
              <div className="flex lg:hidden">
                <GiHamburgerMenu size={25} />
              </div>
            )}
          </div>
        </div>
        {isNavbarOpen && <MobileNavbar />}
      </div>
    </ContextWrapper>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100 lg:hidden">
      {NavbarArray.map((items: NavbarItemType, index: number) => {
        return <Expand key={index} items={items} />;
      })}
    </div>
  );
};
