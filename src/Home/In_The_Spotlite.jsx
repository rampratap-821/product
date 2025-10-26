import React from 'react'
import { Cosmetic } from '../JsonData/Home_Json'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 duration-300"
      onClick={onClick}
    >
      <GrPrevious/>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute  top-1/2 transform -translate-y-1/2 z-10 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center  hover:bg-pink-700 duration-1000"
      onClick={onClick}
    >
      <GrNext/>
    </div>
  );
};

const Get_Glowing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  return (
    <div className="w-full mx-auto mb-5">
      <div className="w-[95%] mx-auto mt-10">
        <h1 className="text-4xl text-slate-700 font-bold border-b border-gray-200 pb-5 text-pink-400">
          In the Spotlight
        </h1>
       
        <div className="my-10 bg-blue-100 p-10 relative">
            
          <Slider {...settings}>
            {Cosmetic.map((item, index) => (
              <div key={index} className="p-5">
                <div className="relative">
                  <img
                    src={item.url}
                    alt="cosmetic"
                    className="rounded-2xl w-[300px] sm:w-[500px] h-[150px] sm:h-[300px] object-cover"
                  />
                  <div className="absolute bottom-0 right-0 sm:m-10 m-3 bg-slate-400 sm:px-2 px-1 rounded hover:bg-pink-700 hover:text-white duration-1000">
                    <ul>
                      <li>
                        <Link className="font-bold sm:text-[15px] text-[10px]">
                          Shop Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Get_Glowing;
