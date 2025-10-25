import React from 'react'
import { Cosmetic } from '../JsonData/Home_Json'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Get_Glowing = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    return (
        <div className='w-[100%  mx-auto bg-gradient-to-br from-pink-50 to-rose-300  py-5 mt-5'>
        <div className='w-[95%]  mx-auto  mt-10'>
            <h1 className='text-center text-5xl text-white font-semibold'>Get Glowing</h1>
            <div className='my-10 '>
                  <Slider {...settings}>
                {
                    Cosmetic.map((item) =>
                        <div className=''>
                            <div className='relative  '>
                                <img src={item.url} className='rounded-2xl w-[200px] sm:w-[470px] h-[200px] sm:h-[435px] object-cover ">' />

                                <div className='absolute text-black font-bold bottom-0 sm:m-10 m-3 bg-white sm:p-2   sm:px-5 px-1 rounded hover:bg-pink-700 hover:text-white  duration-1000'>
                                    <ul>
                                        <li>
                                            <Link>Shop Now </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    )
                }
                </Slider>
            </div>

        </div>
        </div>
    )
}

export default Get_Glowing;
