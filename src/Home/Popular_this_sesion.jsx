import React from 'react'
import { Cosmetic2 } from '../JsonData/Home_Json'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const This_Season = () => {

    return (
        <div className='w-[100%  mx-auto   py-5 '>
            <div className='w-[95%]  mx-auto  mt-5'>
                <h1 className=' text-3xl text-black font-bold text-center  pb-10' >Popular This Season</h1>

                <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 gap-5'>

                    {
                        Cosmetic2.map((item) =>
                            <div className='text-center text-white shadow-[10px] bg-white '>
                                <div className='       '>
                                    <img src={item.url} className=" object-cover w-full lg:h-[300px]  md:h-[250px] sm:h-[200px] h-[150px] hover:scale-75 duration-1000 " />

                                </div>
                                <div>
                                    <h1 className='text-green-400 font-bold' style={{fontSize:13}}>{item.title}</h1>
                                    <h1  style={{fontSize:13}}>⭐⭐⭐⭐⭐</h1>
                                    <h1 className='text-green-400 font-bold' style={{fontSize:13}}>{item.price}</h1>

                                </div>

                                <div className='bg-black lg:py-4 md:py-3 sm:py-2 py-2 rounded'>
                                    <Link className='font-bold  '>Add Card</Link>
                                </div>

                            </div>
                        )
                    }
                </div>




            </div>
        </div>
    )
}

export default This_Season;
