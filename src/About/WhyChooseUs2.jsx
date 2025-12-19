import React, { useEffect, useRef, useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiSpaceShipFill, RiMoneyRupeeCircleFill } from "react-icons/ri";

const features = [
  {
    icon: <GiCommercialAirplane />,
    title: "Fast Delivery",
    desc: "Same-day delivery within 2 hours",
    color: "cyan",
  },
  {
    icon: <RiMoneyRupeeCircleFill />,
    title: "Best Prices",
    desc: "Competitive pricing guaranteed",
    color: "green",
  },
  {
    icon: <FaStarHalfAlt />,
    title: "Premium Quality",
    desc: "Fresh products daily from local farms",
    color: "yellow",
  },
  {
    icon: <RiSpaceShipFill />,
    title: "Innovation",
    desc: "Latest technology for better service",
    color: "purple",
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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-20 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {features.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`group relative bg-pink-600
            border border-${item.color}-500/40
            rounded-2xl p-8 text-center
            transform transition-all duration-[900ms] ease-out
            ${
              visible.includes(String(i))
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
            hover:scale-[1.08]
            hover:shadow-[0_0_45px_rgba(236,72,153,0.6)]
            `}
          >
            {/* ICON CENTER */}
            <div className="flex items-center justify-center h-20 mb-6">
              <div
                className={`text-6xl text-${item.color}-400
                transition-transform duration-[900ms] ease-out
                group-hover:scale-125`}
              >
                {item.icon}
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white">{item.title}</h1>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default WhyChooseUs2;
