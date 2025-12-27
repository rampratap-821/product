import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaLock, FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProductModals = ({ onClose, category }) => {
  const images = [
    { id: 1, src: "https://htmldemo.net/alista/alista/assets/img/product/product28.jpg" },
    { id: 2, src: "https://htmldemo.net/alista/alista/assets/img/product/product30.jpg" },
    { id: 3, src: "https://htmldemo.net/alista/alista/assets/img/product/product31.jpg" },
    { id: 4, src: "https://htmldemo.net/alista/alista/assets/img/product/product27.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div
      className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-3 sm:px-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl p-5 sm:p-8 overflow-y-auto max-h-[90vh]"
      >
        {/* Header with Gradient Title */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] bg-clip-text text-transparent">
              ✨ Product Details
            </h1>
            <p className="text-sm text-gray-500 mt-1">Explore premium features & benefits</p>
          </div>
          <TiDeleteOutline
            onClick={onClose}
            className="text-3xl sm:text-4xl cursor-pointer text-black hover:text-gray-700 transition-all duration-300"
          />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Image Section */}
          <div className="space-y-6">
            {/* Main Image Container */}
            <div className="relative">
              <div className="relative h-64 sm:h-72 md:h-80 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200">
                <img
                  src={images[currentIndex].src}
                  alt="product"
                  className="w-52 sm:w-64 md:w-72 object-contain transition-all duration-500 hover:scale-105"
                />

                

                {/* Image Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                          ? 'w-8 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1]' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 overflow-x-auto pb-2 px-2">
              {images.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`min-w-[70px] cursor-pointer rounded-xl p-1 transition-all duration-300 ${
                    currentIndex === index
                      ? 'ring-2 ring-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1]'
                      : 'ring-1 ring-gray-200 hover:ring-gray-400'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt="" 
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {category.map(item => (
              <div key={item.id} className="space-y-4">
                {/* Title with Gradient */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] bg-clip-text text-transparent">
                    {item.title}
                  </h2>
                  
                  {/* Rating - Black Icons */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <FaStar 
                          key={i} 
                          className="text-black" 
                          size={16}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">(40k reviews)</span>
                    <span className="ml-auto text-sm bg-black text-white px-3 py-1 rounded-full">
                      🔥 Best Seller
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-black">
                    {item.price}
                  </h3>
                  <span className="bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] text-white px-4 py-1 rounded-full font-bold text-sm">
                    100% OFF
                  </span>
                </div>

                {/* Description */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-lg text-black mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-black">Quantity :</span>
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-2xl px-4 py-2">
                    <button 
                      onClick={decreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-all"
                    >
                      −
                    </button>
                    <span className="text-xl font-bold text-black w-8 text-center">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link 
                    className="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-bold text-center flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaShoppingCart className="text-white" />
                    Add to Cart & Pay
                  </Link>
                  <Link 
                    className="group bg-white border-2 border-black hover:bg-gray-50 text-black px-6 py-3 rounded-2xl font-bold text-center flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FaHeart className="text-black" />
                    Add to Wishlist
                  </Link>
                </div>

                {/* Secure Payment */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <div className="flex items-center justify-center gap-3 font-semibold text-black">
                    <div className="p-2 rounded-full bg-black text-white">
                      <FaLock className="text-white" />
                    </div>
                    <span className="text-lg">100% Secure Payment</span>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-center">
                    <div className="text-sm font-bold text-black">🚚 Free Delivery</div>
                    <div className="text-xs text-gray-600">On orders above $50</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-center">
                    <div className="text-sm font-bold text-black">↩️ 30-Day Return</div>
                    <div className="text-xs text-gray-600">Easy returns policy</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300">
                    #Premium
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300">
                    #Organic
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300">
                    #BestSeller
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300">
                    #NewArrival
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModals;