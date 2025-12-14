// // // import React, { useState, useEffect } from 'react';
// // // import banner1 from "../assets/Icons/Banner1.jpeg";
// // // import banner2 from "../assets/Icons/Banner2.jpeg";
// // // import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// // // import { RxDot, RxDotFilled } from 'react-icons/rx';

// // // const dataSlider = [
// // //   {
// // //     id: "1",
// // //     imageUrl: banner1,
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks One",
// // //       subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // //   {
// // //     id: "2",
// // //     imageUrl: banner2,
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks Two",
// // //       subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // //   {
// // //     id: "3",
// // //     imageUrl:
// // //       "https://t3.ftcdn.net/jpg/15/36/40/70/240_F_1536407091_PtCL3kqQTdU2pMOkAcwQj9Dq5OsYGK9d.jpg",
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks Three",
// // //       subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // // ];

// // // const SliderImage = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const nextSlider = () => {
// // //     const isFirstSlider = currentIndex === 0;
// // //     const newIndex = isFirstSlider ? dataSlider.length - 1 : currentIndex - 1;
// // //     setCurrentIndex(newIndex);
// // //   };

// // //   const previousSlider = () => {
// // //     const isLastSlider = currentIndex === dataSlider.length - 1;
// // //     const newIndex = isLastSlider ? 0 : currentIndex + 1;
// // //     setCurrentIndex(newIndex);
// // //   };

// // //   // useEffect(() => {
// // //   //   const interval = setInterval(() => {
// // //   //     nextSlider();
// // //   //   }, 4000);
// // //   //   return () => clearInterval(interval);
// // //   // }, [currentIndex]);

// // //   return (
// // //     <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden  ">

// // //       <div
// // //         className="w-full h-full  bg-cover mt-10 "
// // //         style={{
// // //           backgroundImage: `url(${dataSlider[currentIndex].imageUrl})`,
// // //           // backgroundSize: "cover",
// // //           backgroundPosition: "center",
// // //           backgroundRepeat: "no-repeat",
// // //         }}
// // //       ></div>

// // //      z
// // //       <div
// // //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition"
// // //         onClick={nextSlider}
// // //       >
// // //         <BsChevronCompactLeft size={24} />
// // //       </div>


// // //       <div
// // //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition"
// // //         onClick={previousSlider}
// // //       >
// // //         <BsChevronCompactRight size={24} />
// // //       </div>


// // //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
// // //         {dataSlider.map((slider, index) => (
// // //           <div key={slider.id} className="cursor-pointer text-3xl">
// // //             {index === currentIndex ? (
// // //               <RxDotFilled className="text-orange-500" />
// // //             ) : (
// // //               <RxDot className="text-white" />
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>


// // //       <div className="absolute bottom-12 left-8 translate-y-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bold text-2xl sm:text-4xl">
// // //         {dataSlider[currentIndex].body.mainText}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SliderImage;




















// // // import React, { useState, useEffect } from "react";
// // // import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// // // import { RxDot, RxDotFilled } from "react-icons/rx";

// // // const dataSlider = [
// // //   {
// // //     id: "1",
// // //     imageUrl:
// // //       "https://images.unsplash.com/photo-1602928321679-560bb453f190?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA3fHxwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks One",
// // //       subText:
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // //   {
// // //     id: "2",
// // //     imageUrl:
// // //       "https://plus.unsplash.com/premium_photo-1661380586936-af10aa12b232?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHxwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks Two",
// // //       subText:
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // //   {
// // //     id: "3",
// // //     imageUrl:
// // //       "https://plus.unsplash.com/premium_photo-1664303418178-b8767b25f646?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc3fHxwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500j",
// // //     button: { text: "Shop Now", cssClasses: "text-white" },
// // //     body: {
// // //       cssClasses: "text-white",
// // //       mainText: "Perfume Tips Tricks Three",
// // //       subText:
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
// // //     },
// // //   },
// // // ];

// // // const SliderImage = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const nextSlider = () => {
// // //     const isLastSlide = currentIndex === dataSlider.length - 1;
// // //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// // //     setCurrentIndex(newIndex);
// // //   };

// // //   const prevSlider = () => {
// // //     const isFirstSlide = currentIndex === 0;
// // //     const newIndex = isFirstSlide ? dataSlider.length - 1 : currentIndex - 1;
// // //     setCurrentIndex(newIndex);
// // //   };

// // //   // useEffect(() => {
// // //   //   const interval = setInterval(() => {
// // //   //     nextSlider();
// // //   //   }, 3000); 
// // //   //   return () => clearInterval(interval);
// // //   // }, [currentIndex]);

