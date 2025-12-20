import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { BiAdjust } from "react-icons/bi";
import { GiRapidshareArrow } from "react-icons/gi";

const values = [
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Eco-friendly packaging and supporting local farmers",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Community First",
    desc: "Building strong relationships with our customers",
  },
  {
    icon: <BiAdjust />,
    title: "Quality Promise",
    desc: "100% quality assurance on all products",
  },
  {
    icon: <GiRapidshareArrow />,
    title: "Innovation",
    desc: "Constantly improving our services",
  },
];

const OurValues2 = () => {
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
    <div className="w-full bg-white py-0 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {values.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`
              group relative
              bg-pink-300
              rounded-2xl p-10 text-center
              transform transition-all duration-700 ease-out
              hover:scale-105 hover:shadow-xl
              ${
                visible.includes(String(i))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }
            `}
          >
            {/* ICON */}
            <div className="flex items-center justify-center h-20 mb-6">
              <div className="text-6xl text-black transition-transform duration-500 group-hover:scale-125">
                {item.icon}
              </div>
            </div>

            <h1 className="text-2xl font-bold text-black">
              {item.title}
            </h1>

            <p className="text-black/80 mt-3">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurValues2;
