import React from "react";
import Satelite from "../components/Satelite";

const insat = () => {
  return (
    <div className="py-[5rem]    grid grid-cols-3">
      <div className="col-span-2 text-white">
        <div className="ml-[5rem] py-5 text-white flex flex-col ">
          <p className="text-4xl font-bold">What is INSAT-3DR ?</p>
          <p className="mt-5 text-xl font-regular font-poppins">
            INSAT-3DR similar to INSAT-3D, is an advanced meteorological
            satellite of India configured with an imaging System and an
            Atmospheric Sounder. The significant improvements incorporated in
            INSAT-3DR are:-
          </p>
          <ul>
            <li className="mt-5 text-lg list-disc ml-10">
              Imaging in Middle Infrared band to provide night time pictures of
              low clouds and fog
            </li>
            <li className="mt-5 text-lg list-disc ml-10">
              Imaging in two Thermal Infrared bands for estimation of Sea
              Surface Temperature (SST) with better accuracy
            </li>
            <li className="mt-5 text-lg list-disc ml-10">
            Higher Spatial Resolution in the Visible and Thermal Infrared bands</li>
          </ul>
          <p className="mt-5 text-xl ">INSAT-3DR has a lift-off mass of 2211 kg, which includes about 1255 kg of propellant. The propellant carried by INSAT-3DR is mainly required to raise the satellite from the Geosynchronous Transfer Orbit (GTO) to its final Geostationary Orbit and to maintain the satellite in its orbital slot during its life. The satellite has a solar array generating 1700 Watts of power</p>
        </div>
        <button className="px-5 ml-[5rem] py-3 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-700 hover:bg-blue-400 ">Know More</button>
      </div>
      <div className=" ">
        <Satelite />
      </div>
    </div>
  );
};

export default insat;
