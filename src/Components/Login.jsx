import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-white w-[500px] h-[500px] shadow-2xl rounded-2xl overflow-hidden'>
    <div className="h-40 w-full flex flex-col  ">
        <h2 className='text-4xl font-bold  text-center text-[#097969] pt-5 pb-2 '>Welcome back!!</h2>
        <h1 className='text-2xl font-bold  text-center text-[#123832] pb-2  '>This is more than a vote</h1>
        <p className='text-lg font-normal text-center text-black  pb-2 '>It's Your <span className=' text-[#00008B]'>Right </span>Your <span className='text-green-500'>Power, </span>Your <span className='text-yellow-300'> Responsibility</span> </p>
    </div>
    <div className='flex  flex-col items-center justify-center '>
        <h2 className='text-2xl font-bold text-[#097969] mt-4  mb-4'>Enter your details to vote:</h2>
        <div className='flex flex-col '>
            <label htmlFor="regno">Registration number:</label>
            <input type="text" id='regno' name='regno' className='w-70 border-b-2 border-gray-400 focus:outline-none focus:border-black mb-5 '/>
        </div>
        <div className='flex flex-col '>
            <label htmlFor="password">Password:</label>
            <input type="password" id='regno' name='regno' className='w-70 border-b-2 border-gray-400 focus:outline-none focus:border-black  '/>
        </div>
        <div className='flex justify-center mt-6'>
            <button className=' bg-[#097969] text-white py-2 px-20 rounded  cursor-pointer shadow-md shadow-gray-500 mt-4'   onClick={() => navigate("/authentication")}>Confirm</button>
        </div>
    </div>
        </div>
        </div>

  
  )
}

export default Login