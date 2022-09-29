import React from "react";
import Image from "next/image";

const live = () => {
  return (
    <div className="text-white font-regular text-2xl py-[5rem] h-full flex flex-col items-center justify-center ">
      <div className="mt-10 h-full flex flex-row gap-5 justify-center ">
        <div>
          <Image
            src="https://rsmcnewdelhi.imd.gov.in/images/satelliteImage/sector-ir.jpg"
            width="630"
            height="709"
          />
        </div>
        <div className="w-1/2 p-5">
          <div className="flex flex-col justify-start">
            <h1 className="text-slate-300">
              <ul>
                <li className="list-disc ">
                  This Image is scraped from the IMD's website and shows the
                  current satellite image of the India using the INSAT-3DR
                  Imagery. The Image gets updated every 30 minutes.
                </li>
                <li className="list-disc mt-5 ">
                  We are able to predict the intensity of any exisiting cyclones
                  in realtime in the dynamic image across India.
                </li>
                <li className="list-disc mt-5">
                  This feature can be useful to detect any incoming or existing
                  cyclones using the image provided by the INSAT-3DR satellite
                  in all parts of India.
                </li>
                <li className="list-disc mt-5">
                  Currently the Indian Meteorological Department uses this
                  dynamic live imagery for cyclone, rainfall, storm and wind
                  speed predictions on an hourly basis.
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default live;
