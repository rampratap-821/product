import React from "react";
import pala from "../assets/Icons/images2.jpeg";

const Video = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 mx-auto w-[97%] gap-4 bg-blue-50   ">
      
      <div className="">
        <video
          className="w-full sm:h-[475px] h-[300px]  sm:rounded-2xl rounded-2xl object-cover  px-2"
          src="https://v.ftcdn.net/17/26/71/66/700_F_1726716641_1zBZqfuBgeJLpxM9jSQzlBLnFKw3cayi_ST.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className=" rounded-2xl">
        <img
          src={pala}
          alt="Cosmetic"
          className="w-full sm:h-[475px] h-[300px]  sm:rounded-2xl rounded-2xl object-cover sm:py-0 px-2"
        />
      </div>
    </div>
  );
};

export default Video;
