import React from 'react'
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

const Logo = () => {
     const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
  return (
    <div className='w-[100%] mx-auto'>
        <div className='w-[95%] mx-auto py-10 '>

       <Slider {...settings}>

            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>

            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>


            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>


            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>

            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl flex'>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>


            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>


            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>

            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>


            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>

            <div className='w-[200px] h-[300px] bg-white relative shadow-2xl '>
                <div>
                <h1 className='text-center text-5xl pt-12'>🍉</h1>
                <h1 className='absolute bottom-0  text-2xl bg-pink-400 px-[68px] rounded-t-2xl'>Tarbuj</h1>
                </div>
            </div>

            
</Slider>

        </div>
    </div>
  )
}

export default Logo
