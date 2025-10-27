

// import React from 'react'
// import banner1 from"../assets/Icons/banner1.jpeg"
// import banner2 from"../assets/Icons/banner2.jpeg"
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { useState } from 'react';
// import { RxDot, RxDotFilled } from 'react-icons/rx';
// const dataSlider = [
//   {
//     id: "1",
//     imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVRQh-droytqcpxK_dMADiQfEc-HEwwHaMQ&s",
//     button: {
//       text: "Shop Now",
//       cssClasses: "text-white",
//     },
//     body: {
//       cssClasses: "text-white",
//       mainText: "Perfume Tips Tricks One",
//       subText:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
//     },
//   },
//   {
//     id: "2",
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFMSbl_3f78tX8XvUmm8Aa_cJ3nfAjMXEcw&s",
//     button: {
//       text: "Shop Now",
//       cssClasses: "text-white",
//     },
//     body: {
//       cssClasses: "text-white",
      
//       mainText: "Perfume Tips Tricks Two",
//       subText:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
//     },
//   },
//   {
//     id: "3",
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-bLgOG4FORXtidNlKGXfLS5Zkv1UMaTl9g&s",
//     button: {
//       text: "Shop Now",
//       cssClasses: "text-white",
//     },
//     body: {
//       cssClasses: "text-white",
      
//       mainText: "Perfume Tips Tricks Three",
//       subText:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
//     },
//   },
// ];


// const SliderImage = () => {
//   const[currentIndex,setCurrentIndex] = useState(0)

//   const nextSlider = ()=>{
//     const isFirstSlider = currentIndex === 0
//     const newIndex = isFirstSlider? dataSlider.length-1:currentIndex-1;
//     setCurrentIndex(newIndex)
//   }
//   const previousSlider = ()=>{
//   const isLastSlider = currentIndex === dataSlider.length-1
//   const newIndex = isLastSlider? 0: currentIndex+1;
//   setCurrentIndex(newIndex)
//   }




//   return (
//     <div className='w-full h-[500px] relative text-white py-5'>
//      <img src={dataSlider[currentIndex].imageUrl} className='w-full h-full object-cover  sm:p-2 md:p-2 lg:p-0 p-2 duration' />

//       <div className=' absolute p-2 text-xl translate-y-1/2 rounded-full  top-1/3 bg-black translate-x-0 left-2'>
//         <BsChevronCompactLeft onClick={nextSlider}/>
//       </div>

//       <div className=' absolute p-2 text-xl translate-y-1/2 rounded-full  top-1/3 bg-black translate-x-0 right-2'>
//         <BsChevronCompactRight onClick={previousSlider}/>
//       </div>
//       <div className='absolute translate-x-0 left-1/2 flex bottom-4'>
//         {dataSlider.map((slider,index)=>
//         <div key={slider.id} className='text-4xl cursor-pointer'>
//           {index===currentIndex?
//           (
//           <RxDotFilled></RxDotFilled>
//           ):
//           (
//           <RxDot></RxDot>
//           )}
//         </div>
//         )}
//       </div>

//     </div>
//   )
// }

// export default SliderImage;


















import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";

const dataSlider = [
  {
    id: "1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVRQh-droytqcpxK_dMADiQfEc-HEwwHaMQ&s",
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks One",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFMSbl_3f78tX8XvUmm8Aa_cJ3nfAjMXEcw&s",
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks Two",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-bLgOG4FORXtidNlKGXfLS5Zkv1UMaTl9g&s",
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks Three",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
];

const SliderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () => {
    const isLastSlide = currentIndex === dataSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlider();
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full h-[500px] relative text-white py-5 overflow-hidden">
      <img
        src={dataSlider[currentIndex].imageUrl}
       className='w-full h-full object-cover  sm:p-2 md:p-2 lg:p-0 p-2 duration-500'
        alt="slider"
      />

      <div
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full cursor-pointer"
        onClick={prevSlider}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full cursor-pointer"
        onClick={nextSlider}
      >
        <BsChevronCompactRight size={30} />
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {dataSlider.map((slider, index) => (
          <div
            key={slider.id}
            className="text-3xl cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            {index === currentIndex ? (
              <RxDotFilled className="text-pink-500" />
            ) : (
              <RxDot className="text-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
