import React from 'react'
import { MdFoundation } from "react-icons/md";
import { MdExpandCircleDown } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";

const OurStory = () => {
    return (
        <div className='bg-pink-300 w-full py-[20px] sm:py-[50px] grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-10 px-10'>

            <div className='h-full'>
                <div className='px-10  bg-white py-10 rounded-2xl h-full'>
                    <h1 className='text-4xl text-pink-900 font-bold'>Our Story—The Glow Behind the Brand</h1>
                    <p className='py-4 text-gray-700  '>
                        Founded in 2010 by Sofia Mehra, Bloom Cosmetics began as a small studio with one dream — to
                        make beauty simple, natural, and empowering. What started as handmade lip balms and skincare blends soon
                        turned into a movement toward conscious beauty. Sofia believed that true beauty
                        comes from confidence, care, and connection with nature.
                        </p>
                            <p className='py-4 text-gray-700  '>
                               From the beginning, we sourced every ingredient with love — cold-pressed oils,
                                pure plant extracts, and cruelty-free pigments — ensuring that each product touched your
                                 skin gently and responsibly. Our mission was never just to sell makeup, but to create a
                                mindful beauty ritual for every woman who believes in her glow.
                            </p>

                            <p className='py-4 text-gray-700  '>
                               n 2012, Bloom introduced its first organic lipstick collection — made with natural waxes 
                               and rich botanical colors. The response was overwhelming. Women from all walks of life embraced the
                                idea that makeup can be clean, luxurious, and guilt-free. By 2015, we had launched our skincare line 
                               inspired by Indian botanicals like rose, turmeric, aloe, and sandalwood.
                            </p>

                            <p className='py-4 text-gray-700  '>
                               Every formula is created with transparency — no parabens, no sulfates, no harmful chemicals. 
                               Only goodness that your skin deserves. In 2018, Bloom expanded its reach with the “Pure Inside, Radiant 
                               Outside” campaign —
                                inspiring thousands to redefine beauty beyond filters and trends.
                            </p>

                           
                        </div>
                </div>

                <div className='grid grid-cols-1'>
                    <div className='bg-white mb-5  border-l-8 border-pink-900 py-10 rounded-2xl shadow-lg group hover:scale-105 transition duration-1000 flex pl-10 items-center gap-4'>
                        <div>
                            <h1 className='text-2xl bg-pink-800 p-5 rounded-2xl group-hover:scale-105 transition duration-1000'><MdFoundation></MdFoundation></h1>
                        </div>
                        <div className='[&>*]:p-1'>
                            <h1 className='text-pink-800 text-2xl font-bold '>2010</h1>
                            <h1 className=' text-2xl font-bold '>Founded</h1>
                            <h1 className='text-xl font-semibold  text-gray-600'>Started with a single store in downtown</h1>

                        </div>
                    </div>




                    <div className='bg-white mb-5  border-l-8 border-pink-900 py-10 rounded-2xl shadow-lg group hover:scale-105 transition duration-1000 flex pl-10 items-center gap-4'>
                        <div>
                            <h1 className='text-2xl bg-pink-800 p-5 rounded-2xl group-hover:scale-105 transition duration-1000'><MdFoundation></MdFoundation></h1>
                        </div>
                        <div className='[&>*]:p-1'>
                            <h1 className='text-pink-800 text-2xl font-bold '>2010</h1>
                            <h1 className=' text-2xl font-bold '>Founded</h1>
                            <h1 className='text-xl font-semibold  text-gray-600'>Started with a single store in downtown</h1>

                        </div>
                    </div>



                    <div className='bg-white mb-5  border-l-8 border-pink-900 py-10 rounded-2xl shadow-lg group hover:scale-105 transition duration-1000 flex pl-10 items-center gap-4'>
                        <div>
                            <h1 className='text-2xl bg-pink-800 p-5 rounded-2xl group-hover:scale-105 transition duration-1000'><MdFoundation></MdFoundation></h1>
                        </div>
                        <div className='[&>*]:p-1'>
                            <h1 className='text-pink-800 text-2xl font-bold '>2010</h1>
                            <h1 className=' text-2xl font-bold '>Founded</h1>
                            <h1 className='text-xl font-semibold  text-gray-600'>Started with a single store in downtown</h1>

                        </div>
                    </div>


                    <div className='bg-white   border-l-8 border-pink-900 py-10 rounded-2xl shadow-lg group hover:scale-105 transition duration-1000 flex pl-10 items-center gap-4'>
                        <div>
                            <h1 className='text-2xl bg-pink-800 p-5 rounded-2xl group-hover:scale-105 transition duration-1000'><MdFoundation></MdFoundation></h1>
                        </div>
                        <div className='[&>*]:p-1'>
                            <h1 className='text-pink-800 text-2xl font-bold '>2010</h1>
                            <h1 className=' text-2xl font-bold '>Founded</h1>
                            <h1 className='text-xl font-semibold  text-gray-600'>Started with a single store in downtown</h1>

                        </div>
                    </div>
                </div>

            </div>
            )
}

            export default OurStory
