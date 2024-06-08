import React, { useState } from "react";
import AppLayout from "./AppLayou";

function Form() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('')
  const [msg,setMsg]=useState('')
  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(name,email,mobile,msg);
   //Make your api call here
  }

  const handleClear=()=>{
    setName('');
    setEmail('');
    setMobile("");
  }
  return (
    <section id="inquryform">
      <div className="bg-[#353956] text-[#72909E] h-auto mb-5">
        <div className="text-center font-semibold leading-5 mx-auto pt-10">
          <div className="italic font-medium text-xl sm:text-3xl lg:text-5xl">
            Enquiry 
          </div>
          <hr className="w-16 sm:w-32 mx-auto h-1 lg:h-2 bg-[#ffffff] mt-3" />
        </div>

        <div className="mt-14">
          <form>
            <AppLayout>
              <div className="mb-4 bg-white w-[95%] mx-auto h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="name"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Name:<span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Name"
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="Email"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Email:<span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Email."
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="MobilNo"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Mobile:
                    <span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Enter your Mobile No."
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="mb-4 w-[95%] mx-auto bg-white h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                <div className="py-2 ">
                  <label
                    htmlFor="MobilNo"
                    className="block  font-semibold text-black  mx-10  lg:text-2xl text-lg"
                  >
                    Message:
                    <span className="text-red-500 text-2xl">&nbsp;*</span>
                  </label>
                  <input
                    type="tel"
                    id="name"
                    name="name"
                    value={mobile}
                    onChange={(e)=>setMsg(e.target.value)}
                    className="w-[#400px]  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 text-black"
                    placeholder="Some Text"
                    required
                  />
                  <hr className="lg:w-[400px] w-[#200px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start lg:ml-[27px] mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                
                className="mr-2 w-[20px] mb-2 p-[5px] h-[20px] "
              />
              <label htmlFor="terms" className="text-[20px] mb-[8px] text-white lg:text-[30px] lg:py-6  sm:py-4 sm:mx-4">
                I agree to the <a href="/terms" className="underline lg:w-[30px] lg:h-[30px]">terms and conditions</a>.
              </label>
            </div>
            </AppLayout>
            <div className=" bg-white">
              <AppLayout>
                <div className="grid grid-cols-2 gap-2 sm:gap-1">
                  <div className=" p-4 rounded-md">
                    <div className="sm:ml-10">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-[#354956] text-white px-4 py-2 rounded-md hover:bg-[#1e2a31] focus:outline-none focus:shadow-outline-blue w-28 h-10"
                        //   onClick={handleButtonClick} // Replace with your click handler function
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className=" p-4 rounded-md justify-items-end lg:ml-72 sm:ml-10">
                    <div className=" lg:mx-20 sm:mx-5">
                      <button
                        type="button"
                        onClick={handleClear}
                        className="  font-bold  px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:shadow-outline-blue"
                        //   onClick={handleButtonClick} // Replace with your click handler function
                      >
                        Clear form
                      </button>
                    </div>
                  </div>
                </div>
              </AppLayout>
            </div>
          </form>
        </div>
      </div>

     
    </section>
  );
}

export default Form;
