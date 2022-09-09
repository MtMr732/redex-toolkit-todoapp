import React from "react";

const sample: React.FC = () => {
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          console.log("button");
        }}
      ></button>
    </div>
  );
};

export default sample;
