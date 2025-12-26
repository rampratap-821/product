import React from "react";
import shoping from "../assets/Images/shopping.jpg"

const AboutTitle = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-pink-300">

      {/* Background Image (UPDATED) */}
      <img
        src={shoping}
        alt="Luxury Cosmetic Background"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-slowMove"
      />

      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-pink-300/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center gap-6">

        <span className="px-5 py-1 text-sm tracking-widest border border-white text-white rounded-full bg-white/10 backdrop-blur">
          ABOUT US
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Beauty That <br />
          <span className="text-white/90">Moves With You</span>
        </h1>

        <p className="text-white/90 max-w-2xl">
          We craft premium cosmetic products with elegance, care and innovation —
          inspired by modern beauty and timeless confidence.
        </p>

        <button className="px-9 py-3 rounded-full bg-black  transition font-semibold text-white shadow-xl">
          Our Story
        </button>

      </div>

      {/* Slow Motion Animation */}
      <style>
        {`
          @keyframes slowMove {
            0% { transform: scale(1.1) translateY(0); }
            50% { transform: scale(1.15) translateY(-10px); }
            100% { transform: scale(1.1) translateY(0); }
          }
          .animate-slowMove {
            animation: slowMove 14s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
};

export default AboutTitle;
