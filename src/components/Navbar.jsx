import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayou";
import { Link } from "react-scroll";

const  Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="sm:hidden block absolute top-16 w-full left-0 right-0 bg-[#14151B]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl shadow-black transition-transform duration-200 transform ">
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#product"  onClick={handleClick}>Product</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#service"  onClick={handleClick}>Services</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#blogs"  onClick={handleClick}>Blogs</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#gallery"  onClick={handleClick}>Gallery</a>
          </li>
          <li className="my-4 py-4 border-slate-800 hover:bg-slate-950">
            <a href="#Contact" onClick={handleClick}>Contact</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#14151B] text-white sticky top-0 z-50">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
              <span className="text-3xl font-bold">anyintech</span>
              {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="md:flex md:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-6 mr-16 text-[18px] ">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <a href="#product">Product</a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <a href="#service" >Services </a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                    <a href="#blogs">Blogs</a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <a href="#gallery">Gallery </a>
                  </li>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block sm:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};



export default Navbar