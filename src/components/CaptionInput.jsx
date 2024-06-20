import React from "react";

const CaptionInput = ({
  currentCaption,
  setCurrentCaption,
  currentTime,
  setCurrentTime,
  addCaption,
}) => (
  <div className="mt-4 text-black-800 ">
    <input
      type="text"
      placeholder="Enter caption"
      value={currentCaption}
      onChange={(e) => setCurrentCaption(e.target.value)}
      className="border p-2 w-full mb-2"
    />
    <input
      type="text"
      placeholder="Enter timestamp (in seconds)"
      value={currentTime}
      onChange={(e) => setCurrentTime(e.target.value)}
      className="border p-2 w-full mb-2 flex justify-center items-center text-black-400 "
    />
    <div className="flex justify-center items-center ">
      <button
        onClick={addCaption}
        className="bg-blue-500 hover:bg-red-300  text-black p-2 px-3 py-2 rounded-xl  "
      >
        Add Caption
      </button>
    </div>
  </div>
);

export default CaptionInput;
