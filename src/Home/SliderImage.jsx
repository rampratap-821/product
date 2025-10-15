// // import React from 'react'
// // import img1 from '../SliderImage/1.jpg'
// // import img2 from '../SliderImage/2.jpg'
// // import img3 from '../SliderImage/3.jpg'
// // import img4 from '../SliderImage/4.jpg'

// // const Slide = [img1,img2,img3,img4]
// // const SliderImage = () => {
// //     return (
// //         <div>
// //         {
// //             Slide.map((item)=>
// //             <div>
// //                 <img src={item.Slide}/>
// //             </div>
// //             )
// //         }
// //         </div>
// //     )
// // }

// // export default SliderImage





// import React, { useState, useEffect } from "react";
// import img1 from "../SliderImage/1.jpg"; 
// import img2 from "../SliderImage/2.jpg";
// import img3 from "../SliderImage/3.jpg";
// import img4 from "../SliderImage/4.jpg";

// const Slide = [img1, img2, img3, img4];

// const SliderImage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % Slide.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + Slide.length) % Slide.length);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % Slide.length);
//   };

//   return (
//     <div className="relative w-full  mx-auto  overflow-hidden shadow-lg">
//       <img
//         src={Slide[currentIndex]}
//         alt={`slide-${currentIndex}`}
//         className="w-full h-[550px] object-cover transition-all duration-1000"
        
//       />

//       <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//         <h2 className="text-white text-3xl font-bold drop-shadow-lg">
//           Welcome to Amit Enterprises
//         </h2>
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//         {Slide.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === currentIndex ? "bg-orange-700" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderImage;

