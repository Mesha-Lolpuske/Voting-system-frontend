import React from "react";
import image9 from "../assets/image9.png";

export default function Authentication() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-[500px] h-[500px] shadow-2xl rounded-2xl overflow-hidden">
        <div className="h-40 w-full flex flex-col  ">
          <h2 className="text-4xl font-serif  text-center text-[#097969] pt-5 pb-2 ">
            Welcome back!!
          </h2>
          <h1 className="text-2xl font-mono  text-center text-[#123832] pb-2  ">
            This is more than a vote
          </h1>
          <p className="text-md font-mono text-center text-black  pb-2 ">
            It's Your <span className=" text-[#00008B]">Right </span>Your{" "}
            <span className="text-green-500">Power, </span>Your{" "}
            <span className="text-yellow-300"> Responsibility</span>{" "}
          </p>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-xl font-mono text-[#097969] mt-4 text-center  mb-4">
            Do authentication before you progress
          </h2>
          <div className="flex items-center space-x-6 ml-10 ">
            <label htmlFor="fingerprint" className="font-mono text-lg 
            ">
              Scan fingerprint:
            </label>
            <div className="px-10 py-1 rounded-2xl bg-[#097969] flex items-center justify-center">
              <img src={image9} alt="" className="w-12 h-12 " />
            </div>
          </div>
          <div className="flex items-center space-x-6 ml-10 mt-5">
            <label htmlFor="fingerprint" className="font-mono text-lg">
              Scan face for verification:
            </label>
            <div className="px-8 py-3 rounded-xl bg-[#097969] flex items-center justify-center ">
              <p className="text-xl font-mono text-white">Scan</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className=" bg-[#097969] text-white py-2 px-20 rounded  cursor-pointer shadow-md shadow-gray-500 mt-2 font-mono">
              Start Voting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
