import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import prod from "./assites/Prod.jpg"; // Correct the path if needed
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import AppLayout from "./AppLayou"; // Correct the path if needed
import productMock from "../components/MockData/ProductMock"; // Correct the path if needed

const ProductCard = () => {
  return (
    <div className="w-full bg-[#A5A8C1] pb-14" id="product">
      <AppLayout>
        <h2 className="font-bold text-[35px] pb-10 text-center   sm:pt-[40px] pt-[15px] lg:pt-[50px] text-[#326C77]">
          Products
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
          {productMock.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] bg-[#FFF] lg:w-[280px] rounded-md border shadow-xl gap-2 mx-auto">
                <Link to="/productpage">
                  <img
                    src={prod}
                    alt="Product"
                    className="h-48 w-full sm:w-[100%] lg:w-[100%] p-[5px] rounded-xl object-cover"
                  />
                </Link>
                <div className="py-4 pb-10 px-2">
                  <h1 className="text-lg font-bold cursor-pointer text-[20px] text-black self-start mx-auto">
                    <Link to="/productpage">{item.title}</Link>
                  </h1>
                  <p className="mt-3 text-sm text-[#010101] sm:text-[14px] lg:text-[20px] font-light mx-auto leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AppLayout>
    </div>
  );
};

export default ProductCard;
