import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { BiAdjust } from "react-icons/bi";
import { GiRapidshareArrow } from "react-icons/gi";

const values = [
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Eco-friendly packaging and supporting local farmers",
    color: "green",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Community First",
    desc: "Building strong relationships with our customers",
    color: "pink",
  },
  {
    icon: <BiAdjust />,
    title: "Quality Promise",
    desc: "100% quality assurance on all products",
    color: "cyan",
  },
  {
    icon: <GiRapidshareArrow />,
    title: "Innovation",
    desc: "Constantly improving our services",
    color: "purple",
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
    <div className="w-full bg-black py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {values.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            style={{ transitionDelay: `${i * 120}ms` }}
            className={`group relative bg-pink-600
            border border-${item.color}-500/40
            rounded-2xl p-10 text-center
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
            <p className="text-gray-400 mt-3">{item.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurValues2;
