




// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";



// const ProductModals = (props) => {

//   const handleClick = (event) => {
//         if (props.onClose) props.onClose();
//     };

//    const images = [
//     { id: 1, src: "https://cdn-icons-png.flaticon.com/512/706/706164.png" },
//     { id: 2, src: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png" },
//     { id: 3, src: "https://cdn-icons-png.flaticon.com/512/4151/4151418.png" },
//     { id: 4, src: "https://cdn-icons-png.flaticon.com/512/706/706164.png" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 ' onClick={handleClick}>

//       <div onClick={(event) => event.stopPropagation()} className='bg-white px-10 rounded-2xl'>

//         <div className='flex justify-between  pt-2 border-b-2 border-gray-800'>
//           <h1 className='text-xl font-bold'>Products Details</h1>
//           <div onClick={handleClick}>
//             <TiDeleteOutline className='text-4xl'></TiDeleteOutline>
//           </div>
//         </div>

//         <div className='grid grid-cols-2'>





//  <div className="w-full max-w-md mx-auto">
//       {/* Main Image Container */}
//       <div className="relative w-full h-72 bg-gray-100 flex items-center justify-center rounded-2xl overflow-hidden shadow-md">
//         <img
//           src={images[currentIndex].src}
//           alt="product"
//           className="w-60 h-60 object-contain transition-all duration-500 ease-in-out"
//         />

//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 text-2xl bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//         >
//           <BsChevronCompactLeft />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 text-2xl bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
//         >
//           <BsChevronCompactRight />
//         </button>
//       </div>

//       {/* Thumbnail Images */}
//       <div className="flex justify-center mt-4 gap-3">
//         {images.map((img, index) => (
//           <div
//             key={img.id}
//             onClick={() => setCurrentIndex(index)}
//             className={`cursor-pointer border-2 rounded-md p-1 transition-all duration-300 ${
//               currentIndex === index
//                 ? "border-green-600 scale-105"
//                 : "border-transparent hover:border-gray-300"
//             }`}
//           >
//             <img
//               src={img.src}
//               alt="thumbnail"
//               className="w-14 h-14 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>









//         </div>



//         <div>

//         </div>


//       </div>
//     </div>

//   );
// };

// export default ProductModals;






import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";

const ProductModals = ({ onClose,card, }) => {
  console.log("pala --" ,card);
        
  

  
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

  // 👇 handleClick function define kiya
  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleClick}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white px-10 py-6 rounded-2xl max-w-4xl w-full shadow-xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h1 className="text-xl font-bold">Product Details {card[0].id} </h1>
          <TiDeleteOutline
            onClick={handleClick}
            className="text-4xl text-gray-700 cursor-pointer hover:text-red-500 transition"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT SIDE - Image Slider */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative w-full h-72 border-2 border-pink-800 flex items-center justify-center rounded-2xl overflow-hidden shadow-md">
              <img
                src={images[currentIndex].src}
                alt="product"
                className="w-60 h-60 object-contain transition-all duration-500 ease-in-out"
              />

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 text-2xl bg-pink-800 p-2 rounded-full shadow  transition"
              >
                <BsChevronCompactLeft />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 text-2xl bg-pink-800 text-white p-2 rounded-full shadow  transition"
              >
                <BsChevronCompactRight />
              </button>
            </div>

            {/* Thumbnails */}
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

          {/* RIGHT SIDE - Product Info */}
          <div className="">
             {
              card.map((item)=>
              <div key={item.id}>
               <h1 className="text-xl font-bold pb-2 text-green-800">{item.title}</h1>
               <h1 className="text-gray-800">By cosmetic</h1>
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
