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
    <div className="w-full py-14 px-4 bg-white">
      {/* HEADING */}
      <div
        ref={headingRef}
        className={`text-center mb-16 transition-all duration-700 ease-out
        ${showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}
      >
        <h1 className="text-4xl sm:text-4xl font-extrabold text-pink-700 tracking-wide">
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
              flex items-center gap-4
              border rounded-2xl p-6 py-10
              bg-white
              shadow-lg hover:shadow-2xl
              transition-all duration-500 ease-out
              transform hover:-translate-y-2 hover:scale-105
              ${
                visibleCards.includes(String(i))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            {/* ICON */}
            <div className="text-4xl text-black flex-shrink-0">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-extrabold text-black">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
