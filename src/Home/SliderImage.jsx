import React, { useState, useEffect } from 'react';
import banner1 from "../assets/Icons/Banner1.jpeg";
import banner2 from "../assets/Icons/Banner2.jpeg";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';

const dataSlider = [
  {
    id: "1",
    imageUrl: banner1,
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks One",
      subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "2",
    imageUrl: banner2,
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks Two",
      subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "3",
    imageUrl:
      "https://t3.ftcdn.net/jpg/15/36/40/70/240_F_1536407091_PtCL3kqQTdU2pMOkAcwQj9Dq5OsYGK9d.jpg",
    button: { text: "Shop Now", cssClasses: "text-white" },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks Three",
      subText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
];

const SliderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? dataSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const previousSlider = () => {
    const isLastSlider = currentIndex === dataSlider.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlider();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-2xl mt-3">
    
      <div
        className="w-full h-full  "
        style={{
          backgroundImage: `url(${dataSlider[currentIndex].imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

     
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition"
        onClick={nextSlider}
      >
        <BsChevronCompactLeft size={24} />
      </div>

      
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition"
        onClick={previousSlider}
      >
        <BsChevronCompactRight size={24} />
      </div>

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dataSlider.map((slider, index) => (
          <div key={slider.id} className="cursor-pointer text-3xl">
            {index === currentIndex ? (
              <RxDotFilled className="text-orange-500" />
            ) : (
              <RxDot className="text-white" />
            )}
          </div>
        ))}
      </div>

     
      <div className="absolute bottom-12 left-8 translate-y-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bold text-2xl sm:text-4xl">
        {dataSlider[currentIndex].body.mainText}
      </div>
    </div>
  );
};

export default SliderImage;
