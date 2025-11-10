
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaCableCar, FaLock, FaTrain, FaTruckArrowRight } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProductModals = ({ onClose, category }) => {
  console.log("pala --", category);




  const images = [
    {
      id: 1,
      src: "https://htmldemo.net/alista/alista/assets/img/product/product28.jpg",
      title: "Vitamin C Brightening Face Wash",
      description:
        "Infused with vitamin C and natural lemon extracts to remove dirt and dullness, giving your skin a bright, fresh, and healthy look.",
    },
    {
      id: 2,
      src: "https://htmldemo.net/alista/alista/assets/img/product/product30.jpg",
      title: "Charcoal Detox Face Mask",
      description:
        "This deep-cleansing mask draws out impurities, unclogs pores, and leaves your skin feeling clean, smooth, and refreshed.",
    },
    {
      id: 3,
      src: "https://htmldemo.net/alista/alista/assets/img/product/product31.jpg",
      title: "Nourishing Hair Serum",
      description:
        "A blend of argan oil and keratin that smooths frizz, adds shine, and protects hair from heat damage and pollution.",
    },
    {
      id: 4,
      src: "https://htmldemo.net/alista/alista/assets/img/product/product27.jpg",
      title: "SPF 50+ Sunscreen Lotion",
      description:
        "Lightweight and non-greasy protection from harmful UV rays. Keeps your skin safe and glowing under the sun.",
    },

  ];














  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  
  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 "
      onClick={handleClick}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white px-10 py-6 rounded-2xl max-w-4xl w-full shadow-xl overflow-y-scroll h-[500px]"
      >
       
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h1 className="text-xl font-bold">Product Details  </h1>
          <TiDeleteOutline
            onClick={handleClick}
            className="text-4xl text-gray-700 cursor-pointer hover:text-red-500 transition"
          />
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        
          <div className="w-full max-w-md mx-auto">
            <div className="relative w-full h-72 border-2 border-pink-800 flex items-center justify-center rounded-2xl overflow-hidden shadow-md">
              <img
                src={images[currentIndex].src}
                alt="product"
                className="w-60 h-60 object-contain transition-all duration-500 ease-in-out"
              />

            
              <button
                onClick={prevSlide}
                className="absolute left-2 text-2xl bg-pink-800 p-2 rounded-full shadow  transition"
              >
                <BsChevronCompactLeft />
              </button>

         
              <button
                onClick={nextSlide}
                className="absolute right-2 text-2xl bg-pink-800 text-white p-2 rounded-full shadow  transition"
              >
                <BsChevronCompactRight />
              </button>
            </div>

          
            <div className="flex justify-center mt-4 gap-3">
              {images.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer border-2 rounded-md p-1 transition-all duration-300 ${currentIndex === index
                    ? "border-green-600 scale-105"
                    : "border-transparent hover:border-gray-300"
                    }`}
                >
                  <img
                    src={img.src}
                    alt="thumbnail"
                    className="w-14 h-14 object-contain"
                  />

                </div>
              ))}
            </div>
          </div>

        
          <div className="">
            {
              category.map((item) =>
                <div key={item.id}>
                  <h1 className="text-xl font-bold pb-2 text-green-800">{item.title}</h1>
                  <h1 className="text-gray-800">By customer</h1>
                  <h1>⭐⭐⭐⭐⭐(40k) views</h1>
                  <h1 className="text-2xl text-green-700 pt-2 font-bold">{item.price}</h1>
                  <div className="mt-5">
                    <span className=" text-xl font-semibold bg-red-200   px-2 rounded-2xl ">100% off</span>
                  </div>
                  <h1 className="pt-2 font-bold">Description</h1>
                  <h1>{item.description}</h1>
                  <div className="pt-3">
                    <span>Quantity : </span>
                    <span className=" border border-gray-400 px-2">-  1  +   </span>
                  </div>
                  <div className="flex  justify-between py-5  text-white">
                    <div className="bg-blue-800 py-2 px-2 rounded font-bold "><Link>Add to card & Pay now</Link></div>
                  
                  <div  className="bg-green-800 py-2 px-7 rounded font-bold">
                    <Link>WishList</Link>
                  </div>
                  </div>

                     <div className="flex items-center justify-center gap-3 font-bold bg-red-900 py-2 rounded text-white">
                     <FaLock></FaLock>
                      <h1>Secure Payment</h1>
                     </div>
                     <hr></hr>
                    
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModals;