// // //   return (
// // //     <div className="w-full h-[500px] relative text-white  overflow-hidden ">
// // //       <div className="mt-0">
// // //         <img
// // //           src={dataSlider[currentIndex].imageUrl}
// // //           className='w-full h-full object-cover  sm:p-2 md:p-2 lg:p-0 p-2 duration-500 '
// // //           alt="slider"
// // //         />
// // //       </div>
// // //       <div
// // //         className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full cursor-pointer"
// // //         onClick={prevSlider}
// // //       >
// // //         <BsChevronCompactLeft size={30} />
// // //       </div>

// // //       <div
// // //         className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full cursor-pointer"
// // //         onClick={nextSlider}
// // //       >
// // //         <BsChevronCompactRight size={30} />
// // //       </div>

// // //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
// // //         {dataSlider.map((slider, index) => (
// // //           <div
// // //             key={slider.id}
// // //             className="text-3xl cursor-pointer"
// // //             onClick={() => setCurrentIndex(index)}
// // //           >
// // //             {index === currentIndex ? (
// // //               <RxDotFilled className="text-pink-500" />
// // //             ) : (
// // //               <RxDot className="text-white" />
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SliderImage;



// // // SliderImage.jsx
// // import React, { useState } from "react";
// // import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// // import { RxDot, RxDotFilled } from "react-icons/rx";

// // const dataSlider = [
// //   {
// //     id: "1",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=60&w=500",
// //     mainText: "Perfume Tips Tricks One",
// //     subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //   },
// //   {
// //     id: "2",
// //     imageUrl:
// //       "https://plus.unsplash.com/premium_photo-1661380586936-af10aa12b232?auto=format&fit=crop&q=60&w=500",
// //     mainText: "Perfume Tips Tricks Two",
// //     subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //   },
// //   {
// //     id: "3",
// //     imageUrl:
// //       "https://plus.unsplash.com/premium_photo-1664303418178-b8767b25f646?auto=format&fit=crop&q=60&w=500",
// //     mainText: "Perfume Tips Tricks Three",
// //     subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //   },
// // ];

// // const SliderImage = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextSlider = () =>
// //     setCurrentIndex((prev) => (prev === dataSlider.length - 1 ? 0 : prev + 1));

// //   const prevSlider = () =>
// //     setCurrentIndex((prev) => (prev === 0 ? dataSlider.length - 1 : prev - 1));

// //   return (
// //     <div className="w-full h-[500px] relative mt-0 ">
// //       {/* Slider Image */}
// //       <img
// //         src={dataSlider[currentIndex].imageUrl}
// //         className="w-full h-full object-cover duration-500"
// //         alt="slider"
// //       />

// //       {/* LEFT BUTTON */}
// //       <button
// //         className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full"
// //         onClick={prevSlider}
// //       >
// //         <BsChevronCompactLeft size={30} />
// //       </button>

// //       {/* RIGHT BUTTON */}
// //       <button
// //         className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full"
// //         onClick={nextSlider}
// //       >
// //         <BsChevronCompactRight size={30} />
// //       </button>

// //       {/* DOTS */}
// //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
// //         {dataSlider.map((slide, index) => (
// //           <div
// //             key={slide.id}
// //             onClick={() => setCurrentIndex(index)}
// //             className="cursor-pointer text-3xl"
// //           >
// //             {index === currentIndex ? (
// //               <RxDotFilled className="text-pink-500" />
// //             ) : (
// //               <RxDot className="text-white" />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SliderImage;




// // import React, { useEffect, useState } from "react";
// // import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// // import { RxDot, RxDotFilled } from "react-icons/rx";
// // import banner1 from "../assets/Images/creepy-young-female-standing-with-zombie-hand.jpg"
// // import banner2 from "../assets/Images/front-view-blonde-woman-with-cosmetic-powder-brush.jpg"
// // import banner3 from "../assets/Images/young-woman-black-smokes-electronic-cigarette-dark-wall.jpg"
// // const dataSlider = [
// //   {
// //     id: "1",
// //     imageUrl:
// //       banner1,
// //   },
// //   {
// //     id: "2",
// //     imageUrl:
// //     banner2,
// //   },
// //   {
// //     id: "3",
// //     imageUrl:
// //       banner3,
// //   },
  
// // ];

// // const SliderImage = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextSlide = () =>
// //     setCurrentIndex((prev) => (prev === dataSlider.length - 1 ? 0 : prev + 1));

// //   const prevSlide = () =>
// //     setCurrentIndex((prev) => (prev === 0 ? dataSlider.length - 1 : prev - 1));


// //   return (
// //     <>
   
