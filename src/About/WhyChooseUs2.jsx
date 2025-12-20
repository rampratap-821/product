import React, { useEffect, useRef, useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiSpaceShipFill, RiMoneyRupeeCircleFill } from "react-icons/ri";

const features = [
  {
    icon: <GiCommercialAirplane />,
    title: "Fast Delivery",
    desc: "Same-day delivery within 2 hours",
  },
  {
    icon: <RiMoneyRupeeCircleFill />,
    title: "Best Prices",
    desc: "Competitive pricing guaranteed",
  },
  {
    icon: <FaStarHalfAlt />,
    title: "Premium Quality",
    desc: "Fresh products daily from local farms",
  },
  {
    icon: <RiSpaceShipFill />,
    title: "Innovation",
    desc: "Latest technology for better service",
  },
];

const WhyChooseUs2 = () => {
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.25 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((item, i) => (
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
                visible.includes(String(i))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }
            `}
          >
            {/* ICON */}
            <div className="flex items-center justify-center h-20 mb-6">
              <div className="text-6xl text-white drop-shadow-lg transition-transform duration-300 hover:scale-125">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">
              {item.title}
            </h1>

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

export default WhyChooseUs2;
