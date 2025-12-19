import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { motion } from "framer-motion";

const AboutTitle = () => {
  return (
    <div className="w-full bg-white py-16 flex justify-center items-center">
      <div className="text-center max-w-2xl px-4">

        {/* ICON */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center 
                          bg-gray-100 border border-gray-300">
            <FcLikePlaceholder className="text-3xl" />
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4"
        >
          About Us
        </motion.h1>

        {/* LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="origin-left w-20 h-[2px] bg-gray-800 mx-auto my-6"
        />

        {/* TEXT */}
        <motion.p
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          Premium cosmetics crafted with care, powered by nature,
          and designed to enhance your natural beauty.
        </motion.p>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-sm sm:text-base mt-3"
        >
          Trusted quality. Modern beauty. Since 2010.
        </motion.p>

      </div>
    </div>
  );
};

export default AboutTitle;