"use client";

import React, { useState } from "react";



const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 z-[20] mt-[65px]">
      <style>
        {`
          @keyframes custom-ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .animate-custom-ping {
            animation: custom-ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>

      <div className="flex flex-col justify-center text-center">
        <div>
          <img
            src="../assets/me.png"
            height={400}
            width={600}
            alt="קאפקייק"
          />
        </div>

        <p className="font-medium tracking-tighter max-w-[600px] animate-pulse tracking-tighter text-3xl">{" "}
          <span className="font-medium   tracking-tighter text-yellow-800">קאפקייק  </span>
          <span className="font-medium  tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-700">עוגות בליגה ששווה טעימה</span>
        </p>
        <br />

        <div className="text-md flex justify-center">

        </div>
      </div>
    </div>
  );
};


export default Banner;
