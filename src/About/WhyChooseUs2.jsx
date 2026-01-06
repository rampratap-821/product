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
    <div className="w-full py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            className={`
              flex items-center gap-4
              border rounded-2xl p-6 py-10
              bg-white
              shadow-lg hover:shadow-2xl
              transition-all duration-500 ease-out
              transform hover:-translate-y-2 hover:scale-105
              ${
                visible.includes(String(i))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            {/* ICON */}
            <div className="text-4xl text-pink-700 flex-shrink-0">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-xl font-extrabold text-pink-700">
                {item.title}
              </h2>
              <p className="text-sm text-pink-700/70 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs2;
