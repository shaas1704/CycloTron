import React from "react";

const predection = () => {
  return (
    <div className="text-white py-[5rem] h-full flex flex-col items-center justify-center ">
      <div>
        <iframe
          className="w-[99vw] h-screen overflow-hidden"
          src="http://localhost:8501/"
          title="predection"
          frameborder="0"
        ></iframe>

      </div>
    </div>
  );
};

export default predection;
