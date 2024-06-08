import React from "react";
import AppLayout from "./AppLayou";


const Feedbackform = () => {
  return (
    <div className=" bg-[#A5A8C1]   pt-[15px] ">
      <AppLayout>
      <h2 className="font-bold text-[30px]  text-center pb-6  text-[#82909E] ">
            Feedback form
          </h2>
        <div className="p-4 mx-auto sm:mx-20 w-[80%] bg-[#353956] rounded-xl ">
         
          <p className="text-white">Name</p>
          <input
            type="text"
            placeholder="Name"
            className=" w-[100%] rounded-md h-8 py-1 px-2 mt-1 bg-white"
          />
          <p className="text-white mt-5">Feedback</p>
          <input
            type="text"
            placeholder="Type your message..."
            className=" w-[100%] bg-white rounded-md h-14 lg:h-24 px-2 mt-1 "
          />
          <br/>
          <button
            type="submit"
            className="bg-[#354956] sm:w-[30%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
          >
            Submit
          </button>
        </div>
      </AppLayout>
    </div>
  );
};

export default Feedbackform;
