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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full py-24 relative overflow-hidden "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r
        from-purple-500/10 via-pink-500/10 to-cyan-500/10
        blur-3xl"></div>

      <div
        className={`relative text-center max-w-4xl mx-auto px-4
        transform transition-all duration-[1000ms] ease-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-full border border-purple-400/40
            shadow-[0_0_35px_#a855f7]">
            <FaUsers className="text-6xl text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
          text-transparent bg-clip-text tracking-wider">
          MY OUR TEAM
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-300">
          Passionate individuals dedicated to bringing you
          the best grocery experience
        </p>

        {/* Divider */}
        <div className="mt-10 flex justify-center">
          <span className="w-40 h-[2px]
            bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyOurTeam;