// //     <div className="w-full h-[600px] relative overflow-hidden ">
// //       <img
// //         src={dataSlider[currentIndex].imageUrl}
// //         className="w-full h-full object-cover duration-500 "
// //         alt="slider"
// //       />

// //       {/* Left Button */}
// //       <button
// //         onClick={prevSlide}
// //         className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 text-white rounded-full"
// //       >
// //         <BsChevronCompactLeft size={30} />
// //       </button>

// //       {/* Right Button */}
// //       <button
// //         onClick={nextSlide}
// //         className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black p-2 text-white rounded-full"
// //       >
// //         <BsChevronCompactRight size={30} />
// //       </button>

// //       {/* Dots */}
// //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
// //         {dataSlider.map((_, index) => (
// //           <div
// //             key={index}
// //             onClick={() => setCurrentIndex(index)}
// //             className="cursor-pointer text-3xl"
// //           >
// //             {index === currentIndex ? (
// //               <RxDotFilled className="text-pink-500" />
// //             ) : (
// //               <RxDot className="text-white" />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default SliderImage;



// import React, { useEffect, useRef, useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight, BsStarFill } from "react-icons/bs";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ServiceHero() {
//   const ref = useRef(null);
//   const [show, setShow] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [girlIndex, setGirlIndex] = useState(0);

//   const cosmeticGirls = [
//     "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
//     "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
//     "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
//   ];

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setShow(true),
//       { threshold: 0.2 }
//     );
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);

//   // Vertical image auto slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGirlIndex((prev) => (prev === cosmeticGirls.length - 1 ? 0 : prev + 1));
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={cosmeticGirls[girlIndex]}
//           className="h-full w-full object-cover scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
//       </div>

//       {/* LEFT CONTENT */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={show ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="lg:w-1/2"
//         >
//           <div className="flex items-center gap-2 mb-6">
//             {[...Array(5)].map((_, i) => (
//               <BsStarFill key={i} className="text-yellow-400" />
//             ))}
//             <span className="text-yellow-400 font-bold tracking-widest">
//               PREMIUM COSMETICS
//             </span>
//           </div>

//           <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
//             <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
//               Beauty
//             </span>
//             <span className="block text-white">That Defines You</span>
//           </h1>

//           <p className="text-2xl font-bold text-white mb-8">
//             Luxury Makeup • Skincare • Timeless Glow ✨
//           </p>

//           <div className="flex flex-wrap gap-3 mb-8">
//             {["Dermatology Tested", "Luxury Formula", "Long Lasting Glow"].map(
//               (item, i) => (
//                 <span
//                   key={i}
//                   className="bg-pink-500/20 border border-pink-400/30 px-4 py-2 rounded-full text-white backdrop-blur-sm"
//                 >
//                   ✨ {item}
//                 </span>
//               )
//             )}
//           </div>

//           <p className="text-gray-300 max-w-xl mb-8 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
//             <span className="text-pink-400 text-3xl">"</span>
//             Discover beauty that enhances your natural glow. Our premium cosmetic
//             range is crafted for confidence, elegance, and everyday luxury.
//             <span className="text-pink-400 text-3xl">"</span>
//           </p>

//           <div className="flex gap-4">
//             <button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 rounded-xl text-white font-bold hover:scale-105 transition">
//               Shop Collection
//             </button>

//             <button className="border border-white/30 px-8 py-4 rounded-xl text-white backdrop-blur-sm hover:bg-white/10 transition">
//               Explore Products
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* RIGHT SIDE – VERTICAL COSMETIC IMAGE SLIDER */}
//       <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
//         <div className="h-[420px] w-[260px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={girlIndex}
//               src={cosmeticGirls[girlIndex]}
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "-100%", opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               className="h-full w-full object-cover"
//             />
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceHero() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [girlIndex, setGirlIndex] = useState(0);

  const cosmeticGirls = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  ];

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGirlIndex((prev) => (prev + 1) % cosmeticGirls.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cosmeticGirls[girlIndex]}
          alt=""
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 xl:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
                Beauty
              </span>
              <span className="block text-white">That Defines You</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6">
              Luxury Makeup • Skincare • Timeless Glow ✨
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Dermatology Tested", "Luxury Formula", "Long Lasting Glow"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/20 border border-pink-400/30 px-4 py-2 rounded-full text-white text-sm sm:text-base backdrop-blur-sm"
                  >
                    ✨ {item}
                  </span>
                )
              )}
            </div>

         
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="flex justify-end xl:justify-end">
            <div className="relative h-[300px] sm:h-[360px] md:h-[420px] w-[220px] sm:w-[260px] md:w-[300px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={girlIndex}
                  src={cosmeticGirls[girlIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
