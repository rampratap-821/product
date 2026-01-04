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
      className="w-full py-10 relative overflow-hidden "
    >
      {/* Soft Pink Glow */}
      <div className="absolute inset-0"></div>

      <div className="relative text-center max-w-4xl mx-auto">

        {/* Icon */}
      

        {/* Heading with Whisper Effect */}
        <h1
          className={`relative text-4xl sm:text-4xl font-extrabold
         text-pink-700
          transition-all duration-700 ease-out delay-150
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          WHY CHOOSE US
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 text-xl sm:text-2xl text-black
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
