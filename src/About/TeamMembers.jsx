import React, { useEffect, useRef, useState } from "react";
import { ProfileData } from "../JsonData/About";
import { FaUserAstronaut } from "react-icons/fa";

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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-4 sm:px-10 py-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {ProfileData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`group relative bg-[#050505]
            border border-pink-500/40 rounded-2xl overflow-hidden
            transform transition-all duration-[900ms] ease-out
            ${
              visible.includes(String(index))
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
            hover:scale-[1.06]
            hover:shadow-[0_0_45px_#ec4899]
            `}
          >

            {/* TOP SECTION */}
            <div className="relative h-[180px] flex justify-center items-center
              bg-gradient-to-br from-pink-600/40 to-purple-600/40">

              {/* Glow */}
              <div className="absolute inset-0 bg-pink-500/20 blur-2xl opacity-0
                group-hover:opacity-100 transition duration-700"></div>

              {/* Profile Image */}
              <div className="relative z-10 w-[120px] h-[120px] rounded-full
                border-4 border-pink-400 shadow-[0_0_30px_#ec4899]
                transition-transform duration-[900ms] ease-out
                group-hover:scale-110">
                <img
                  src={item.profile_image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 text-pink-400 text-2xl
                group-hover:rotate-12 transition duration-700">
                <FaUserAstronaut />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold text-white">
                {item.name}
              </h1>

              <h2 className="text-lg font-semibold text-pink-400 mt-1">
                {item.role}
              </h2>

              <p className="text-gray-400 text-sm mt-3">
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
