import React from "react";
import Tri from "../components/Tri";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 h-[100vh] bg-black ">
        <div className="col-span-2 "> <Tri />  </div>
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
      <div className="h-[100vh] text-white ">
        <section className="grid md:grid-cols-2 h-[70vh] ">
          <div className="flex justify-center items-center">
            <div className=" p-10 g-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-35 max-w-[39rem] rounded-xl h-[23rem] bg-[#e1e1e177]   ">
              <div className="flex flex-col  items-center felx-col gap-5">
                <p className="font-bold p text-4xl text-white">
                  But how do we actually do it ??
                </p>
                <p className="font-regular px-3 text-xl text-white">
                  We have built a robust deep learning model which can detech
                  and identify the intensity of cyclones in an area accurately
                  with the help of INSAT-3DR imagery from the INSAT satelite
                </p>
              </div>
              <button className="px-5 py-2 ml-2 mt-5 rounded-full border-4 hover:border-[#036ac9] border-[#00E9FC] font-semibold">
                <Link href="/about">Explore &#8594;</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className="rounded-xl"
              height="300"
              width="350"
              src="/data-center.gif"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
