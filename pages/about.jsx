import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="py-[5rem]">
      <div className="flex flex-col text-white items-center h-full">
        <h1 className="text-4xl font-bold underline decoration-red-400">
          How did we build our Project
        </h1>
      </div>
      <div className="text-white mx-10 mt-10">
        <h1 className="underline text-3xl font-bold decoration-blue-200">
          Tech stack used:-
        </h1>
        <h1 className="underline text-2xl mt-3 ml-5 font-bold decoration-blue-400">
          CNN MODEL
        </h1>
        <ul className="text-lg ml-8 mt-5 ">
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-200">
                Xception{" "}
              </span>
              :- Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, voluptate.
            </p>
          </li>
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-300">
                ResNet50{" "}
              </span>
              :- Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, voluptate.
            </p>
          </li>
        </ul>
        <h1 className="underline text-2xl mt-3 ml-5 font-bold decoration-blue-400">
          Frontend/Backend
        </h1>
        <ul className="text-lg ml-8 mt-5 ">
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-200">
                Next JS
              </span>
              :- Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, voluptate.
            </p>
          </li>
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-300">
                Tailwind CSS
              </span>
              :- Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, voluptate.
            </p>
          </li>
        </ul>
      </div>
      <div className=" mt-10 h-full flex justify-center mx-5 flex-col items-center text-white">
        <h1 className="text-3xl font-semibold underline decoration-red-300 ">
          Stages of Working
        </h1>
        <ul>
          <li>
            <div className="flex mt-5 flex-row justify-evenly items-center p-5 ">
              <div className="w-1/2 items-start">
                <h1 className="font-semibold underline text-2xl decoration-yellow-300">
                  Stage 1
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  esse, porro, laudantium architecto voluptatibus fuga enim qui
                  perspiciatis rerum repellat sunt quaerat commodi quam dolores
                  quae fugit tempora quisquam beatae!
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/snippets/imports.png"
                  width="590"
                  height="290"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="flex mt-5 flex-row justify-evenly items-center p-5 ">
              <div className="w-1/2">
                <Image
                  src="/images/snippets/dataset.png"
                  width="590"
                  height="290"
                />
              </div>
              <div className="w-1/2 items-start">
                <h1 className="font-semibold underline text-2xl decoration-pink-300">
                  Stage 2
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  esse, porro, laudantium architecto voluptatibus fuga enim qui
                  perspiciatis rerum repellat sunt quaerat commodi quam dolores
                  quae fugit tempora quisquam beatae!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full border-2 border-grey rounded-xl bg-[#e1e1e177] p-5">
              <h1 className="text-2xl mb-10  font-bold text-slate-800 ">
                This is an example of the IR images recived from the INSAT-3D
                Satelite
              </h1>
              <Image
                className="bg-black"
                src="/images/snippets/cycloneir.png"
                width="900"
                height="520"
              />
            </div>
          </li>

          <li>
            <div className="flex mt-5 flex-row justify-evenly items-center p-5 ">
              <div className="w-1/2 items-start">
                <h1 className="font-semibold underline text-2xl decoration-yellow-300">
                  Stage 3
                </h1>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  esse, porro, laudantium architecto voluptatibus fuga enim qui
                  perspiciatis rerum repellat sunt quaerat commodi quam dolores
                  quae fugit tempora quisquam beatae!
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/snippets/training.png"
                  width="590"
                  height="290"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-row mt-5 h-full justify-center items-center mx-5 ">
              <div className="w-1/2 rounded-xl ">
                <Image
                  src="/images/snippets/plot.png"
                  width="350"
                  height="300"
                />
                <Image
                  className=""
                  src="/images/snippets/cyclone1.jpeg"
                  width="350"
                  height="300"
                />
              </div>
              <div className="w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  quo porro cumque, consectetur fuga totam earum corporis ipsa
                  itaque? Ducimus.
                </p>
              </div>
            </div>
            <div className="flex mt-5 flex-col justify-center items-center h-full border-2 border-grey rounded-xl bg-[#e1e1e177] p-5">
              <h1 className="text-2xl mb-10  font-bold text-slate-800 ">
                This is an example showcasing the splitup of the IR Images of
                Cyclones Titli and Luban dividing them into RAW, IR , Cardiod
                and Depth
              </h1>
              <Image
                className="bg-black"
                src="/images/snippets/cyclone2.png"
                width="900"
                height="520"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;
