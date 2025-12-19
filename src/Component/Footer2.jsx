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

        {/* TOP BRAND */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-widest text-pink-400">
            BEAUTY<span className="text-white">.STORE</span>
          </h2>

          <button className="px-8 py-3 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition shadow-[0_0_20px_rgba(236,72,153,0.6)]">
            SHOP NOW →
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* ABOUT */}
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-4">
              RAM<span className="text-pink-500">COS</span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              India’s trusted destination for beauty, skincare & luxury cosmetics.
              Discover authentic brands, trending products & expert care.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-pink-400 mb-4 tracking-widest">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-pink-400 cursor-pointer">About Us</li>
              <li className="hover:text-pink-400 cursor-pointer">Careers</li>
              <li className="hover:text-pink-400 cursor-pointer">Authenticity</li>
              <li className="hover:text-pink-400 cursor-pointer">Press & Media</li>
              <li className="hover:text-pink-400 cursor-pointer">Sustainability</li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-pink-400 mb-4 tracking-widest">HELP</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-pink-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-pink-400 cursor-pointer">Shipping Policy</li>
              <li className="hover:text-pink-400 cursor-pointer">Returns</li>
              <li className="hover:text-pink-400 cursor-pointer">FAQs</li>
              <li className="hover:text-pink-400 cursor-pointer">Track Order</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-pink-400 mb-4 tracking-widest">
              BEAUTY UPDATES
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              Get exclusive offers, beauty tips & new launches straight to your inbox.
            </p>

            <div className="flex bg-white/5 backdrop-blur-md border border-pink-400/30">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 w-full text-gray-300 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 bg-pink-500 text-black font-semibold hover:bg-purple-400 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-widest">
          <p>© 2025 RAM COSMETIC. ALL RIGHTS RESERVED.</p>
          <p className="text-pink-400">BEAUTY YOU DESERVE ✦</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer2;
