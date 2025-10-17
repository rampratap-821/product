import React, { useState, useRef } from "react";

const Navbar3 = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const timeoutRef = useRef(null);

  const dropdownData = {
    Ram: ["Virendra Pal", "Omveer", "Upendra"],
    Omveer: ["Pushpendra", "Rampratap", "Avaneesh"],
    Pushpendra: ["Vicky", "Ram", "Omveer"],
    Upendra: ["Rampratap", "Virendra Pal", "Avaneesh"],
    Rampratap: ["Pushpendra", "Vicky", "Omveer"],
    Avaneesh: ["Ram", "Upendra", "Pushpendra"],
    Vicky: ["Omveer", "Rampratap", "Avaneesh"],
  };

  const titles = Object.keys(dropdownData);

  // Hover stable logic
  const handleMouseEnter = (title) => {
    clearTimeout(timeoutRef.current);
    setActiveTitle(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveTitle(null), 250);
  };

  return (
    <div className="bg-green-200">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto flex justify-between py-4 relative select-none">
        {/* 🔹 Navbar Titles */}
        {titles.map((title, index) => (
          <div
            key={index}
            className="flex items-center gap-1 text-blue-600 hover:text-amber-500 text-xl font-semibold cursor-pointer transition-all duration-200"
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
          >
            {title}
           
          </div>
        ))}

        {/* 🔹 Shared Dropdown */}
        {activeTitle && (
          <div
            onMouseEnter={() => handleMouseEnter(activeTitle)}
            onMouseLeave={handleMouseLeave}
            className="absolute  transform -translate-x-1/2 top-12 mt-3 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 opacity-0 animate-fadeIn"
          >
            <h3 className="text-center text-xl font-semibold text-blue-700 py-2 border-b border-gray-200">
              {activeTitle} — Members
            </h3>
            <ul className="p-3 text-lg">
              {dropdownData[activeTitle].map((item, i) => (
                <li key={i} className="py-1">
                  <a
                    href="#"
                    className="block px-3 py-1 hover:bg-blue-100 hover:text-blue-600 rounded-md"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar3;
