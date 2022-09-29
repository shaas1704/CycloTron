import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="py-[5rem]">
      <div className="flex flex-col text-white items-center h-full">
        <h1 className="text-4xl font-bold underline decoration-red-400">
          How did we build our Project ?
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
                Xception
              </span>
              :- The Xception model is a 71-layer deep CNN, inspired by the
              Inception model from Google, and it is based on an extreme
              interpretation of the Inception model. Its architecture is stacked
              with depthwise separable convolutional layers. The pre-trained
              version of the model is trained using millions of images from the
              Imagenet
            </p>
          </li>
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-300">
                ResNet50{" "}
              </span>
              :- ResNet-50 is a convolutional neural network that is 50 layers
              deep. ResNet, short for Residual Networks is a classic neural
              network used as a backbone for many computer vision tasks.
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
              :- Next.js is a React framework that allows you to build
              supercharged, SEO-friendly, and extremely user-facing static
              websites
            </p>
          </li>
          <li className="list-disc ">
            <p>
              <span className="text-xl font-semibold underline decoration-orange-300">
                Tailwind CSS
              </span>
              :- Tailwind CSS is self-described as a utility first CSS framework
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
                  Here we are importing the necessary packages into our google
                  colab environment.
                  <ul className="list-disc ml-7 text-slate-300">
                    <li className="list disc">Numpy</li>
                    <li className="list disc">Pandas</li>
                    <li className="list disc">OpenCV 2</li>
                    <li className="list disc">Pandas</li>
                    <li className="list disc">Seaborn</li>
                    <li className="list disc">Matplotlib</li>
                  </ul>
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
                  Here we load the dataset from Google Drive into our COLAB
                  environment using the prebuilt methods.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full border-2 border-grey rounded-xl bg-[#e1e1e177] p-5">
              <h1 className="text-2xl mb-10  font-bold text-slate-800 ">
                This is an example of the Brightness Temperature IR images
                received from the INSAT-3D Satelite
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
                  Here we use tensorflow.keras to train our CNN model and build
                  the layers for training.
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
                  This is a splitup of the IR image that shows the Contour and
                  the Color map showcasing the depth , various regions and
                  characterisitic features of the image
                </p>
              </div>
            </div>
            <div className="flex mt-5 flex-col justify-center items-center h-full border-2 border-grey rounded-xl bg-[#e1e1e177] p-5">
              <h1 className="text-2xl mb-10  font-bold text-slate-800 ">
                This is an example showcasing the splitup of the IR Images of
                Cyclones Titli and Luban dividing them into RAW, Brightness
                Temperature IR and Depth
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
