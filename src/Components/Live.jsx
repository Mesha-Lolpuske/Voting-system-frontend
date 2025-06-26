import React from "react";

const candidates = [
  { name: "Alice", votes: 1000 },
  { name: "David", votes: 500 },
  { name: "Risper", votes: 2500 },
  { name: "Carol", votes: 1700 },
  { name: "Sabrina", votes: 2000 },
  { name: "Lewis", votes: 1000 },
];

function Live() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="bg-[#96DED1] flex  flex-col w-[450px] h-[830px] rounded-2xl mx-auto">
        <h2 className="text-xl font-mono text-center text-[#097969] pt-5 pb-4 ">
          Elections for Congress 2025
        </h2>
        <div className="flex w-[400px] h-[100px]  bg-green-100 flex-col rounded-lg mx-auto p-5">
          <h3 className=" font-mono">
            Election status:
            <span className="text-[#097969] ml-2">In progress</span>
          </h3>
          <h3 className="font-mono">
            Refresh to see current results:
            <span>
              <button className="bg-[#097969]/80 text-white py-1 px-3 rounded  cursor-pointer shadow-md shadow-gray-200 ">
                Refresh
              </button>
            </span>
          </h3>
        </div>
        <div>
          <h2 className="text-center text-xl font-mono text-[#06466e] pt-5 pb-4 ">
            Live results
          </h2>
          {/* Bar chart */}
          <div className="bg-white rounded shadow p-4 mx-6 mt-2">
            {/* Y-axis labels */}
            <div className="relative h-48 flex items-end">
              {/* Y-axis numbers */}
              <div className="flex flex-col justify-between  h-full mr-2 text-xs text-gray-500 font-mono">
                {[3000, 2500, 2000, 1500, 1000, 500, 0].map((v) => (
                  <div key={v} style={{ height: "40px" }}>
                    {v}
                  </div>
                ))}
              </div>
              {/* Bars */}
              <div className="flex-1 flex items-end space-x-6 h-full ">
                {candidates.map((candidate) => {
                  const maxVotes = 3000; // Set to the highest possible or actual max
                  const barHeight = (candidate.votes / maxVotes) * 192; // 192px = h-48
                  return (
                    <div
                      key={candidate.name}
                      className="flex flex-col items-center justify-end"
                    >
                      <div
                        className="bg-[#06466e]  w-8 rounded-t transition-all duration-300"
                        style={{ height: `${barHeight}px` }}
                        title={`${candidate.votes} votes`}
                      ></div>
                      <span className="text-xs font-mono text-gray-700">
                        {candidate.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* X-axis label */}
            <div className="flex justify-center mt-2">
              <span className="text-xs text-gray-700 font-mono">
                Candidates
              </span>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto mt-8 px-6">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="bg-[#097969] text-white px-4 py-2 font-mono text-left rounded-tl-lg">
                    Candidate
                  </th>
                  <th className="bg-[#097969] text-white px-4 py-2 font-mono text-left">
                    Course
                  </th>
                  <th className="bg-[#097969] text-white px-4 py-2 font-mono text-left rounded-tr-lg">
                    Votes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Alice", course: "Computer Science", votes: 1000 },
                  { name: "David", course: "Actual Science", votes: 500 },
                  { name: "Risper", course: "Statistics", votes: 2500 },
                  { name: "Carol", course: "Maths", votes: 1800 },
                  { name: "Sabrina", course: "Comp Science", votes: 987 },
                  { name: "Lewis", course: "Comp Science", votes: 1000 },
                ].map((row) => (
                  <tr key={row.name} className="bg-white">
                    <td className="px-4 py-2 font-mono border-b border-gray-200">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 font-mono border-b border-gray-200">
                      {row.course}
                    </td>
                    <td className="px-4 py-2 font-mono border-b border-gray-200">
                      {row.votes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live;
