"use client";

import React, { useState } from "react";



const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 z-[20] mt-[65px]">
      <div className="flex flex-col justify-center text-center">
        <div>
          <img
            src="../public/assets/me.png"
            height={400}
            width={600}
            alt="קאפקייק"
          />
        </div>

        <p className="font-medium tracking-tighter max-w-[600px] animate-bounce tracking-tighter text-3xl">{" "}
          <span className="font-medium tracking-tighter text-yellow-800">קאפקייק. </span>
          <span className="font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-700">עוגות בליגה ששווה טעימה</span>
        </p><br />

        <div className="text-md flex justify-center">

        </div>
      </div>
    </div>
  );
};

export default Banner;
