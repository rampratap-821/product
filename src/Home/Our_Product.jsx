;

import React, { useState } from "react";
import { HoverImageData } from "../JsonData/Home_Json";
import { FaEye, FaHeart, FaShareAlt, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductModals from "../Component/ProductModals";
import { Link } from "react-router-dom";

const Our_Product = ({ card, setCard }) => {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);

  const addToCard = (id, price, title, image) => {
    setCard([...card, { id, price, title, image }]);
    toast.success("Added to cart successfully", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
  };

  const addModals = (id) => {
    const handle = HoverImageData.filter((item) => item.id === id);
    setCategory(handle);
    setShow(true);
  };

  return (
    <>
      <section className="w-full   py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 black">
            <h4 className="text-lg font-bold uppercase tracking-widest text-black">
              Our Product
            </h4>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
              Premium Beauty <br />
              <span className="black">Cosmetic Collection</span>
            </h1>

            <p className="text-black mt-5 max-w-md">
              Discover high-quality cosmetics made with skin-friendly ingredients.
              Enhance your beauty with confidence and care.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Shop Now
              </button>
              <button className=" bg-black  text-white border border-white px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition">
                View Products
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
              alt="Our Product"
              className="w-80 md:w-[420px] rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      <ToastContainer />

      <div className="w-full py-12 bg-white">
        {/* Heading */}
        <div className="text-center mb-10">
        
          <h1 className="text-4xl font-bold text-gray-800">
            OUR PRODUCTS
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
          {HoverImageData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              {/* IMAGE AREA */}
              <div className="relative h-60 bg-white flex items-center justify-center overflow-hidden rounded-t-xl group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                />

                {/* HOVER ICONS - Bounce animation except Add to Cart */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {/* Heart Icon - Bounce */}
                  <button
                    onClick={() =>
                      addToCard(
                        item.id,
                        item.price,
                        item.title,
                        item.image
                      )
                    }
                    className="p-3 bg-white rounded-full
                               transform -translate-y-10 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500 hover:animate-bounce
                               hover:bg-red-500 hover:text-white"
                    style={{ transitionDelay: "0ms" }}
                  >
                    <FaHeart />
                  </button>

                  {/* Share Icon - Bounce */}
                  <button
                    className="p-3 bg-white rounded-full
                               transform -translate-y-10 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500 hover:animate-bounce
                               hover:bg-blue-500 hover:text-white"
                    style={{ transitionDelay: "100ms" }}
                  >
                    <FaShareAlt />
                  </button>

                  {/* Eye Icon - Bounce */}
                  <button
                    onClick={() => addModals(item.id)}
                    className="p-3 bg-white rounded-full
                               transform -translate-y-10 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500 hover:animate-bounce
                               hover:bg-green-600 hover:text-white"
                    style={{ transitionDelay: "200ms" }}
                  >
                    <FaEye />
                  </button>
                </div>
              </div>

              {/* CONTENT - Bounce on hover */}
              <div className="p-4 text-center flex-grow group-hover:animate-pulse">
                <h1 className="text-lg font-semibold text-black transform transition-transform duration-500 group-hover:scale-105">
                  {item.title}
                </h1>
                <p className="text-yellow-500 text-sm transform transition-transform duration-500 group-hover:scale-110">
                  ★★★★★
                </p>
                <p className="text-black font-bold mt-1 transform transition-transform duration-500 group-hover:scale-110">
                  ₹ {item.price}
                </p>
              </div>

              {/* ADD TO CART BUTTON - No bounce animation */}
              <div className="p-4 pt-0">
                <Link
                to={"payment"}
                  className="w-full bg-gradient-to-r from-pink-700 to-pink-700 
                           text-white py-3 rounded-lg font-semibold
                           flex items-center justify-center gap-2
                           hover:from-pink-700 hover:to-pink-700 
                           transition-all duration-300 hover:scale-[1.02] 
                           active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                  < button
                    onClick={() =>
                      addToCard(
                        item.id,
                        item.price,
                        item.title,
                        item.image,
                      )
                    }
                  >
                  Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT MODAL */}
      {show && (
        <ProductModals
          onClose={() => setShow(false)}
          category={category}
        />
      )}
    </>
  );
};

export default Our_Product;