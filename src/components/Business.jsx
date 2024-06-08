import React from "react";
import AppLayout from "./AppLayou";


const Business = () => {
  return (
    <div className=" mt-0.5 sm:mt-1 bg-[#FFFFFF] shadow-md pb-1">
      <AppLayout>
        <h2 className=" text-[40px] font-bold text-[#326C77] text-center mb-3">
          Business Hours
        </h2>

        <div className="w-[295px] h-[276px] lg:w-[672px] lg:min-h-[522px] mx-auto rounded-[30px] mt-[20px] bg-[#A5A8C1] shadowbox lg:mt-[40px] my-10">
          <div className="w-[241px] lg:w-[85%] text-[#326C77] ml-3 lg:ml-7 h-[100%] py-5 lg:py-9 lg:text-[32px]">
            <div className="flex flex-col py-[4px] lg:py-[12px] ">
              <div className="flex justify-between ">
                <div>Monday</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]  bg-[#ffff] h-[1px] border-none" />
            </div>

            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>TUESDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>WEDNESDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>THURSDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>FRIDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>SATURDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
            <div className="flex flex-col py-[4px]">
              <div className="flex justify-between">
                <div>SUNDAY</div>
                <div>9:30AM - 9PM </div>
              </div>
              <hr className="w-[100%]   bg-[#ffff] h-[1px] border-none" />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Business;
