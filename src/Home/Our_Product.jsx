import React from 'react'
import { HoverImageData } from '../JsonData/Home_Json'
import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
import { image } from 'framer-motion/client'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Our_Product = ({ card, setCard }) => {
    const addToCard = (id, price, title, image) => {
        const obj = {
            id, price, title, image
        }
        setCard([...card, obj])
        console.log("card", card);
        toast.success('added card success', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });



    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />





            <div className='w-full mx-auto py-7'>
                <h1 className='text-6xl text-center'>🕵🏽‍♂️ </h1>
                <h1 className='text-4xl text-center py-6 font-bold text-green-700'>OUR PRODUCTS</h1>


                <div className='grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 px-5  '>
                    {
                        HoverImageData.map((item) =>


                            <div className='relative overflow-hidden  shadow-lg  w-full   group bg-red-200  '>
                                <div className='  '>
                                    <img src={item.image} className=' object-cover w-full ' />
                                    <h1 className=' px-2 py-2 text-xl font-bold text-center'>{item.title}</h1>
                                    <h1 className=' px-4 pt-2  text-center'>⭐⭐⭐⭐⭐</h1>
                                    <h1 className=' px-4 pb-2 text-center text-green-700'>{item.price}</h1>
                                </div>
                                <div className='absolute w-full h-full bg-black/20   top-0 right-0 group-hover:top-0 opacity-0 transition all duration-300 group-hover:opacity-100'>
                                    <div className='px-5 pt-6'>
                                        <button className='bg-black px-2 py-1'
                                            onClick={() => addToCard(item.id, item.price, item.title, item.image)}
                                        ><FaHeart className='text-white text-2xl  hover:text-red-500'></FaHeart></button>
                                    </div>

                                    <div className='px-5 '>
                                        <button className='bg-black px-2 py-1 hover:bg-pink-800'><FaShare className='text-white text-2xl '></FaShare></button>
                                    </div>

                                    <div className='px-5 '>
                                        <button className='bg-black px-2 py-1 hover:bg-yellow-800'><FaEyeSlash className='text-white text-2xl hover:text-red-500'></FaEyeSlash></button>
                                    </div>

                                </div>

                            </div>


                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Our_Product
