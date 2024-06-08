import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BlogexMock from "./MockData/BlogexMock";
import AppLayout from "./AppLayou";

const Blogs = () => {
  return (
    <div className="" id="blogs">
      <AppLayout>
        <div className="sm:my-10 my-5 ">
          <h2 className=" text-[40px] font-bold text-[#72909E]  text-center mb-5">
            Blogs
          </h2>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="flex  px-2 mx-2 sm:mx-[20px]">
              {BlogexMock.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[280px] sm:w-[300px]  shadow-xs h-full lg:gap-1 mx-auto bg-[#72909E]  rounded-[40px] flex flex-col items-center p-6 mb-4">
                    <div className="">
                      <Link to="/blogespag">
                        <img
                          src={item.img}
                          alt={item.title}
                          className=" h-[100%] w-[100%] rounded-tr-[40px] rounded-tl-[40px] object-cover"
                        />
                      </Link>
                    </div>
                    <Link to="/blogespag">
                      <h2 className=" px-4 mb-2 text-[#FFF] cursor-pointer">
                        {item.text}
                      </h2>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </AppLayout>
    </div>
  );
};

export default Blogs;
