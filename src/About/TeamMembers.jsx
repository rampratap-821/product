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
    <div className="w-full px-4 sm:px-10 py-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ProfileData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`
              group relative rounded-2xl overflow-hidden
              bg-white shadow-lg
              transform transition-all duration-700 ease-out
              hover:-translate-y-2 hover:scale-105
              ${
                visible.includes(String(index))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }
            `}
          >
            {/* TOP - पहले जैसा ही gradient */}
            <div className="relative h-[190px] flex justify-center items-center bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1]">
              {/* PROFILE IMAGE */}
              <div className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-110">
                <img
                  src={item.profile_image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* CONTENT - पहले जैसा ही */}
            <div className="p-6 text-center">
              <h1 className="text-2xl font-extrabold text-black">
                {item.name}
              </h1>

              <h2 className="text-lg font-semibold text-pink-600 mt-1">
                {item.role}
              </h2>

              <p className="text-black text-sm mt-3 leading-relaxed">
                {item.content}
              </p>
            </div>

            {/* SUBTLE GLOW - हटा दिया ताकि कोई नया color न आए */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;