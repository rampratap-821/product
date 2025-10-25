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
        <div className='w-[100%  mx-auto bg-gradient-to-br from-pink-50 to-rose-300  py-5 '>
            <div className='w-[95%]  mx-auto  mt-10'>
                <h1 className=' text-3xl text-black font-bold ' >Popular This Season</h1>

                <div className=' grid grid-cols-6'>

                        {
                            Cosmetic2.map((item) =>
                                <div className='text-center  flex justify-center  '>
                                    <div className='   m-2    '>
                                        <img src={item.url} className=" object-cover sm:h-[300px] h-[150px] sm:w-[300px] w-[150px] rounded-2xl    " />
                                        <div>
                                            <h1 className='text-green-400'>{item.title}</h1>
                                        </div>
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
