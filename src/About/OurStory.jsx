import React, { useEffect, useRef, useState } from "react";
import { MdFoundation } from "react-icons/md";

const OurStory = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setShowLeft(true);
            if (entry.target === rightRef.current) setShowRight(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    leftRef.current && observer.observe(leftRef.current);
    rightRef.current && observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-5 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT STORY PANEL */}
        <div
          ref={leftRef}
          className={`relative bg-pink-900 border border-pink-500/40
          rounded-2xl p-10 shadow-[0_0_40px_#ec489950]
          transition-all duration-700 ease-out
          ${
            showLeft
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <h1 className="text-4xl font-extrabold text-pink-400 mb-6">
            Our Story <span className="text-white">— The Glow Behind the Brand</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-4">
            Founded in 2010 by Sofia Mehra, Bloom Cosmetics began as a small studio
            with one dream — to make beauty simple, natural, and empowering.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            From cold-pressed oils to cruelty-free pigments, every ingredient was
            chosen with care. Our mission was never just makeup — it was a mindful
            beauty ritual.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            In 2012, Bloom launched its first organic lipstick line. By 2015,
            skincare inspired by Indian botanicals followed — rose, turmeric,
            aloe, and sandalwood.
          </p>

          <p className="text-gray-300 leading-relaxed">
            No parabens. No sulfates. Only skin-loving formulas. In 2018, the
            “Pure Inside, Radiant Outside” campaign inspired thousands to
            redefine beauty.
          </p>
        </div>

        {/* RIGHT TIMELINE */}
        <div
          ref={rightRef}
          className={`space-y-6 transition-all duration-700 ease-out
          ${
            showRight
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          {[
            { year: "2010", title: "Founded", desc: "Started with a single store" },
            { year: "2012", title: "First Organic Lipstick", desc: "Clean & bold beauty" },
            { year: "2015", title: "Skincare Launch", desc: "Inspired by botanicals" },
            { year: "2018", title: "Global Vision", desc: "Pure Inside, Radiant Outside" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-pink-600 border-l-4 border-pink-500
              rounded-xl p-6 flex gap-5 items-center
              hover:shadow-[0_0_35px_#ec4899] transition duration-700"
            >
              <div className="bg-pink-500/20 p-4 rounded-xl
                group-hover:scale-110 transition duration-700">
                <MdFoundation className="text-3xl text-pink-400" />
              </div>

              <div>
                <h1 className="text-pink-400 text-xl font-bold">{item.year}</h1>
                <h2 className="text-white text-2xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurStory;
