

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Modals from "../Component/Modals";
import logo from "../assets/Icons/logo-removebg-preview.png"

import {
  RiShoppingBasketFill,
  RiSearchLine,
  RiCloseLine,
  RiMenu3Line,
  RiUserLine,
  RiHeartLine,
  RiTruckLine,
  RiSettingsLine,
  RiAccountCircleLine,
  RiLogoutBoxRLine,
  RiArrowDownSLine,
  RiShoppingCartLine,
  RiStarLine,
  RiGiftLine,
} from "react-icons/ri";

const Navbar = ({ card }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdowns = {
    brands: {
      items: ["L'Oreal", "Maybelline", "Lakme", "Huda Beauty", "MAC"],
      icons: [RiStarLine, RiStarLine, RiStarLine, RiStarLine, RiStarLine]
    },
    luxe: {
      items: [
        "Designer Perfumes",
        "Premium Skincare",
        "Luxury Makeup",
        "VIP Services",
      ],
      icons: [RiGiftLine, RiGiftLine, RiGiftLine, RiGiftLine]
    },
  };

  const sidebarItems = [
    { name: "Profile", icon: RiUserLine, path: "/profile" },
    { name: "Wishlist", icon: RiHeartLine, path: "/wishlist" },
    { name: "Order Tracking", icon: RiTruckLine, path: "/tracking" },
    { name: "Settings", icon: RiSettingsLine, path: "/settings" },
    { name: "My Cart", icon: RiShoppingCartLine, path: "/cart" },
    { name: "My Account", icon: RiAccountCircleLine, path: "/myaccount" },
  ];

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (name) =>
    setActiveDropdown(activeDropdown === name ? null : name);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* LOGO & MOBILE MENU BUTTON */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-black hover:text-gray-700 transition"
            >
              <RiMenu3Line className="text-2xl" />
            </button>

            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                alt="Logo"
              />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {["Home", "About", "Products", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-black font-medium tracking-wide text-lg
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                  after:w-0 after:bg-black after:transition-all after:duration-300 
                  hover:after:w-full hover:text-gray-800 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}

            {/* DROPDOWNS */}
            {["brands", "luxe"].map((key) => (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="cursor-pointer text-black hover:text-gray-800 flex items-center gap-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 left-0 w-64 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden"
                    >
                      {dropdowns[key].items.map((d, i) => (
                        <Link
                          key={i}
                          to="/products"
                          className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:text-black hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-sm font-medium">{d}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* SEARCH FOR MOBILE */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setSearchQuery("")}
                className="text-black hover:text-gray-700 transition"
              >
                <RiSearchLine className="text-xl" />
              </button>
            </div>

            {/* SEARCH FOR DESKTOP */}
            <div className="hidden lg:block relative w-64">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cosmetics..."
                className="w-full bg-gray-50 text-black text-sm pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 focus:shadow-sm transition-all"
              />
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  <RiCloseLine />
                </button>
              )}
            </div>

            {/* AUTH BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="hidden sm:block px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all"
            >
              Sign In
            </button>

            {/* CART BUTTON */}
            <button
              onClick={toggleCart}
              className="relative group"
            >
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
                <RiShoppingBasketFill className="text-2xl text-black group-hover:text-gray-800 group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {card.length}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <AnimatePresence>
          {searchQuery && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden px-4 py-2 border-t border-gray-200 bg-white"
            >
              <div className="relative">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-gray-50 text-black pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                />
                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= MOBILE SIDEBAR MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 border-r border-gray-300 shadow-lg lg:hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      className="w-12 h-12"
                      alt="Logo"
                    />
                    <span className="text-xl font-bold text-black">
                      LuxeCosmetics
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-black hover:text-gray-700 transition"
                  >
                    <RiCloseLine className="text-2xl" />
                  </button>
                </div>

                {/* MOBILE NAV LINKS */}
                <div className="space-y-2 flex-1">
                  {["Home", "About", "Products", "Contact", "Brands", "Luxe"].map((item, i) => (
                    <Link
                      key={i}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={toggleMobileMenu}
                      className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-black hover:bg-gray-100 rounded-lg transition-all group"
                    >
                      <div className="w-1 h-6 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-lg font-medium">{item}</span>
                    </Link>
                  ))}
                </div>

                {/* MOBILE AUTH SECTION */}
                <div className="pt-6 border-t border-gray-300">
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      setShowModal(true);
                    }}
                    className="w-full mb-3 px-4 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all"
                  >
                    Sign In / Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= CART SIDEBAR ================= */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              onClick={toggleCart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-80 sm:w-80 md:w-80 lg:w-96 bg-white z-50 border-l border-gray-300 shadow-lg"
            >
              <div className="h-full flex flex-col">
                {/* HEADER */}
                <div className="p-6 border-b border-gray-300">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black">
                      My Account
                    </h2>
                    <button
                      onClick={toggleCart}
                      className="text-black hover:text-gray-700 transition"
                    >
                      <RiCloseLine className="text-2xl" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Manage your account and preferences
                  </p>
                </div>

                {/* PROFILE SECTION */}
                <div className="p-6 border-b border-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <RiUserLine className="text-2xl text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-black text-lg font-semibold">
                        Welcome Back!
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Access your account details
                      </p>
                    </div>
                  </div>
                </div>

                {/* NAVIGATION ITEMS */}
                <div className="flex-1 p-6 space-y-1 overflow-y-auto">
                  {sidebarItems.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={toggleCart}
                      className="flex items-center gap-4 px-4 py-3 text-gray-800 hover:text-black hover:bg-gray-100 rounded-lg transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all">
                        {React.createElement(item.icon, { className: "text-gray-700 text-xl" })}
                      </div>
                      <span className="text-lg font-medium">{item.name}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* FOOTER SECTION */}
                <div className="p-6 border-t border-gray-300">
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        toggleCart();
                        setShowModal(true);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all group"
                    >
                      <RiLogoutBoxRLine className="text-xl group-hover:rotate-180 transition-transform" />
                      <span>Sign Out</span>
                    </button>
                    
                    <div className="text-center text-gray-500 text-xs">
                      <p>© 2024 LuxeCosmetics</p>
                      <p className="mt-1">Premium Beauty Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      {showModal && <Modals onClose={() => setShowModal(false)} />}

      {/* PADDING FOR FIXED NAVBAR */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;