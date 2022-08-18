import React from "react";
import Tri from "../components/Tri";

const index = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 h-[100vh] bg-black ">
        <div className="col-span-2 ">
          <Tri />
        </div>
        <div className="text-white text-4xl drop-shadow-lg shadow-white h-full flex justify-center items-center text-center border-2 border-white ">
          Meow
        </div>
      </div>
      <div className="h-[100vh] text-white text-4xl">THIS IS SOME CONTENT</div>
    </>
  );
};

export default index;
