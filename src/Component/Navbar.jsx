import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import Modals from '../Component/Modals'

import {
  RiShoppingBasketFill,
  RiSearchLine,
  RiUserLine,
  RiCloseLine
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
   const[showModal,setShowModal] = useState(false)

  const dropdowns = {
    brands: {
      title: "Brands",
      items: [
        { title: "L'Oreal", description: "Premium beauty products" },
        { title: "Maybelline", description: "Affordable makeup" },
        { title: "Lakme", description: "Indian beauty brand" },
        { title: "Huda Beauty", description: "Luxury cosmetics" },
        { title: "MAC", description: "Professional makeup" },
      ]
    },
    luxe: {
      title: "Luxe",
      items: [
        { title: "Designer Perfumes", description: "Luxury fragrances" },
        { title: "Premium Skincare", description: "High-end skincare" },
        { title: "Luxury Makeup", description: "Premium cosmetics" },
        { title: "VIP Services", description: "Exclusive treatments" },
      ]
    },
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);

  return (
    <>
      <nav className="fixed w-full bg-black text-white shadow-md border-b border-gray-200 pt-2 z-40">
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-pink-600">Rampratap</Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8">
              <li>
                <Link to="/" className="hover:text-pink-600 transition-colors font-medium">Home</Link>
              </li>

              <li>
                <Link to="/about" className=" hover:text-pink-600 transition-colors font-medium">About</Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-pink-600 transition-colors font-medium">Product</Link>
              </li>



              {/* Brands Dropdown */}
              <li
                className="relative dropdown-container"
                onMouseEnter={() => setActiveDropdown('brands')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1  hover:text-pink-600 transition font-medium">
                  Brands
                  <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'brands' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-11 left-0 mt-2 w-64 bg-white shadow-lg z-50"
                    >
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {dropdowns.brands.items.map((item, i) => (
                          <Link key={i} to="/" className="block p-3 rounded-lg hover:bg-pink-50 transition-all">
                            <div className="font-bold text-pink-600 text-sm">{item.title}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Luxe Dropdown */}
              <li
                className="relative dropdown-container"
                onMouseEnter={() => setActiveDropdown('luxe')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1  hover:text-amber-600 transition font-medium">
                  Luxe
                  <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'luxe' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'luxe' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-11 left-0 mt-2 w-64 bg-white shadow-lg z-50"
                    >
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {dropdowns.luxe.items.map((item, i) => (
                          <Link key={i} to="/" className="block p-3 rounded-lg hover:bg-amber-50 transition-all">
                            <div className="font-bold text-amber-600 text-sm">{item.title}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-56 px-4 py-2 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                />
                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Sign in */}
              <button onClick={() => setShowModal(true)} className='bg-pink-500 px-2 py-1 rounded'>Signup</button>
              {/* Cart */}
              <button onClick={toggleCart} className="relative p-2  hover:text-pink-600 transition">
                <RiShoppingBasketFill className="text-2xl" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
              </button>

              {/* Mobile Menu Button */}
              <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-gray-700 hover:bg-pink-50 rounded-lg">
                {isMobileMenuOpen ? (
                  <RiCloseLine className="text-xl" />
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-md"
            >
              <ul className="flex flex-col space-y-2 px-4 py-4">
                <li>
                  <Link to="/" className="block text-gray-700 font-medium hover:text-pink-600">Home</Link>
                </li>

                <li>
                  <Link to="/about" className="block text-gray-700 font-medium hover:text-pink-600">About</Link>
                </li>

                <li>
                  <Link to="/products" className="block text-gray-700 font-medium hover:text-pink-600">Products</Link>
                </li>

                {/* Mobile Dropdown - Brands */}
                <li>
                  <button
                    onClick={() => toggleDropdown('brands')}
                    className="flex justify-between items-center w-full text-gray-700 font-medium hover:text-pink-600"
                  >
                    Brands
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'brands' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 space-y-1"
                      >
                        {dropdowns.brands.items.map((item, i) => (
                          <Link key={i} to="/" className="block text-sm text-gray-600 hover:text-pink-600">{item.title}</Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Mobile Dropdown - Luxe */}
                <li>
                  <button
                    onClick={() => toggleDropdown('luxe')}
                    className="flex justify-between items-center w-full text-gray-700 font-medium hover:text-amber-600"
                  >
                    Luxe
                    <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'luxe' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'luxe' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 space-y-1"
                      >
                        {dropdowns.luxe.items.map((item, i) => (
                          <Link key={i} to="/" className="block text-sm text-gray-600 hover:text-amber-600">{item.title}</Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 🛒 CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-80 sm:w-96 h-full bg-black text-white shadow-2xl z-50  "
            >
              <div className="flex justify-between  border-b border-gray-200 pb-3 p-2 pl-10">
                <h2 className="text-xl font-bold text-pink-600">My account</h2>
                <RiCloseLine className="text-2xl cursor-pointer" onClick={toggleCart} />
              </div>

              <div className="  my-2 flex gap-5 border-b border-gray-200 " style={{ alignItems: "center" }}>
                <div className='size-10 rounded-full bg-pink-400 flex justify-center ml-2' style={{ alignItems: "center" }}>
                  <h1 className='font-bold text-pink-900'>R</h1>
                </div>

                <div >
                  <h1 className="text-pink-500  font-bold">Welcome User </h1>
                  <h1 className="  font-bold">Ram65628@gmail.com </h1>
                </div>
              </div>

              <div className='flex gap-3 m-5' style={{ alignItems: "center" }}>
                <CgProfile className='text-xl'></CgProfile>
                <Link to='profile' className='font-bold text-xl'>Profile</Link>
              </div>

              <div className='flex gap-3  m-5' style={{ alignItems: "center" }}>
                <FaRegHeart className='text-xl'></FaRegHeart>
                <Link className='font-bold text-xl'>Whislist</Link>
              </div>

              <div className='flex gap-3  m-5' style={{ alignItems: "center" }}>
                <FaMapMarkerAlt className='text-xl'></FaMapMarkerAlt>
                <Link className='font-bold text-xl'>Order Tracking</Link>
              </div>

              <div className='flex gap-3  m-5' style={{ alignItems: "center" }}>
                <IoMdSettings className='text-xl'></IoMdSettings>
                <Link className='font-bold text-xl' to="/about">About</Link>
              </div>

              <div className='flex gap-3  m-5' style={{ alignItems: "center" }}>
                < FaRegMoneyBillAlt className='text-xl'></FaRegMoneyBillAlt>
                <Link  to = '/myaccount' className='font-bold text-xl'>My account</Link>
              </div>

              <div className='flex gap-3  text-red-400 m-5' style={{ alignItems: "center" }}>
                <  IoMdLogOut className='text-xl'></ IoMdLogOut>
                <Link className='font-bold text-xl'>Logout</Link>
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>


{
        showModal && (
          
          <Modals onClose={()=>setShowModal(false)} >
          </Modals>
        )
      }




    </>
  );
};

export default Navbar;






