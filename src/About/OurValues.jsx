import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaShieldAlt, FaHeart, FaRocket } from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf />,
    title: "Natural",
    desc: "Pure, plant-based & skin-loving ingredients",
    color: "green",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparency",
    desc: "No parabens, no secrets, only honesty",
    color: "cyan",
  },
  {
    icon: <FaHeart />,
    title: "Care",
    desc: "Made with love for skin & planet",
    color: "pink",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    desc: "Future-ready beauty with science",
    color: "purple",
  },
];

const OurValues = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [showHeading, setShowHeading] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setShowHeading(true);
            } else {
              setVisibleCards((prev) => [
                ...new Set([...prev, entry.target.dataset.index]),
              ]);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    headingRef.current && observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-24 px-4 relative overflow-hidden ">

      {/* Glow BG */}
      <div className="absolute inset-0      "></div>

      {/* Heading */}
      <div
        ref={headingRef}
        className={`relative text-center mb-16 transition-all duration-700 ease-out
        ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
      >
        <h1
          className="text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          text-transparent bg-clip-text tracking-wider"
        >
          OUR VALUES
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300">
          The principles that guide everything we do
        </p>
      </div>

      {/* Value Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {values.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`group bg-pink-600
            border border-${item.color}-500/40
            rounded-2xl p-8 text-center
            transition-all duration-700 ease-out
            ${
              visibleCards.includes(String(i))
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
            hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]
            `}
          >
            {/* ICON CENTER */}
            <div className="flex items-center justify-center h-20 mb-4">
              <div
                className={`text-5xl text-${item.color}-400
                group-hover:scale-125 transition duration-700`}
              >
                {item.icon}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurValues;
