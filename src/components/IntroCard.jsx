import React from "react";
import amo from "./assites/Amazon.png";
import fac from "./assites/bigbasket.png";
import you from "./assites/Ebay.png";
import inst from "./assites/facebook.png";
import flip from "./assites/flipkart.png";
import big from "./assites/indiamart.png";
import im from "./assites/Justdial.png";
import link from "./assites/linkedin.png";

import Sh from "./assites/Swiggy (1).png";
import Xi from "./assites/x.png";
import swi from "./assites/YouTube.png";
import zo from "./assites/zomato.png";
import mi from "./assites/whatsapp.png";
import mx from "./assites/instagram.png";
const IntroCard = () => {
  return (
    <div className="h-full w-auto  bg-[#14151B]">
      <h1 className="font-[800] text-[#FFFFFF] text-[32px] lg:text-[64px] ml-8 lg:ml-24">
        anyintech
      </h1>
      <p className="font-[700] lg:font-[600] lg:ml-24 text-[16px] lg:text-[32px] text-[#FFFFFF] ml-8 mt-[12px] ">
        AAYUSH PANDYA
      </p>
      <p className="font-[400]  text-[14px]  lg:text-[32px] text-[#FFFFFF] ml-8 mt-[12px] pr-6 lg:ml-24">
        At Anyintech, we are on a mission to unleash new possibilities for
        businesses worldwide. We understand that in today's digital age, a
        strong online presence is not just an option; it's a necessity. We are
        your trusted partners in transforming your business online, making a
        significant impact, and revolutionizing the way you advertise.
      </p>
      <a
        href="#inquryform"
        className="font-[600] cursor-pointer text-[14px] lg:text-[24px] text-[#FFFFFF] w-[95px] lg:w-[181px] h-[40px] lg:h-[68px] rounded-[40px] bg-[#27282A] mt-2 lg:mt-[40px] ml-[24px] flex items-center justify-center lg:ml-24"
      >
        Let’s Talk
      </a>

      <div className=" ml-2 mt-5 md:hidden block py-4 px-4 rounded-full ">
        <div className="flex gap-2 md:gap-4 pb-2 mx-[3%]">
          <a href="">
            <img src={inst} alt="Lodinge.." className="h-[32px] w-[32px] " />
          </a>
          <a href="">
            <img
              src={mi}
              alt="Lodinge.."
              className="h-[34px] w-[34px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={mx}
              alt="Lodinge.."
              className="h-[33px] w-[33px] cursor-pointer"
            />
          </a>

          <a href="">
            <img
              src={link}
              alt="Lodinge.."
              className="h-[38px] w-[38px] mt-[-4px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={amo}
              alt="Lodinge.."
              className="h-[30px] w-[30px] mt-[4px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={Xi}
              alt="Lodinge.."
              className="h-[40px] w-[40px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={flip}
              alt="Lodinge.."
              className="h-[45px] w-[45px] cursor-pointer mt-[-2px]"
            />
          </a>
          <a href="">
            <img
              src={Sh}
              alt="Lodinge.."
              className="h-[35px] w-[35px] cursor-pointer mt-[-2px]"
            />
          </a>
        </div>
        <hr className="bg-black h-[1px] mx-[3%]" />
        <div className="flex gap-2 pt-2 mx-[3%]">
          <a href="">
            <img src={you} alt="Lodinge.." className="h-[40px] w-[50px]" />
          </a>

          <a href="">
            <img
              src={big}
              alt="Lodinge.."
              className="h-[35px] w-[35px] cursor-pointer"
            />
          </a>

          <a href="">
            <img
              src={im}
              alt="Lodinge.."
              className="h-[40px] w-[50px] cursor-pointer "
            />
          </a>
          <a href="">
            <img
              src={swi}
              alt="Lodinge.."
              className="h-[40px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={zo}
              alt="Lodinge.."
              className="h-[40px] w-[50px] cursor-pointer "
            />
          </a>
          <a href="">
            <img
              src={fac}
              alt="Lodinge.."
              className="h-[40px] w-[40px] cursor-pointer "
            />
          </a>
        </div>
      </div>
      <div className="items-center mt-[-5px] lg:mt-[15px] pb-[2%]  mx-[20%]  hidden md:block  pt-4 px-8 rounded-full">
        <ul className="flex gap-[10px] lg:gap-[15px] px-4">
          <a href="">
            <img
              src={amo}
              className="h-[50px] w-[50px]  cursor-pointer"
              alt="Lodinge.."
            />
          </a>
          <a href="">
            <img
              src={fac}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={you}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={inst}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={flip}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={big}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer "
            />
          </a>
          <a href="">
            <img
              src={im}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer "
            />
          </a>
          <a href="">
            <img
              src={link}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={Sh}
              alt="Lodinge.."
              className="h-[50px] w-[50px]  cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={Xi}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={swi}
              alt="Lodinge.."
              className="h-[50px] w-[50px]  cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={zo}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={mi}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
          <a href="">
            <img
              src={mx}
              alt="Lodinge.."
              className="h-[50px] w-[50px] cursor-pointer"
            />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default IntroCard;
