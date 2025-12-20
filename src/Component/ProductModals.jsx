
// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { FaCableCar, FaLock, FaTrain, FaTruckArrowRight } from "react-icons/fa6";
// import { TiDeleteOutline } from "react-icons/ti";
// import { Link } from "react-router-dom";

// const ProductModals = ({ onClose, category }) => {
//   console.log("pala --", category);




//   const images = [
//     {
//       id: 1,
//       src: "https://htmldemo.net/alista/alista/assets/img/product/product28.jpg",
//       title: "Vitamin C Brightening Face Wash",
//       description:
//         "Infused with vitamin C and natural lemon extracts to remove dirt and dullness, giving your skin a bright, fresh, and healthy look.",
//     },
//     {
//       id: 2,
//       src: "https://htmldemo.net/alista/alista/assets/img/product/product30.jpg",
//       title: "Charcoal Detox Face Mask",
//       description:
//         "This deep-cleansing mask draws out impurities, unclogs pores, and leaves your skin feeling clean, smooth, and refreshed.",
//     },
//     {
//       id: 3,
//       src: "https://htmldemo.net/alista/alista/assets/img/product/product31.jpg",
//       title: "Nourishing Hair Serum",
//       description:
//         "A blend of argan oil and keratin that smooths frizz, adds shine, and protects hair from heat damage and pollution.",
//     },
//     {
//       id: 4,
//       src: "https://htmldemo.net/alista/alista/assets/img/product/product27.jpg",
//       title: "SPF 50+ Sunscreen Lotion",
//       description:
//         "Lightweight and non-greasy protection from harmful UV rays. Keeps your skin safe and glowing under the sun.",
//     },

//   ];














//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

  
//   const handleClick = () => {
//     if (onClose) onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 "
//       onClick={handleClick}
//     >
//       <div
//         onClick={(event) => event.stopPropagation()}
//         className="bg-white px-10 py-6 rounded-2xl max-w-4xl w-full shadow-xl overflow-y-scroll h-[500px]"
//       >
       
//         <div className="flex justify-between items-center border-b pb-2 mb-4">
//           <h1 className="text-xl font-bold">Product Details  </h1>
//           <TiDeleteOutline
//             onClick={handleClick}
//             className="text-4xl text-gray-700 cursor-pointer hover:text-red-500 transition"
//           />
//         </div>

      
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        
//           <div className="w-full max-w-md mx-auto">
//             <div className="relative w-full h-72 border-2 border-pink-800 flex items-center justify-center rounded-2xl overflow-hidden shadow-md">
//               <img
//                 src={images[currentIndex].src}
//                 alt="product"
//                 className="w-60 h-60 object-contain transition-all duration-500 ease-in-out"
//               />

            
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 text-2xl bg-pink-800 p-2 rounded-full shadow  transition"
//               >
//                 <BsChevronCompactLeft />
//               </button>

         
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 text-2xl bg-pink-800 text-white p-2 rounded-full shadow  transition"
//               >
//                 <BsChevronCompactRight />
//               </button>
//             </div>

          
//             <div className="flex justify-center mt-4 gap-3">
//               {images.map((img, index) => (
//                 <div
//                   key={img.id}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`cursor-pointer border-2 rounded-md p-1 transition-all duration-300 ${currentIndex === index
//                     ? "border-green-600 scale-105"
//                     : "border-transparent hover:border-gray-300"
//                     }`}
//                 >
//                   <img
//                     src={img.src}
//                     alt="thumbnail"
//                     className="w-14 h-14 object-contain"
//                   />

//                 </div>
//               ))}
//             </div>
//           </div>

        
//           <div className="">
//             {
//               category.map((item) =>
//                 <div key={item.id}>
//                   <h1 className="text-xl font-bold pb-2 text-green-800">{item.title}</h1>
//                   <h1 className="text-gray-800">By customer</h1>
//                   <h1>⭐⭐⭐⭐⭐(40k) views</h1>
//                   <h1 className="text-2xl text-green-700 pt-2 font-bold">{item.price}</h1>
//                   <div className="mt-5">
//                     <span className=" text-xl font-semibold bg-red-200   px-2 rounded-2xl ">100% off</span>
//                   </div>
//                   <h1 className="pt-2 font-bold">Description</h1>
//                   <h1>{item.description}</h1>
//                   <div className="pt-3">
//                     <span>Quantity : </span>
//                     <span className=" border border-gray-400 px-2">-  1  +   </span>
//                   </div>
//                   <div className="flex  justify-between py-5  text-white">
//                     <div className="bg-blue-800 py-2 px-2 rounded font-bold "><Link>Add to card & Pay now</Link></div>
                  
//                   <div  className="bg-green-800 py-2 px-7 rounded font-bold">
//                     <Link>WishList</Link>
//                   </div>
//                   </div>

//                      <div className="flex items-center justify-center gap-3 font-bold bg-red-900 py-2 rounded text-white">
//                      <FaLock></FaLock>
//                       <h1>Secure Payment</h1>
//                      </div>
//                      <hr></hr>
                    
//                 </div>
//               )
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModals;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaLock, FaStar } from "react-icons/fa";
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

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-3 sm:px-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl p-5 sm:p-8 overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-500 bg-clip-text text-transparent">
            Product Details
          </h1>
          <TiDeleteOutline
            onClick={onClose}
            className="text-3xl sm:text-4xl cursor-pointer text-black hover:text-red-600 transition"
          />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Image Section */}
          <div>
            <div className="relative h-64 sm:h-72 md:h-80 bg-white rounded-2xl flex items-center justify-center border border-pink-500">
              <img
                src={images[currentIndex].src}
                alt="product"
                className="w-52 sm:w-64 md:w-72 object-contain transition duration-500 hover:scale-105"
              />

              <button
                onClick={prevSlide}
                className="absolute left-3 bg-black text-white p-2 rounded-full"
              >
                <BsChevronCompactLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 bg-black text-white p-2 rounded-full"
              >
                <BsChevronCompactRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`min-w-[60px] cursor-pointer border-2 rounded-lg p-2 transition ${
                    currentIndex === index
                      ? "border-pink-500 scale-105"
                      : "border-gray-300"
                  }`}
                >
                  <img src={img.src} alt="" className="w-12 h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            {category.map(item => (
              <div key={item.id}>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {item.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 text-black mt-1">
                  {[1,2,3,4,5].map(i => <FaStar key={i} />)}
                  <span className="ml-2 text-sm">(40k reviews)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-black mt-3">
                  {item.price}
                </h3>

                <span className="inline-block mt-3 bg-pink-100 text-black px-3 py-1 rounded-full font-semibold">
                  100% OFF
                </span>

                <h4 className="mt-4 font-bold text-black text-lg">
                  Description
                </h4>
                <p className="text-black text-sm sm:text-base">
                  {item.description}
                </p>

                {/* Quantity */}
                <div className="mt-4 text-black">
                  <span className="font-semibold">Quantity :</span>
                  <span className="ml-2 border px-3 py-1 rounded">
                    - 1 +
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-xl font-bold text-center">
                    Add to Cart & Pay
                  </Link>
                  <Link className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-xl font-bold text-center">
                    Wishlist
                  </Link>
                </div>

                {/* Secure */}
                <div className="flex items-center gap-3 mt-6 bg-black text-white py-2 rounded-xl justify-center">
                  <FaLock />
                  <span className="font-semibold">Secure Payment</span>
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
