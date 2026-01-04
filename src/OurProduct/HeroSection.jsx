import React from "react";
import bgImage from "../assets/Images/bg.jpg";
import pala from "../assets/Icons/ram.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:h-[80vh] overflow-hidden bg-pink-300">

      {/* Background Image */}
      <img
        src={bgImage}
        alt="Cosmetic Background"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-slowMove"
      />

      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-pink-300/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center py-10 md:py-0">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT CONTENT – OUR PRODUCT */}
          <div className="text-center lg:text-left px-2">
            <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-1 text-xs sm:text-sm tracking-widest border border-black text-black rounded-full bg-black/10 backdrop-blur">
              OUR PRODUCT
            </span>

            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
              Natural Care <br />
              <span className="text-black/90">For Every Skin</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-black/80 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
              Our cosmetic products are made with carefully selected natural
              ingredients that nourish, protect and enhance your skin's
              natural glow — gentle, effective and luxurious.
            </p>
          </div>

          {/* RIGHT REAL IMAGE - White border removed */}
          <div className="relative flex justify-center lg:justify-end px-2">
            <div className="relative  overflow-hidden">
              <img
                src={pala}
                alt="Real Cosmetic Model"
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:w-[420px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes slowMove {
            0% { transform: scale(1.1) translateY(0); }
            50% { transform: scale(1.15) translateY(-12px); }
            100% { transform: scale(1.1) translateY(0); }
          }
          .animate-slowMove {
            animation: slowMove 16s ease-in-out infinite;
          }
          
          /* Improve touch interaction on mobile */
          @media (max-width: 640px) {
            .animate-slowMove {
              animation: slowMove 20s ease-in-out infinite;
            }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;