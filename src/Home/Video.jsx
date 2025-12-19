// import React from "react";
// import pala from "../assets/Images/3d-rendering-personal-care-products-fondant-pink.jpg";

// const Video = () => {
//   return (
//     <div className="grid sm:grid-cols-2 grid-cols-1 mx-auto w-[97%] gap-4  py-6  ">
      
//       <div className="">
//         <video
//           className="w-full sm:h-[300px] h-[150px]  sm:rounded-2xl rounded-2xl object-cover  px-2"
//           src="https://v.ftcdn.net/17/26/71/66/700_F_1726716641_1zBZqfuBgeJLpxM9jSQzlBLnFKw3cayi_ST.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//       </div>

//       <div className=" rounded-2xl">
//         <img
//           src={pala}
//           alt="Cosmetic"
//           className="w-full sm:h-[300px] h-[150px]  sm:rounded-2xl rounded-2xl object-cover sm:py-0 px-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Video;


import React, { useEffect, useRef, useState } from "react";
import pala from "../assets/Images/3d-rendering-personal-care-products-fondant-pink.jpg";

const Video = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid sm:grid-cols-2 grid-cols-1 mx-auto w-[97%] gap-4 py-10 overflow-hidden"
    >
      {/* VIDEO */}
      <div
        className={`transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}`}
      >
        <video
          className="w-full sm:h-[300px] h-[150px]
          rounded-2xl object-cover px-2"
          src="https://v.ftcdn.net/17/26/71/66/700_F_1726716641_1zBZqfuBgeJLpxM9jSQzlBLnFKw3cayi_ST.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* IMAGE */}
      <div
        className={`transition-all duration-1000 ease-out delay-200
        ${show ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}`}
      >
        <img
          src={pala}
          alt="Cosmetic"
          className="w-full sm:h-[300px] h-[150px]
          rounded-2xl object-cover px-2"
        />
      </div>
    </div>
  );
};

export default Video;

