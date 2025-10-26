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
            <GrPrevious />
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
            <GrNext />
        </div>
    );
};

const NykaaFashion = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
           responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
    };
    return (
        <div className='w-[100%  mx-auto py-5 mt-5'>
            <div className='w-[95%]  mx-auto  mt-10'>
                <h1 className='text-center text-5xl text-pink-500 font-bold ' style={{ fontFamily: 'Dancing Script, cursive' }}>NYKAA LUX</h1>
                <h1 className='text-center text-2xl text-gray-500 font-semibold'>THE BEST OF LUXURY</h1>

                <div className=' '>
                    <Slider {...settings}>

                        {
                            Cosmetic.map((item) =>
                                <div className='text-center shadow-lg flex justify-center '>
                                    <div className=' p-2   '>
                                        <img src={item.url} className=" object-cover h-[220px] w-[300px] rounded-s-lg border-[5px] border-white " />
                                        <div>
                                            <h1 className=''>{item.title}</h1>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </Slider>
                </div>

                 <div className=' '>
                    <Slider {...settings}>

                        {
                            Cosmetic.map((item) =>
                                <div className='text-center shadow-lg flex justify-center '>
                                    <div className=' p-2   '>
                                        <img src={item.url} className=" object-cover h-[220px] w-[300px] rounded-s-lg border-[5px] border-white " />
                                        <div>
                                            <h1 className=''>{item.title}</h1>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </Slider>
                </div>
                <div className='text-center'>
                    <button className='bg-pink-600 text-white font-bold sm:px-[200px] px-[100px] py-3 rounded-2xl hover:bg-pink-900 duration-1000'>Explore All</button>
                </div>

            </div>
        </div>
    )
}

export default NykaaFashion;
