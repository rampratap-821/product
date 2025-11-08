import React from "react";
import pala from "../assets/Icons/images2.jpeg";

const Video = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 mx-auto w-[97%] gap-4  py-6  ">
      
      <div className="">
        <video
          className="w-full sm:h-[300px] h-[150px]  sm:rounded-2xl rounded-2xl object-cover  px-2"
          src="https://v.ftcdn.net/17/26/71/66/700_F_1726716641_1zBZqfuBgeJLpxM9jSQzlBLnFKw3cayi_ST.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className=" rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1624613533305-28d421d70875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="Cosmetic"
          className="w-full sm:h-[300px] h-[150px]  sm:rounded-2xl rounded-2xl object-cover sm:py-0 px-2"
        />
      </div>
    </div>
  );
};

export default Video;
