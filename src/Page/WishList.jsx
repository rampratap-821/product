import React from "react";
import { IoCloud } from "react-icons/io5";
import {
  MdDelete,
  MdLanguage,
  MdLockClock,
  MdProductionQuantityLimits,
  MdOutlinePriceChange
} from "react-icons/md";
import { FaCalendarAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = ({ card, setCard }) => {

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      setCard(card.filter(item => item.id !== id));
    }
  };

  const clearAllWishlist = () => {
    if (confirm("Are you sure you want to clear all items from wishlist?")) {
      setCard([]);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-white py-10 px-4 sm:px-6">

        {/* HEADER */}
        {card.length !== 0 && (
          <div className="bg-white border border-gray-300 shadow-lg rounded-2xl px-6 py-6 flex flex-col lg:flex-row gap-6 justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-700 to-pink-900 bg-clip-text text-transparent">
                My Wishlist
              </h1>
              <p className="text-black mt-1 text-sm flex items-center gap-1">
                <FaHeart className="text-pink-700" />
                {card.length} items saved for later
              </p>
            </div>

          </div>
        )}

        {/* TABLE HEADER (DESKTOP) */}
        {card.length !== 0 && (
          <div className="hidden lg:block mt-8 bg-white border border-gray-300 shadow-md rounded-xl">
            <div className="grid grid-cols-[3fr_1fr_1fr_2fr] px-8 py-4 text-black font-bold text-sm">
              <div className="flex items-center gap-2">
                <MdProductionQuantityLimits className="text-black" /> Product
              </div>
              <div className="text-center flex items-center justify-center gap-2">
                <MdOutlinePriceChange className="text-black" /> Price
              </div>
              <div className="text-center flex items-center justify-center gap-2">
                <FaShoppingCart className="text-black" /> Stock
              </div>
              <div className="text-center">
                <FaHeart className="inline mr-1 text-black" /> Action
              </div>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {card.length === 0 ? (
          <div className="flex justify-center items-center mt-24">
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl px-10 py-12 text-center">
              <div className="text-6xl text-pink-700 mb-4 flex justify-center">
                <FaHeart />
              </div>
              <h1 className="text-3xl font-bold text-black">
                Wishlist is Empty
              </h1>
              <p className="text-gray-600 mt-2">
                Start adding products you love
              </p>

              <Link
                to="/"
                className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (

          /* PRODUCT LIST */
          <div className="mt-6 space-y-4">
            {card.map(item => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 shadow-md hover:shadow-lg transition-shadow rounded-xl p-5 flex flex-col lg:grid lg:grid-cols-[3fr_1fr_1fr_2fr] gap-5 items-center"
              >

                {/* PRODUCT */}
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[80px] h-[80px] rounded-lg border border-gray-400"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-black">{item.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <FaUser className="text-black" />
                      <span>By Customer</span>
                    </div>
                  </div>
                </div>

                {/* PRICE */}
                <div className="text-black font-bold text-center w-full text-lg">
                  {item.price}
                </div>

                {/* STOCK */}
                <div className="text-green-600 font-semibold text-center w-full flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  In Stock
                </div>

                {/* ACTION */}
                <div className="flex gap-3 w-full justify-center lg:justify-end">
                  <Link 
                    to={"/addDeliveryAddress"} 
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-700 to-pink-900 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <FaShoppingCart /> Buy to cart
                  </Link>
                  
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition"
                  >
                    <MdDelete className="text-xl text-red-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CLEAR ALL */}
        {card.length !== 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={clearAllWishlist}
              className="px-10 py-3 bg-gradient-to-r from-pink-700 to-pink-900 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Clear Wishlist
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default WishList;