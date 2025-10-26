import React from 'react';
import { Cosmetic } from '../JsonData/Home_Json';
import { Link } from 'react-router-dom';
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

const Get_Glowing = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-[100%]  sm:py-[50px] py-[50px] ">
            <div className="max-w-[1170px] mx-auto px-4">
              

                <div>
                    <Slider {...settings}>
                        {Cosmetic.map((item, i) => (
                            <div key={i} className="px-3">
                                <div className="relative group">
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="rounded-2xl w-full h-[250px] sm:h-[435px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                                        <Link
                                            to="/"
                                            className="bg-white text-black font-semibold px-4 py-2 rounded shadow-lg hover:bg-pink-700 hover:text-white transition-all duration-1000"
                                        >
                                            Shop Now
                                        </Link>
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
