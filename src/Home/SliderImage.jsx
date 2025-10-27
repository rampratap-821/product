

import React from 'react'
import banner1 from"../assets/Icons/Banner1.jpeg"
import banner2 from"../assets/Icons/Banner2.jpeg"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';
import { RxDot, RxDotFilled } from 'react-icons/rx';
const dataSlider = [
  {
    id: "1",
    imageUrl: banner1,
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks One",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "2",
    imageUrl: banner2,
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
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
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
    body: {
      cssClasses: "text-white",
      
      mainText: "Perfume Tips Tricks Three",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
];


const SliderImage = () => {
  const[currentIndex,setCurrentIndex] = useState(0)

  const nextSlider = ()=>{
    const isFirstSlider = currentIndex === 0
    const newIndex = isFirstSlider? dataSlider.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
  }
  const previousSlider = ()=>{
  const isLastSlider = currentIndex === dataSlider.length-1
  const newIndex = isLastSlider? 0: currentIndex+1;
  setCurrentIndex(newIndex)
  }
  return (
    <div className='w-full h-[500px] relative text-white'>
     <img src={dataSlider[currentIndex].imageUrl} className='w-full h-full object-cover rounded-2xl sm:p-2 md:p-2 lg:p-0 p-2' />

      <div className=' absolute p-2 text-xl translate-y-1/2 rounded-full  top-1/3 bg-black translate-x-0 left-2'>
        <BsChevronCompactLeft onClick={nextSlider}/>
      </div>

      <div className=' absolute p-2 text-xl translate-y-1/2 rounded-full  top-1/3 bg-black translate-x-0 right-2'>
        <BsChevronCompactRight onClick={previousSlider}/>
      </div>
      <div className='absolute translate-x-0 left-1/2 flex bottom-4'>
        {dataSlider.map((slider,index)=>
        <div key={slider.id} className='text-4xl cursor-pointer'>
          {index===currentIndex?
          (
          <RxDotFilled></RxDotFilled>
          ):
          (
          <RxDot></RxDot>
          )}
        </div>
        )}
      </div>

    </div>
  )
}

export default SliderImage;