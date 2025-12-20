import React, { useEffect, useRef, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden bg-white"
    >
      {/* Soft Pink Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-pink-400/10 to-pink-300/10 blur-3xl"></div>

      <div className="relative text-center max-w-4xl mx-auto">

        {/* Icon */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
        >
          <div className="p-6 rounded-full bg-pink-100 shadow-lg">
            <FaShieldAlt className="text-6xl text-black animate-pulse drop-shadow-[0_0_12px_rgba(255,143,163,0.6)]" />
          </div>
        </div>

        {/* Heading with Whisper Effect */}
        <h1
          className={`relative text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1]
          bg-clip-text text-transparent tracking-wider
          animate-whisper
          transition-all duration-700 ease-out delay-150
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          WHY CHOOSE US
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-xl sm:text-2xl text-gray-700
          transition-all duration-700 ease-out delay-300
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          The principles that guide everything we do
        </p>

        {/* Divider */}
        <div
          className={`mt-10 flex justify-center transition-all duration-700 ease-out delay-500
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <span className="w-40 h-[3px] bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 rounded-full"></span>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
