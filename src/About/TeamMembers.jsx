import React, { useEffect, useRef, useState } from "react";
import { ProfileData } from "../JsonData/About";

const TeamMembers = () => {
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
    <div className="w-full px-4 sm:px-10 py-14 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ProfileData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`
              group relative rounded-2xl overflow-hidden
              bg-white border
              shadow-lg hover:shadow-2xl
              transition-all duration-500 ease-out
              transform hover:-translate-y-2 hover:scale-105
              ${
                visible.includes(String(index))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            {/* TOP GRADIENT */}
            <div className="relative h-[180px] flex justify-center items-center 
              bg-pink-700">

              {/* PROFILE IMAGE */}
              <div className="w-[115px] h-[115px] rounded-full border-4 border-white 
                shadow-xl transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.profile_image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h1 className="text-xl font-extrabold text-black">
                {item.name}
              </h1>

              <h2 className="text-sm font-semibold text-pink-700 mt-1 tracking-wide">
                {item.role}
              </h2>

              <p className="text-sm text-black mt-3 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
