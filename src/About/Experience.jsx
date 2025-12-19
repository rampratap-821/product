import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full py-24 relative overflow-hidden "
    >
      {/* Glow BG */}
      <div className="absolute inset-0 bg-gradient-to-r
        from-pink-500/10 via-purple-500/10 to-cyan-500/10
        blur-3xl"></div>

      <div
        className={`relative text-center max-w-4xl mx-auto px-4
        transform transition-all duration-[1000ms] ease-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl font-extrabold
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          text-transparent bg-clip-text tracking-wider">
          Ready to Experience the Difference?
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-gray-300">
          Join thousands of satisfied customers who trust us
          for their daily grocery needs.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/shop"
            className="group inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-2xl font-bold text-white
              bg-gradient-to-r from-pink-600 to-purple-600
              shadow-[0_0_30px_#ec4899]
              transform transition-all duration-[800ms] ease-out
              hover:scale-110 hover:shadow-[0_0_50px_#ec4899]"
          >
            <FaShoppingCart className="text-xl group-hover:scale-125 transition" />
            Start Shopping
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-2xl font-bold text-white
              bg-gradient-to-r from-cyan-600 to-blue-600
              shadow-[0_0_30px_#06b6d4]
              transform transition-all duration-[800ms] ease-out
              hover:scale-110 hover:shadow-[0_0_50px_#06b6d4]"
          >
            <FaPhoneAlt className="text-xl group-hover:rotate-12 transition" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
