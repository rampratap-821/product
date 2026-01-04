import React, { useEffect, useRef, useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const data = [
  { icon: <FaLock />, count: "10K", label: "PRODUCTS" },
  { icon: <MdEmojiEmotions />, count: "20K", label: "USERS" },
  { icon: <FaLocationDot />, count: "50+", label: "LOCATIONS" },
  { icon: <TbTruckDelivery />, count: "10M", label: "DELIVERIES" },
];

const ProductAvaileble = () => {
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
    <div className="w-full py-14 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className={`
                flex items-center justify-center gap-4 py-10
                border
                rounded-2xl p-6
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
                <h1 className="text-3xl font-extrabold text-black leading-tight">
                  {item.count}
                </h1>
                <h2 className="text-sm text-black font-semibold tracking-widest">
                  {item.label}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAvaileble;
