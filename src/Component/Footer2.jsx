import React from "react";
import { motion } from "framer-motion";

const Footer2 = () => {
  return (
    <footer className="relative w-full overflow-hidden text-gray-300">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-transparent to-purple-400/20" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(180deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-24"
      >

        {/* MAIN LAYOUT - Image ke according */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - BEAUTY.STORE and RAMCOS */}
          <div>
            {/* BEAUTY.STORE */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-widest text-pink-400 mb-6">
              BEAUTY<span className="text-white">.STORE</span>
            </h2>

            {/* RAMCOS and Description */}
            <div className="mb-12">
              <h1 className="text-4xl font-extrabold text-white mb-4">
                RAM<span className="text-pink-500">COS</span>
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-lg">
                India’s trusted destination for beauty, skincare & luxury cosmetics.
                Discover authentic brands, trending products & expert care.
              </p>
            </div>

            {/* Copyright - Bottom left */}
            <div className="mt-16 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-500 tracking-widest">
                © 2025 RAM COSMETIC. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* COMPANY */}
            <div>
              <h4 className="text-pink-400 mb-4 tracking-widest font-semibold">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">About Us</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Careers</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Authenticity</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Press & Media</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Sustainability</li>
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h4 className="text-pink-400 mb-4 tracking-widest font-semibold">HELP</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Contact Us</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Shipping Policy</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Returns</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">FAQs</li>
                <li className="hover:text-pink-400 cursor-pointer hover:translate-x-2 transition">Track Order</li>
              </ul>
            </div>

            {/* BEAUTY UPDATES */}
            <div>
              <h4 className="text-pink-400 mb-4 tracking-widest font-semibold">
                BEAUTY UPDATES
              </h4>
              <p className="text-gray-400 mb-4 text-sm">
                Get exclusive offers, beauty tips & new launches straight to your inbox.
              </p>

              {/* Email Input */}
              <div className="flex bg-white/5 backdrop-blur-md border border-pink-400/30 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 py-3 w-full text-gray-300 placeholder-gray-500 focus:outline-none text-sm"
                />
                <button className="px-4 bg-pink-500 text-black font-semibold hover:bg-purple-400 transition text-sm">
                  SUBSCRIBE
                </button>
              </div>

              {/* Beauty tagline - Bottom right */}
              <div className="mt-16 pt-6 border-t border-gray-700 md:text-right">
                <p className="text-xs text-pink-400 tracking-widest">
                  BEAUTY YOU DESERVE ✦
                </p>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer2;