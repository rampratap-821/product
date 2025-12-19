import React from "react";
import { motion } from "framer-motion";

const PartnerTheShin = () => {
  return (
    <section className="w-full bg-white py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – COSMETIC BRIDAL IMAGE */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80"
              alt="Professional Bridal Makeup Cosmetic Shoot"
              className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px]
                         object-cover"
            />
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-800"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-black">PARTNER</span>
              <span className="block text-gray-800 mt-2">IN SHINE</span>
            </h1>

            <p className="text-base text-gray-700 leading-relaxed">
              We believe beauty is more than just makeup — it is confidence,
              craftsmanship, and care. Our cosmetic collection is thoughtfully
              created for brides and beauty professionals who expect perfection
              in every detail.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              From bridal foundations and long-lasting lip shades to premium
              skincare and luxury cosmetic tools, every product is designed to
              enhance natural beauty while ensuring comfort, quality, and
              flawless results throughout the day.
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Whether it's a wedding, engagement, or special celebration,
              our cosmetics support artists and brides with reliable performance,
              elegant finishes, and a professional touch that truly shines.
            </p>

            <button
              className="mt-4 px-8 py-3 rounded-md
                         bg-black text-white
                         hover:bg-gray-800
                         transition-colors duration-300
                         font-medium"
            >
              JOIN THE GLOW
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnerTheShin;