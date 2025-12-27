import React, { useEffect, useRef, useState } from "react";
import { FaUsers } from "react-icons/fa";

const MyOurTeam = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full py-10 relative overflow-hidden bg-white"
    >
      {/* Soft Pink Glow */}
      <div className="absolute inset-0 "></div>

      <div
        className={`relative text-center max-w-4xl mx-auto px-4
        transform transition-all duration-700 ease-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-full bg-pink-100 shadow-lg">
            <FaUsers className="text-6xl text-black " />
          </div>
        </div>

        {/* Heading with Whisper Effect */}
        <h1
          className="relative text-6xl sm:text-4xl font-bold
         
        "
        >
          MY OUR TEAM
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-black">
          Passionate individuals dedicated to bringing you
          the best grocery experience
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <span className="w-40 h-[3px] bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default MyOurTeam;
