import React from "react";
import Tri from "../components/Tri";

const index = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 h-[100vh] bg-black ">
        <div className="col-span-2 ">
          <Tri />
        </div>
        <div className=" text-4xl drop-shadow-lg shadow-white h-full flex flex-col justify-center items-center text-center ">
          <p className="text-5xl font-bold text-white  relative   text-start drop-shadow-lg shadow-white">
            SMART INDIA HACKATHON 2022
            <p className="text-5xl font-bold absolute inset-0 blur-xl text-start  text-white">
            SMART INDIA HACKATHON 2022
          </p>
          </p>
          
          <p className="text-4xl mt-5  font-bold text-blue-400  relative   text-start drop-shadow-lg shadow-white">
            TEAM THE SQUAD 69
            <p className="text-4xl font-bold absolute inset-0 blur-xl text-start  text-blue">
            TEAM THE SQUAD 69
          </p>
          </p>
        
        </div>
      </div>
      <div className="h-[100vh] text-white text-4xl">THIS IS SOME CONTENT</div>
    </>
  );
};

export default index;
