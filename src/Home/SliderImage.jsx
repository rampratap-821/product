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

  const slides = [
    {
      image: image3,
      title: "Beauty",
      subtitle: "That Defines You",
      tagline: "Luxury Makeup • Skincare • Timeless Glow",
      tags: ["Dermatology Tested", "Luxury Formula", "Long Lasting Glow"],
    },
    {
      image: image2,
      title: "Glow",
      subtitle: "Beyond Expectations",
      tagline: "Pure Radiance • Skin Love • Confidence",
      tags: ["Skin Friendly", "Natural Finish", "All Day Fresh"],
    },
    {
      image: image1,
      title: "Elegance",
      subtitle: "In Every Touch",
      tagline: "Premium Care • Soft Glam • Luxury Feel",
      tags: ["Premium Quality", "Smooth Texture", "Elegant Look"],
    },
    {
      image,
      title: "Luxury",
      subtitle: "You Can Feel",
      tagline: "High End Beauty • Bold & Beautiful",
      tags: ["Luxury Brand", "Pro Approved", "Silky Finish"],
    },
  ];

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
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
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={current.image}
          alt="Cosmetics background"
          className="h-full w-full object-cover transition-all duration-700 opacity-60"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-black">
                {current.title}
              </span>
              <span className="block text-gray-800 mt-2">
                {current.subtitle}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              {current.tagline}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-800 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] sm:h-[350px] w-[250px] sm:w-[280px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setGirlIndex(idx)}
            className={`w-2 h-2 rounded-full ${
              idx === girlIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}



// import React, { useEffect, useState } from "react";

// export default function ServiceHero() {
//   const categories = [
//     { name: "Daily Deals", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200" },
//     { name: "Bestseller", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=200" },
//     { name: "Lips", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200" },
//     { name: "Face", img: "https://images.unsplash.com/photo-1590156223821-25d5c07d19a8?w=200" },
//     { name: "Eye", img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200" },
//     { name: "New Launch", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=200" },
//     { name: "Skin Care", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=200" },
//     { name: "Gifts & Kits", img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=200" },
//   ];

//   const sliderImages = [
//     "https://swissbeauty.in/cdn/shop/files/1800x600_3.gif?v=1745868324&width=1800",
//     "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=1200",
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const i = setInterval(() => {
//       setIndex((p) => (p + 1) % sliderImages.length);
//     }, 3000);
//     return () => clearInterval(i);
//   }, []);

//   return (
//     <>
//       {/* ================= CATEGORY (UNCHANGED) ================= */}
//       <div className="bg-white py-4">
//         <div className="flex gap-6 justify-center overflow-x-auto px-4">
//           {categories.map((item, i) => (
//             <div key={i} className="text-center min-w-[90px]">
//               <img
//                 src={item.img}
//                 className="w-16 h-16 rounded-full mx-auto border-2 border-white object-cover"
//               />
//               <p className="text-white text-xs mt-2 font-semibold">{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     {/* ================= HERO ================= */}
//       <div className="relative w-full bg-gradient-to-r from-[#fde2e2] via-[#f8c1d9] to-[#fde2e2] overflow-hidden">

//         {/* soft light effect */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_40%)]" />

//         <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 items-center gap-10">

//           {/* ================= LEFT PRODUCTS ================= */}
//           <div className="flex gap-4 justify-center md:justify-start">
//             <img
//               src="https://swissbeauty.in/cdn/shop/files/All_About_Lips_Palette.jpg"
//               className="w-28 rounded-xl shadow-2xl bg-white p-2"
//             />
//             <img
//               src="https://swissbeauty.in/cdn/shop/files/High_On_Glow_Liquid_Highlighter.jpg"
//               className="w-28 rounded-xl shadow-2xl bg-white p-2 mt-10"
//             />
//             <img
//               src="https://swissbeauty.in/cdn/shop/files/Airbrush_Finish_Foundation.jpg"
//               className="w-28 rounded-xl shadow-2xl bg-white p-2"
//             />
//           </div>

//           {/* ================= CENTER OFFER ================= */}
//           <div className="text-center">
//             <p className="text-lg font-semibold text-gray-700">
//               Exclusive Early Access
//             </p>

//             <div className="mt-4 inline-block bg-[#e85c8b] text-white px-12 py-6 rounded-2xl shadow-2xl border-2 border-white">
//               <h2 className="text-3xl font-bold">
//                 Buy 4 Products
//               </h2>
//               <p className="text-4xl font-extrabold mt-2">
//                 @ Just ₹999
//               </p>
//             </div>

//             <p className="mt-4 text-lg font-semibold text-gray-700">
//               Use Code: <span className="font-bold text-[#e85c8b]">BUY4</span>
//             </p>
//           </div>

//           {/* ================= RIGHT MODEL ================= */}
//           <div className="flex justify-center md:justify-end">
//             <img
//               src="https://swissbeauty.in/cdn/shop/files/Lipstick_Model_Image.png"
//               className="w-[320px] drop-shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>

     
      
//     </>
//   );
// }
