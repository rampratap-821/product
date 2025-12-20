import React, { useState } from "react";
import { HoverImageData } from "../JsonData/Home_Json";
import { FaEye, FaHeart, FaShareAlt, FaBoxOpen } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductModals from "../Component/ProductModals";

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
        <section className="w-full  bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h4 className="text-sm uppercase tracking-widest text-white/80">
            Our Product
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
            Premium Beauty <br />
            <span className="text-white">Cosmetic Collection</span>
          </h1>

          <p className="text-white/90 mt-5 max-w-md">
            Discover high-quality cosmetics made with skin-friendly ingredients.
            Enhance your beauty with confidence and care.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Shop Now
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition">
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

      <div className="w-full py-12 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-10">
          <FaBoxOpen className="text-5xl mx-auto text-green-700 mb-3" />
          <h1 className="text-4xl font-bold text-gray-800">
            OUR PRODUCTS
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
          {HoverImageData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE AREA */}
              <div className="relative h-60 bg-white flex items-center justify-center overflow-hidden rounded-t-xl group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain p-4 transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* HOVER ICONS */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
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
                               transform scale-75 translate-y-4
                               group-hover:scale-100 group-hover:translate-y-0
                               transition-all duration-300 hover:bg-red-500 hover:text-white"
                  >
                    <FaHeart />
                  </button>

                  <button
                    className="p-3 bg-white rounded-full
                               transform scale-75 translate-y-4
                               group-hover:scale-100 group-hover:translate-y-0
                               transition-all duration-300 delay-75
                               hover:bg-blue-500 hover:text-white"
                  >
                    <FaShareAlt />
                  </button>

                  <button
                    onClick={() => addModals(item.id)}
                    className="p-3 bg-white rounded-full
                               transform scale-75 translate-y-4
                               group-hover:scale-100 group-hover:translate-y-0
                               transition-all duration-300 delay-150
                               hover:bg-green-600 hover:text-white"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h1>
                <p className="text-yellow-500 text-sm">★★★★★</p>
                <p className="text-green-700 font-bold mt-1">
                  ₹ {item.price}
                </p>
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

// import React, { useEffect, useRef, useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { ToastContainer, toast, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import ProductModals from '../Component/ProductModals'

// const Our_Product = ({ card, setCard }) => {
//   const [category, setCatgory] = useState("")
//   const [show, setShow] = useState(false)
//   const [visible, setVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.25 }
//     )
//     if (ref.current) io.observe(ref.current)
//     return () => io.disconnect()
//   }, [])

//   const addToCard = (id, price, title, image) => {
//     const obj = { id, price, title, image }
//     setCard([...card, obj])

//     toast.success('🛒 Added to cart', {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "dark",
//       transition: Bounce,
//     })
//   }

//   const addModals = (id) => {
//     const handle = HoverImageData.filter((item) => item.id == id)
//     setCatgory(handle)
//     setShow(true)
//   }

//   return (
//     <>
//       <ToastContainer />

//       <section ref={ref} className="bg-white py-20">
//         {/* Heading */}
//         <div
//           className={`text-center mb-16 transition-all duration-700
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <h1 className="text-5xl font-semibold text-gray-900">
//             Our Products
//           </h1>
//           <p className="text-pink-500 mt-2 text-sm uppercase tracking-widest">
//             Beauty You’ll Love
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
//           {HoverImageData.map((item, i) => (
//             <div
//               key={item.id}
//               style={{ transitionDelay: `${i * 100}ms` }}
//               className={`bg-black rounded-3xl overflow-hidden
//               transition-all duration-500 ease-out
//               hover:-translate-y-2 hover:shadow-2xl
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-60 object-cover"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-5 text-center">
//                 <h2 className="text-white font-medium text-lg">
//                   {item.title}
//                 </h2>
//                 <p className="text-pink-500 mt-1">★★★★★</p>
//                 <p className="text-pink-400 font-semibold mt-2">
//                   {item.price}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex justify-center gap-4 pb-5">
//                 <button
//                   onClick={() =>
//                     addToCard(item.id, item.price, item.title, item.image)
//                   }
//                   className="p-2.5 rounded-full bg-pink-500 text-white
//                   hover:bg-pink-600 transition"
//                 >
//                   <FaHeart />
//                 </button>

//                 <button
//                   className="p-2.5 rounded-full bg-gray-800 text-white
//                   hover:bg-gray-700 transition"
//                 >
//                   <FaShare />
//                 </button>

//                 <button
//                   onClick={() => addModals(item.id)}
//                   className="p-2.5 rounded-full border border-gray-600 text-gray-300
//                   hover:bg-gray-800 transition"
//                 >
//                   <FaEyeSlash />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {show && (
//         <ProductModals
//           onClose={() => setShow(false)}
//           category={category}
//         />
//       )}
//     </>
//   )
// }

// export default Our_Product


// import React, { useEffect, useRef, useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { ToastContainer, toast, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import ProductModals from '../Component/ProductModals'

// const Our_Product = ({ card, setCard }) => {
//   const [category, setCatgory] = useState("")
//   const [show, setShow] = useState(false)
//   const [visible, setVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.25 }
//     )
//     if (ref.current) io.observe(ref.current)
//     return () => io.disconnect()
//   }, [])

