import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

import image9 from "../assets/image9.png";



function Residency() {

  return (
    <div className="min-h-screen flex justify-center items-center p-10  ">
      <div className=" bg-white shadow-2xl shadow-gray-600 rounded-2xl flex overflow-hidden  w-[900px]   h-[600px]">
        {/* Left div with images */}
        <div className="w-1/2 hidden md:flex flex-col items-center h-full relative justify-between  bg-white  shadow-gray-500 shadow-2xl rounded-4xl">
          {/* Top image */}
          <div className="w-full flex justify-center">
            <img
              src={image1}
              alt=""
              className="w-[230px] h-auto object-cover rounded-lg pb-2"
            />
          </div>

          {/* Bottom image */}
          <div className="">
            <img
              src={image2}
              alt=""
              className="w-full max-w-[900px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right div with form */}
        <div className="w-1/2 h-full bg-white flex flex-col items-center pt-5 sm:flex  flex-1 pl-2 ">
          <h1 className="text-4xl font-bold text-center text-[#097969] pt-5 pb-2 ">
            Register Today
          </h1>
          <h3 className="text-lg font-medium  text-gray-700 md:pl-12 pb-3 ">
            Decide tomorrow
          </h3>
    

          <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col ">
                <h2 className="text-2xl font-bold text-[#097969] pl-6 pb-4 pt-2 ">
                  Residency Information
                </h2>
                <div className="flex  space-x-5 ml-6 ">
                  <label htmlFor="resident" className="">
                    Resident
                  </label>
                  <input type="radio" name="resident" id="resident"  className="accent-[#097969] border-gray-500 w-10" required/>
                  <label htmlFor="resident" >
                    Non Resident
                  </label>
                  <input type="radio" name="resident" id="resident" className="accent-[#097969] border-gray-500 w-10"required />
                </div>
              </div>

              <div className="flex  flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold text-[#097969] pl-6 pt-2 ">
                  Account setup
                </h2>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="gender">Create Password:</label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="md:w-[250px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700  "required
                  />
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="gender">Confirm Password:</label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="w-[250px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700  "required
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-2xl font-bold text-[#097969] pl-6 pb-2 pt-4 ">
                  Biometric enrollment
                </h2>
                <div className="flex items-center space-x-4 ml-6 mb-2">
                  <label htmlFor="fingerprint">Scan fingerprint:</label>
                  <div className="w-15 h-15 rounded-2xl bg-[#097969] flex items-center justify-center">
                    <img src={image9} alt="" className="w-12 h-12" />
                  </div>
                </div>
                <div className="flex items-center w-full space-x-3 ml-6 mt-2">
                  <label htmlFor="passport" className="" >Upload passport :</label>
                  <input
                    type="file"
                    name="passport"
                    id="passport"
                    className="border-gray-400 focus:outline-none focus:border-gray-700"required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button className=" bg-[#097969] text-white py-2 px-20 rounded  cursor-pointer shadow-md shadow-gray-500">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Residency;
