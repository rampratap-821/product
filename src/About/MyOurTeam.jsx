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
      className="w-full py-24 relative overflow-hidden bg-white"
    >
      {/* Soft Pink Glow */}
      <div className="absolute inset-0 bg-pink-500/10 blur-3xl"></div>

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
            <FaUsers className="text-6xl text-black animate-pulse drop-shadow-[0_0_12px_rgba(255,143,163,0.6)]" />
          </div>
        </div>

        {/* Heading with Whisper Effect */}
        <h1
          className="relative text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1]
          bg-clip-text text-transparent tracking-wider
          animate-whisper"
        >
          MY OUR TEAM
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-700">
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
