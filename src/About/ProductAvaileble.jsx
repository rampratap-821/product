import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../assets/Images/image.png";
import image1 from "../assets/Images/beautiful.jpg";
import image2 from "../assets/Images/top.jpg";
import image3 from "../assets/Images/pala.jpg";

export default function ServiceHero() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [girlIndex, setGirlIndex] = useState(0);

  const slides = [
    {
      image: image3,
      title: "Beauty",
      subtitle: "That Defines You",
      tagline: "Luxury Makeup • Skincare • Timeless Glow",
      tags: ["Dermatology Tested", "Luxury Formula", "Long Lasting Glow"],
      cardBg: "bg-pink-50"
    },
    {
      image: image2,
      title: "Glow",
      subtitle: "Beyond Expectations",
      tagline: "Pure Radiance • Skin Love • Confidence",
      tags: ["Skin Friendly", "Natural Finish", "All Day Fresh"],
      cardBg: "bg-pink-50"
    },
    {
      image: image1,
      title: "Elegance",
      subtitle: "In Every Touch",
      tagline: "Premium Care • Soft Glam • Luxury Feel",
      tags: ["Premium Quality", "Smooth Texture", "Elegant Look"],
      cardBg: "bg-pink-50"
    },
    {
      image,
      title: "Luxury",
      subtitle: "You Can Feel",
      tagline: "High End Beauty • Bold & Beautiful",
      tags: ["Luxury Brand", "Pro Approved", "Silky Finish"],
      cardBg: "bg-pink-50"
    },
  ];

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGirlIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = slides[girlIndex];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={current.image}
          alt="Cosmetics background"
          className="h-full w-full object-cover transition-all duration-700 opacity-60"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className={`${current.cardBg} p-8 rounded-xl shadow-lg`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-900">
                {current.title}
              </span>
              <span className="block text-gray-800 mt-2">
                {current.subtitle}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              {current.tagline}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 justify-start mb-6">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white text-gray-800 text-sm rounded-full border border-pink-200 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-800 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] sm:h-[350px] w-[250px] sm:w-[280px] overflow-hidden rounded-lg border-4 border-pink-100 bg-white shadow-md">
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setGirlIndex(idx)}
            className={`w-2 h-2 rounded-full ${
              idx === girlIndex ? "bg-pink-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}