import React, { useState } from 'react';
import '../App.css';
import voteImage from '../assets/vote10 1.png';
import candidate1 from '../assets/candidate1.png';
import candidate2 from '../assets/Frame 13 (2).png';
import candidate3 from '../assets/Frame 13 (1).png';
import candidate4 from '../assets/Frame 12 (1).png';
import candidate5 from '../assets/Frame 11.png';
import candidate6 from '../assets/Frame 11 (1).png';

const candidates = [ 
  { name: "John Doe", course: "Computer Science", button: "Vote for John", image: candidate1 },
  { name: "Betty Njeri", course: "Political Science", button: "Vote for Betty", image: candidate2 },
  { name: "Ali Mwangi", course: "Engineering", button: "Vote for Ali", image: candidate3 },
  { name: "Faith Kamau", course: "Law", button: "Vote for Faith", image: candidate4},
  { name: "Michael Otieno", course: "Economics", button: "Vote for Michael", image: candidate5 },
  { name: "Zainab Yusuf", course: "Public Administration", button: "Vote for Zainab", image: candidate6 },
];

const Candidate = () => {
  const [votedIndex, setVotedIndex] = useState(null);       // final voted candidate
  const [showPopup, setShowPopup] = useState(false);        // controls popup visibility
  const [selectedIndex, setSelectedIndex] = useState(null); // temporary selection
  const handleVoteClick = (index) => {
    setSelectedIndex(index); // just select, don't vote yet
    setShowPopup(true);
  };

  const handleSubmit = () => {
    setVotedIndex(selectedIndex);
    setShowPopup(false);
    setSelectedIndex(null);
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelectedIndex(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#AACFCC] px-4 py-8 flex flex-col items-center">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#123832] mb-6 drop-shadow-lg">
      Elections for Congress 2025
    </h1>

    <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12 px-4 py-6 max-w-4xl w-full">
      <div className="text-2xl text-center md:text-left">
        <p className="text-[#0E3D76] font-acme font-bold mb-2">
          Your vote is your voice- <br />
          <span className="text-black">
            "let it be heard, let it be honest, <br />let it count"
          </span>
        </p>
        <p className="text-black font-mono text-lg sm:text-xl">
          Status: <span className="text-[#147061]">Voting on Going</span>
        </p>
        <p className="font-mono text-black">Time left to vote</p>
        <p className="font-mono text-[#147061]">00:00:00</p>
      </div>
      <div className="mt-4 md:mt-0">
        <img src={voteImage} alt="" className="w-74 h-74 sm:w-80 sm:h-80 object-contain" />
      </div>
   </div>
  </div>


      {/* Candidates */}
      <div>
        <div className='flex flex-col items-center mt-6'>
          <h1 className='text-2xl font-bold text-[#288882] font-inconsolata'>Faculty of Science</h1>
          <p className='text-2xl font-semi-bold text-black font-inconsolata'>Vote for your favourite candidate.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 py-6 max-w-4xl mx-auto">
          {candidates.map((candidate, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center pb-4">
              <img src={candidate.image} alt={candidate.name} className="object-cover rounded-lg mb-2" />
              <h2 className="text-xl font-bold text-[#123832] font-inconsolata">{candidate.name}</h2>
              <p className="text-gray-600 mb-2 font-inconsolata">{candidate.course}</p>
              <button
               onClick={() => handleVoteClick(index)}
                disabled={votedIndex === index}
                className={`px-8 py-2 rounded-lg transition ${
                  votedIndex === index
                    ? 'bg-[#0E3D76] text-white cursor-not-allowed'
                    : 'bg-[#288882] text-white hover:bg-[#147061]'
                }`}
              >
                {votedIndex === index ? 'Voted' : candidate.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup placeholder */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full  bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
           <p className='text-black font-inconsolata font-bold'>Are you sure you want too submit your vote?</p>
           <p className='text-black font-inconsolata font-regular'>Once submitted, this action cannot be undone. Your vote will be  <br />securely recorded and permanently stored. <br />
           <span className='text-[#0E3D76] font-bold font-inconsolata'>Please review your choices carefully before proceeding</span>
           </p>
           <div className='flex flex-row gap-12 mt-4 justify-center'>
            <button className='bg-[#91CC67] px-10 py-2 text-white font-bold font-inconsolata rounded-lg' onClick={handleSubmit}>submit</button>
            <button  className='bg-red-500 px-10 py-2 text-white font-bold font-inconsolata rounded-lg'  onClick={handleCancel}>cancel</button>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidate;
