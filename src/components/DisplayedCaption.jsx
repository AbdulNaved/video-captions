import React from "react";

const DisplayedCaption = ({ displayedCaption }) =>
  displayedCaption && (
    <div className=" text-red-600 flex justify-center items-center bg-gray-400 mb-20 bg-green-200 ">
      {displayedCaption}
    </div>
  );

export default DisplayedCaption;
