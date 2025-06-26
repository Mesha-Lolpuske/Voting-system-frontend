import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
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
        <div className="w-1/2 h-full bg-white flex flex-col items-center pt-10 sm:flex  flex-1  ">
          <h1 className="text-4xl font-bold text-center text-[#097969] pt-5 pb-2 ">
            Register Today
          </h1>
          <h3 className="text-lg font-medium  text-gray-700 md:pl-12 pb-3 ">
            Decide tomorrow
          </h3>
          <img
            src={image3}
            alt=""
            className="w-20 h-20  absolute  top-[100px] right-[230px]  hidden md:flex"
          />

          <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <div className="flex  flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold text-[#097969] pl-6 pb-2 ">
                  Personal details
                </h2>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="fname">Full name:</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="md:w-[270px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700  "required
                  />
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="lname">Email:</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="md:w-[300px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700 "required
                  />
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="email">Gender:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="md:w-[300px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700 "required
                  />
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="phone number">Phone number</label>
                  <input
                    type="text"
                    name="phone number"
                    id="phone number"
                    className="md:w-[260px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700  "required
                  />
                </div>
              </div>
              <div className="flex  flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold text-[#097969] pl-6 pb-2 pt-4 ">
                  Academic details
                </h2>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="regno">Reg no:</label>
                  <input
                    type="text"
                    name="Regno"
                    id="Regno"
                    className="md:w-[300px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700 "required
                  />
                </div>
                <div className="flex items-center space-x-4 ml-6">
                  <label htmlFor="faculty">Faculty:</label>
                  <input
                    type="text"
                    name="faculty"
                    id="faculty"
                    className="w-[300px] border-b-2 border-gray-400 focus:outline-none focus:border-gray-700  "required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className=" bg-[#097969] text-white py-2 px-20 rounded  cursor-pointer shadow-md shadow-gray-500 "
                onClick={() => navigate("/residency")}
              >
                Next Page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