//   const addToCard = (id, price, title, image) => {
//     const obj = { id, price, title, image }
//     setCard([...card, obj])

//     toast.success('🛒 Added to cart', {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "dark",
//       transition: Bounce,
//     })
//   }

//   const addModals = (id) => {
//     const handle = HoverImageData.filter((item) => item.id == id)
//     setCatgory(handle)
//     setShow(true)
//   }

//   return (
//     <>
//       <ToastContainer />

//       <section ref={ref} className="bg-white py-20">
//         {/* Heading */}
//         <div
//           className={`text-center mb-16 transition-all duration-700
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <h1 className="text-5xl font-semibold text-gray-900">
//             Our Products
//           </h1>
//           <p className="text-pink-500 mt-2 text-sm uppercase tracking-widest">
//             Beauty You’ll Love
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {HoverImageData.map((item, i) => (
//             <div
//               key={item.id}
//               style={{ transitionDelay: `${i * 100}ms` }}
//               className={`group relative rounded-3xl overflow-hidden
//               bg-pink-800 border border-gray-800
//               transition-all duration-500
//               hover:shadow-[0_20px_60px_rgba(255,0,150,0.25)]
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover
//                   transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0
//                 group-hover:opacity-100 transition duration-500
//                 flex items-center justify-center gap-4">
//                   <button
//                     onClick={() =>
//                       addToCard(item.id, item.price, item.title, item.image)
//                     }
//                     className="p-3 rounded-full bg-pink-500 text-white
//                     hover:bg-pink-600 transition"
//                   >
//                     <FaHeart />
//                   </button>

//                   <button
//                     className="p-3 rounded-full bg-gray-800 text-white
//                     hover:bg-gray-700 transition"
//                   >
//                     <FaShare />
//                   </button>

//                   <button
//                     onClick={() => addModals(item.id)}
//                     className="p-3 rounded-full border border-gray-400 text-white
//                     hover:bg-white hover:text-black transition"
//                   >
//                     <FaEyeSlash />
//                   </button>
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="text-center py-5 px-4">
//                 <h2 className="text-white font-semibold text-lg">
//                   {item.title}
//                 </h2>
//                 <p className="text-pink-500 text-sm mt-1">★★★★★</p>
//                 <p className="text-pink-400 font-bold mt-2 text-lg">
//                   {item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {show && (
//         <ProductModals
//           onClose={() => setShow(false)}
//           category={category}
//         />
//       )}
//     </>
//   )
// }

// export default Our_Product



// import React, { useEffect, useRef, useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { ToastContainer, toast, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import ProductModals from '../Component/ProductModals'

// const Our_Product = ({ card, setCard }) => {
//   const [category, setCatgory] = useState("")
//   const [show, setShow] = useState(false)
//   const [visible, setVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.25 }
//     )
//     if (ref.current) io.observe(ref.current)
//     return () => io.disconnect()
//   }, [])

//   const addToCard = (id, price, title, image) => {
//     const obj = { id, price, title, image }
//     setCard([...card, obj])

//     toast.success('🛒 Added to cart', {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "light",
//       transition: Bounce,
//     })
//   }

//   const addModals = (id) => {
//     const handle = HoverImageData.filter((item) => item.id == id)
//     setCatgory(handle)
//     setShow(true)
//   }

//   return (
//     <>
//       <ToastContainer />

//       <section ref={ref} className="bg-white py-20">
//         {/* Heading */}
//         <div
//           className={`text-center mb-16 transition-all duration-700
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <h1 className="text-5xl font-semibold text-black">
//             Our Products
//           </h1>
//           <p className="text-gray-600 mt-2 text-sm uppercase tracking-widest">
//             Beauty You'll Love
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {HoverImageData.map((item, i) => (
//             <div
//               key={item.id}
//               style={{ transitionDelay: `${i * 100}ms` }}
//               className={`group relative rounded-3xl overflow-hidden
//               bg-white border border-gray-300
//               transition-all duration-500
//               hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover
//                   transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/80 opacity-0
//                 group-hover:opacity-100 transition duration-500
//                 flex items-center justify-center gap-4">
//                   <button
//                     onClick={() =>
//                       addToCard(item.id, item.price, item.title, item.image)
//                     }
//                     className="p-3 rounded-full bg-black text-white
//                     hover:bg-gray-800 transition"
//                   >
//                     <FaHeart />
//                   </button>

//                   <button
//                     className="p-3 rounded-full bg-gray-700 text-white
//                     hover:bg-gray-600 transition"
//                   >
//                     <FaShare />
//                   </button>

//                   <button
//                     onClick={() => addModals(item.id)}
//                     className="p-3 rounded-full border border-gray-400 text-white
//                     hover:bg-white hover:text-black transition"
//                   >
//                     <FaEyeSlash />
//                   </button>
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="text-center py-5 px-4">
//                 <h2 className="text-black font-semibold text-lg">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-500 text-sm mt-1">★★★★★</p>
//                 <p className="text-black font-bold mt-2 text-lg">
//                   {item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {show && (
//         <ProductModals
//           onClose={() => setShow(false)}
//           category={category}
//         />
//       )}
//     </>
//   )
// }

// export default Our_Product
