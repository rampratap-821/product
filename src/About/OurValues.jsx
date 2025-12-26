import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaShieldAlt, FaHeart, FaRocket } from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf />,
    title: "Natural",
    desc: "Pure, plant-based & skin-loving ingredients",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparency",
    desc: "No parabens, no secrets, only honesty",
  },
  {
    icon: <FaHeart />,
    title: "Care",
    desc: "Made with love for skin & planet",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    desc: "Future-ready beauty with science",
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
    <div className="w-full py-10 px-4 bg-white">
      {/* HEADING */}
      <div
        ref={headingRef}
        className={`text-center mb-20 transition-all duration-700 ease-out
        ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
      >
       <h1 className="relative text-5xl sm:text-5xl font-extrabold 
bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] 
bg-clip-text text-transparent 
animate-whisper">
  OUR VALUES
</h1>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`
              relative rounded-2xl p-8 text-center
              bg-black
              transition-all duration-500 ease-out
              transform hover:-translate-y-2 hover:scale-105
              hover:shadow-[0_25px_60px_-15px_rgba(255,122,138,0.7)]
              ${
                visibleCards.includes(String(i))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }
            `}
          >
            {/* ICON */}
            <div className="flex items-center justify-center h-20 mb-6">
              <div className="text-5xl text-white drop-shadow-lg transition-transform duration-300 hover:scale-125">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
              {item.title}
            </h2>

            {/* DESC */}
            <p className="text-white/90 leading-relaxed">
              {item.desc}
            </p>

            {/* SOFT GLOW */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
