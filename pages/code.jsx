import React from "react";

const code = () => {
  return (
    <div className="text-white py-[5rem] h-full flex flex-col items-center justify-center ">
      <div>
        <iframe
          className=" w-[99vw] h-screen overflow-hidden"
          src="https://colab.research.google.com/drive/1uOGAnjtLOwBpWh1jYWQxSWu_1XIN7M90?usp=sharing"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default code;
