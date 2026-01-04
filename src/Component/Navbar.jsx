import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Modals from "../Component/Modals";
import logo from "../assets/Icons/logo-removebg-preview.png";

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
  RiShoppingCartLine,
  RiStarLine,
  RiGiftLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

const Navbar = ({ card }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    brands: false,
    luxe: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setShowMobileSearch(false);
        // Reset mobile dropdowns on desktop
        setMobileDropdowns({ brands: false, luxe: false });
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
    { name: "My Account", icon: RiAccountCircleLine, path: "/myaccount" },
  ];

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (showMobileSearch) setShowMobileSearch(false);
    // Reset dropdowns when closing menu
    if (isMobileMenuOpen) {
      setMobileDropdowns({ brands: false, luxe: false });
    }
  };
  
  const toggleMobileSearch = () => setShowMobileSearch(!showMobileSearch);
  
  const toggleDropdown = (name) =>
    setActiveDropdown(activeDropdown === name ? null : name);

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  const navLinks = ["Home", "About", "Products", "Contact"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between">
          {/* LOGO & MOBILE MENU BUTTON */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-black hover:text-black-700 transition p-1"
              aria-label="Toggle menu"
            >
              <RiMenu3Line className="text-xl sm:text-2xl" />
            </button>

            <Link to="/" className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <img
                src={logo}
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                alt="Logo"
              />
              <span className="hidden xs:inline-block text-lg sm:text-xl md:text-2xl font-bold text-black">
                LuxeCosmetics
              </span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-black tracking-wide text-base xl:text-lg
                  after:absolute after:left-0 after:-bottom-1 after:h-[1px]
                  after:w-0 after:bg-pink-700 after:transition-all after:duration-300 
                  hover:after:w-full hover:text-black-800 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}

            {/* DROPDOWNS - DESKTOP */}
            {Object.keys(dropdowns).map((key) => (
              <li
                key={key}
                className="relative        
                relative text-black  tracking-wide text-base xl:text-lg
                 "
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="cursor-pointer text-black hover:text-black-800 flex items-center gap-1 text-base xl:text-lg">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-10 left-0 w-56 xl:w-64 bg-white border border-pink-50 shadow-lg rounded-lg overflow-hidden z-50"
                    >
                      {dropdowns[key].items.map((item, index) => (
                        <Link
                          key={index}
                          to="/products"
                          className="flex items-center gap-3 px-4 py-3 text-black-800 hover:text-black hover:bg-black-100 transition-colors"
                        >
                          <span className="text-sm font-medium">{item}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* MOBILE SEARCH TOGGLE */}
            <button
              onClick={toggleMobileSearch}
              className="lg:hidden text-black hover:text-black-700 transition p-1"
              aria-label="Search"
            >
              <RiSearchLine className="text-xl sm:text-2xl" />
            </button>

            {/* DESKTOP SEARCH */}
            <div className="hidden lg:block relative w-48 xl:w-56 2xl:w-64">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cosmetics..."
                className="w-full bg-black-50 text-black text-sm pl-10 pr-4 py-2 rounded-lg border border-black-300 focus:outline-none focus:border-black-500 focus:shadow-sm transition-all"
              />
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-black-600" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black-600 hover:text-black"
                  aria-label="Clear search"
                >
                  <RiCloseLine />
                </button>
              )}
            </div>

            {/* AUTH BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="hidden sm:block px-3 py-1.5 md:px-4 md:py-2 bg-black hover:bg-black-800 text-white rounded-lg font-medium transition-all text-sm md:text-base"
            >
              Sign In
            </button>

            {/* CART BUTTON */}
            <button
              onClick={toggleCart}
              className="relative group p-1"
              aria-label="Cart"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-black-100 group-hover:bg-black-200 transition-all">
                <RiShoppingBasketFill className="text-xl sm:text-2xl text-black group-hover:text-black-800 group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {card.length}
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden px-3 sm:px-4 border-t border-black-200 bg-white"
            >
              <div className="py-2 sm:py-3 relative">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cosmetics..."
                  className="w-full bg-black-50 text-black pl-10 pr-4 py-2 sm:py-2.5 rounded-lg border border-black-300 focus:outline-none focus:border-black-500 text-sm sm:text-base"
                />
                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-black-600" />
                <button
                  onClick={toggleMobileSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black-600 hover:text-black p-1"
                >
                  <RiCloseLine className="text-xl" />
                </button>
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
              className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 border-r border-black-300 shadow-lg lg:hidden overflow-y-auto"
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={logo}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                      alt="Logo"
                    />
                    <span className="text-lg sm:text-xl font-bold text-black">
                      LuxeCosmetics
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-black hover:text-black-700 transition p-1"
                  >
                    <RiCloseLine className="text-xl sm:text-2xl" />
                  </button>
                </div>

                {/* MOBILE NAV LINKS */}
                <div className="space-y-1 sm:space-y-2 flex-1">
                  {navLinks.map((item) => (
                    <Link
                      key={item}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={toggleMobileMenu}
                      className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-black-800 hover:text-black hover:bg-black-100 rounded-lg transition-all group text-base "
                    >
                      <div className="w-1 h-5 sm:h-6 bg-black-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="">{item}</span>
                    </Link>
                  ))}
                  
                  {/* BRANDS DROPDOWN FOR MOBILE */}
                  <div className="mt-2">
                    <button
                      onClick={() => toggleMobileDropdown('brands')}
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-black-800 hover:text-black hover:bg-black-100 rounded-lg transition-all group text-base sm:text-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-5 sm:h-6 bg-black-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="">Brands</span>
                      </div>
                      {mobileDropdowns.brands ? (
                        <RiArrowUpSLine className="text-xl text-black-500" />
                      ) : (
                        <RiArrowDownSLine className="text-xl text-black-500" />
                      )}
                    </button>
                    
                    {/* BRANDS DROPDOWN ITEMS */}
                    <AnimatePresence>
                      {mobileDropdowns.brands && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-5 sm:ml-10 pl-2  mt-1">
                            {dropdowns.brands.items.map((item, index) => (
                              <Link
                                key={index}
                                to="/products"
                                onClick={toggleMobileMenu}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-black-600 hover:text-black hover:bg-black-50 rounded-lg transition-all text-sm sm:text-base"
                              >
                              
                                <span>{item}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* LUXE DROPDOWN FOR MOBILE */}
                  <div className="mt-2">
                    <button
                      onClick={() => toggleMobileDropdown('luxe')}
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-black-800 hover:text-black hover:bg-black-100 rounded-lg transition-all group text-base sm:text-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-5 sm:h-6 bg-black-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium">Luxe</span>
                      </div>
                      {mobileDropdowns.luxe ? (
                        <RiArrowUpSLine className="text-xl text-black-500" />
                      ) : (
                        <RiArrowDownSLine className="text-xl text-black-500" />
                      )}
                    </button>
                    
                    {/* LUXE DROPDOWN ITEMS */}
                    <AnimatePresence>
                      {mobileDropdowns.luxe && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-5 sm:ml-10 pl-2  mt-1">
                            {dropdowns.luxe.items.map((item, index) => (
                              <Link
                                key={index}
                                to="/products"
                                onClick={toggleMobileMenu}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-black-600 hover:text-black hover:bg-black-50 rounded-lg transition-all text-sm sm:text-base"
                              >
                               
                                <span>{item}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE AUTH SECTION */}
                <div className="pt-4 sm:pt-6 border-t border-black-300">
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      setShowModal(true);
                    }}
                    className="w-full mb-2 sm:mb-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-black hover:bg-black-800 text-white rounded-lg font-medium transition-all text-sm sm:text-base"
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
              className="fixed right-0 top-0 h-full  w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 bg-white z-50 border-l border-black-300 shadow-lg overflow-y-auto"
            >
              <div className="h-full flex flex-col">
                {/* HEADER */}
                <div className="p-4 sm:p-6 border-b border-black-300">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-bold text-black">
                      My Account
                    </h2>
                    <button
                      onClick={toggleCart}
                      className="text-black hover:text-black-700 transition p-1"
                    >
                      <RiCloseLine className="text-xl sm:text-2xl" />
                    </button>
                  </div>
                  <p className="text-black-600 text-xs sm:text-sm mt-1">
                    Manage your account and preferences
                  </p>
                </div>

                {/* NAVIGATION ITEMS */}
                <div className="flex-1 p-4 sm:p-6 space-y-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={toggleCart}
                      className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 text-black-800 hover:text-black hover:bg-black-100 rounded-lg transition-all group"
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg  group-hover:bg-black-200 transition-all">
                        {React.createElement(item.icon, { className: "text-lg sm:text-xl" })}
                      </div>
                      <span className="text-base sm:text-lg ">{item.name}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black-500" />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* FOOTER SECTION */}
                <div className="p-4 sm:p-6 border-t border-black-300">
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={() => {
                        toggleCart();
                        setShowModal(true);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-black hover:bg-black-800 text-white rounded-lg font-medium transition-all group text-sm sm:text-base"
                    >
                      <RiLogoutBoxRLine className="text-lg sm:text-xl group-hover:rotate-180 transition-transform" />
                      <span>Sign Out</span>
                    </button>
                    
                    
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      {showModal && <Modals onClose={() => setShowModal(false)} />}

      {/* PADDING FOR FIXED NAVBAR - RESPONSIVE */}
      <div className="h-14 sm:h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
