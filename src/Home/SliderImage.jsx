import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../assets/Images/image.png";
import image1 from "../assets/Images/beautiful.jpg";
import image2 from "../assets/Images/top.jpg";
import image3 from "../assets/Images/pala.jpg";

export default function ServiceHero() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [girlIndex, setGirlIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { image: image3, title: "Beauty", subtitle: "That Defines You", tagline: "Luxury Makeup • Skincare • Timeless Glow" },
    { image: image2, title: "Glow", subtitle: "Beyond Expectations", tagline: "Pure Radiance • Skin Love • Confidence" },
    { image: image1, title: "Elegance", subtitle: "In Every Touch", tagline: "Premium Care • Soft Glam • Luxury Feel" },
    { image, title: "Luxury", subtitle: "You Can Feel", tagline: "High End Beauty • Bold & Beautiful" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGirlIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = slides[girlIndex];

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* BACKGROUND – SMOOTH */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={girlIndex}
            src={current.image}
            alt="Background"
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT – SMOOTH */}
          <AnimatePresence mode="wait">
            <motion.div
              key={girlIndex + "text"}
              className="text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, y: 25 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="block text-gray-900">{current.title}</span>
                <span className="block text-black mt-2">{current.subtitle}</span>
              </h1>

              <p className="text-base sm:text-lg text-black max-w-xl mx-auto lg:mx-0">
                {current.tagline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE – SMOOTH */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={girlIndex + "img"}
                className="relative h-[300px] sm:h-[400px] w-[240px] sm:w-[320px] overflow-hidden rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {isMobile && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 text-xs">
          Swipe to explore
        </div>
      )}
    </section>
  );
}
