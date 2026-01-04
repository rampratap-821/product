import React, { useEffect, useRef, useState } from "react";
import { FaLeaf, FaHandHoldingHeart } from "react-icons/fa";
import { BiAdjust } from "react-icons/bi";
import { GiRapidshareArrow } from "react-icons/gi";

const values = [
  {
    icon: <FaLeaf />,
    title: "Natural",
    desc: "Eco-friendly & sustainable products",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Transparency",
    desc: "Honest pricing & clear information",
  },
  {
    icon: <BiAdjust />,
    title: "Care",
    desc: "Customer satisfaction first",
  },
  {
    icon: <GiRapidshareArrow />,
    title: "Innovation",
    desc: "Always improving our services",
  },
];

const OurValues2 = () => {
  const refs = useRef([]);
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

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className={`
                flex items-center justify-center gap-4
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
              <div className="text-4xl text-black flex-shrink-0">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-xl font-extrabold text-black">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues2;
