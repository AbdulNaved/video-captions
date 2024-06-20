import React from "react";

const CaptionList = ({ captions }) => (
  <div className="mt-4">
    <h2 className="text-xl font-bold mb-2  flex justify-center">Captions</h2>
    <ul>
      {captions.map((caption, index) => (
        <li key={index} className="mb-2 text-yellow-300 flex justify-center">
          <strong>{caption.time}s:</strong> {caption.text}
        </li>
      ))}
    </ul>
  </div>
);

export default CaptionList;
