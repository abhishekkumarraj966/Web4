import React from "react";
// import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import AppLayout from "./AppLayou";
const sofasData = [
  {
    imageUrl:
      "https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl:
      "	https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-1-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl:
      "https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-2-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl:
      "https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-3-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl:
      "https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-4-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl:
      "	https://spinthelead.com/wp-content/uploads/2023/09/Untitled-design-5-150x150.png",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
];

const Service = () => {
  return (
    <div className=" w-full bg-[#A5A8C1] pb-14" id="service">
      <AppLayout>
        <h2 className="font-bold text-[35px] pb-10 text-center  sm:pt-[40px] pt-[15px] lg:pt-[50px] text-[#72909E] ">
          Service
        </h2>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          navigation
          className="mySwiper"
        >
          <div className="flex gap-2">
            {sofasData.map((sofa, index) => (
              <SwiperSlide key={index}>
                <div className="w-[300px] bg-white lg:w-[280px] rounded-md border shadow-xl gap-2  mx-auto">
                  <Link to="/productpage">
                    <img
                      src={sofa.imageUrl}
                      alt="Laptop"
                      className="h-48 w-full sm:w-[100%] mx-auto lg:w-[70%] p-[5px] rounded-xl object-cover  "
                    />
                  </Link>
                  <div className="py-4 pb-10 px-2">
                    <h1 className="text-lg font-bold tracking-0.5 cursor-pointer   text-[20px] text-black self-start  mx-auto">
                      <Link to="/productpage">{sofa.title}</Link>
                    </h1>
                    <p className="mt-3 text-sm text-[#000] text-[5px] sm:text-[14px] lg:text-[20px] font-light   mx-auto tracking-0.5 leading-6">
                      {sofa.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </AppLayout>
    </div>
  );
};
export default Service;
