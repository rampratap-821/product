// import React, { useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { image } from 'framer-motion/client'
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProductModals from '../Component/ProductModals';
 

// const Our_Product = ({ card, setCard }) => {
//     const[category,setCatgory] = useState("")




//     const [show,setShow] = useState(false)
//     const addToCard = (id, price, title, image) => {
//         const obj = {
//             id, price, title, image
//         }
//         setCard([...card, obj])
//         console.log("card", card);
//         toast.success('added card success', {
//             position: "top-right",
//             autoClose: 1500,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//             transition: Bounce,
//         });



//     }


//  const addModals = (id) => {
//         const handle = HoverImageData.filter((item)=>item.id == id)
//        setCatgory(handle)
//         setShow(true)
  


//     }








//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={1500}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//                 transition={Bounce}
//             />





//             <div className='w-full mx-auto py-7'>
//                 <h1 className='text-6xl text-center'>🕵🏽‍♂️ </h1>
//                 <h1 className='text-4xl text-center py-6 font-bold text-green-700'>OUR PRODUCTS</h1>


//                 <div className='grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 px-5  '>
//                     {
//                         HoverImageData.map((item) =>


//                             <div  key = {item.id} className='relative overflow-hidden  shadow-lg  w-full   group bg-red-200  '>
//                                 <div className='  '>
//                                     <img src={item.image} className=' object-cover w-full ' />
//                                     <h1 className=' px-2 py-2 text-xl font-bold text-center'>{item.title}</h1>
//                                     <h1 className=' px-4 pt-2  text-center'>⭐⭐⭐⭐⭐</h1>
//                                     <h1 className=' px-4 pb-2 text-center text-green-700'>{item.price}</h1>
//                                 </div>
//                                 <div className='absolute w-full h-full bg-black/20   top-0 right-0 group-hover:top-0 opacity-0 transition all duration-300 group-hover:opacity-100'>
//                                     <div className='px-5 pt-6'>
//                                         <button className='bg-black px-2 py-1'
//                                             onClick={() => addToCard(item.id, item.price, item.title, item.image)}
//                                         ><FaHeart className='text-white text-2xl  hover:text-red-500'></FaHeart></button>
//                                     </div>

//                                     <div className='px-5 '>
//                                         <button className='bg-black px-2 py-1 hover:bg-pink-800'><FaShare className='text-white text-2xl '></FaShare></button>
//                                     </div>

//                                     <div className='px-5 '>
//                                         <button className='bg-black px-2 py-1 hover:bg-yellow-80 ' onClick={()=>addModals(item.id)}><FaEyeSlash className='text-white text-2xl hover:text-red-500'></FaEyeSlash></button>
//                                     </div>

//                                 </div>

//                             </div>


//                         )
//                     }
//                 </div>
//             </div>

//            {
//                show && (
//                 <ProductModals onClose ={()=>setShow(false)} category ={category} />
//                )
//            }
//         </>
//     )
// }

// export default Our_Product


// import React, { useEffect, useRef, useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { ToastContainer, toast, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import ProductModals from '../Component/ProductModals'

// const Our_Product = ({ card, setCard }) => {
//   const [category, setCatgory] = useState("")
//   const [show, setShow] = useState(false)
//   const [visible, setVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.25 }
//     )
//     if (ref.current) io.observe(ref.current)
//     return () => io.disconnect()
//   }, [])

//   const addToCard = (id, price, title, image) => {
//     const obj = { id, price, title, image }
//     setCard([...card, obj])

//     toast.success('🛒 Added to cart', {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "dark",
//       transition: Bounce,
//     })
//   }

//   const addModals = (id) => {
//     const handle = HoverImageData.filter((item) => item.id == id)
//     setCatgory(handle)
//     setShow(true)
//   }

//   return (
//     <>
//       <ToastContainer />

//       <section ref={ref} className="bg-white py-20">
//         {/* Heading */}
//         <div
//           className={`text-center mb-16 transition-all duration-700
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <h1 className="text-5xl font-semibold text-gray-900">
//             Our Products
//           </h1>
//           <p className="text-pink-500 mt-2 text-sm uppercase tracking-widest">
//             Beauty You’ll Love
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
//           {HoverImageData.map((item, i) => (
//             <div
//               key={item.id}
//               style={{ transitionDelay: `${i * 100}ms` }}
//               className={`bg-black rounded-3xl overflow-hidden
//               transition-all duration-500 ease-out
//               hover:-translate-y-2 hover:shadow-2xl
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-60 object-cover"
//                 />
//               </div>

//               {/* Info */}
//               <div className="p-5 text-center">
//                 <h2 className="text-white font-medium text-lg">
//                   {item.title}
//                 </h2>
//                 <p className="text-pink-500 mt-1">★★★★★</p>
//                 <p className="text-pink-400 font-semibold mt-2">
//                   {item.price}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex justify-center gap-4 pb-5">
//                 <button
//                   onClick={() =>
//                     addToCard(item.id, item.price, item.title, item.image)
//                   }
//                   className="p-2.5 rounded-full bg-pink-500 text-white
//                   hover:bg-pink-600 transition"
//                 >
//                   <FaHeart />
//                 </button>

//                 <button
//                   className="p-2.5 rounded-full bg-gray-800 text-white
//                   hover:bg-gray-700 transition"
//                 >
//                   <FaShare />
//                 </button>

//                 <button
//                   onClick={() => addModals(item.id)}
//                   className="p-2.5 rounded-full border border-gray-600 text-gray-300
//                   hover:bg-gray-800 transition"
//                 >
//                   <FaEyeSlash />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {show && (
//         <ProductModals
//           onClose={() => setShow(false)}
//           category={category}
//         />
//       )}
//     </>
//   )
// }

// export default Our_Product


// import React, { useEffect, useRef, useState } from 'react'
// import { HoverImageData } from '../JsonData/Home_Json'
// import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
// import { ToastContainer, toast, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import ProductModals from '../Component/ProductModals'

// const Our_Product = ({ card, setCard }) => {
//   const [category, setCatgory] = useState("")
//   const [show, setShow] = useState(false)
//   const [visible, setVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setVisible(true),
//       { threshold: 0.25 }
//     )
//     if (ref.current) io.observe(ref.current)
//     return () => io.disconnect()
//   }, [])

//   const addToCard = (id, price, title, image) => {
//     const obj = { id, price, title, image }
//     setCard([...card, obj])

//     toast.success('🛒 Added to cart', {
//       position: "top-right",
//       autoClose: 1500,
//       theme: "dark",
//       transition: Bounce,
//     })
//   }

//   const addModals = (id) => {
//     const handle = HoverImageData.filter((item) => item.id == id)
//     setCatgory(handle)
//     setShow(true)
//   }

//   return (
//     <>
//       <ToastContainer />

//       <section ref={ref} className="bg-white py-20">
//         {/* Heading */}
//         <div
//           className={`text-center mb-16 transition-all duration-700
//           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//         >
//           <h1 className="text-5xl font-semibold text-gray-900">
//             Our Products
//           </h1>
//           <p className="text-pink-500 mt-2 text-sm uppercase tracking-widest">
//             Beauty You’ll Love
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {HoverImageData.map((item, i) => (
//             <div
//               key={item.id}
//               style={{ transitionDelay: `${i * 100}ms` }}
//               className={`group relative rounded-3xl overflow-hidden
//               bg-pink-800 border border-gray-800
//               transition-all duration-500
//               hover:shadow-[0_20px_60px_rgba(255,0,150,0.25)]
//               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover
//                   transition duration-700 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0
//                 group-hover:opacity-100 transition duration-500
//                 flex items-center justify-center gap-4">
//                   <button
//                     onClick={() =>
//                       addToCard(item.id, item.price, item.title, item.image)
//                     }
//                     className="p-3 rounded-full bg-pink-500 text-white
//                     hover:bg-pink-600 transition"
//                   >
//                     <FaHeart />
//                   </button>

//                   <button
//                     className="p-3 rounded-full bg-gray-800 text-white
//                     hover:bg-gray-700 transition"
//                   >
//                     <FaShare />
//                   </button>

//                   <button
//                     onClick={() => addModals(item.id)}
//                     className="p-3 rounded-full border border-gray-400 text-white
//                     hover:bg-white hover:text-black transition"
//                   >
//                     <FaEyeSlash />
//                   </button>
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="text-center py-5 px-4">
//                 <h2 className="text-white font-semibold text-lg">
//                   {item.title}
//                 </h2>
//                 <p className="text-pink-500 text-sm mt-1">★★★★★</p>
//                 <p className="text-pink-400 font-bold mt-2 text-lg">
//                   {item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {show && (
//         <ProductModals
//           onClose={() => setShow(false)}
//           category={category}
//         />
//       )}
//     </>
//   )
// }

// export default Our_Product



import React, { useEffect, useRef, useState } from 'react'
import { HoverImageData } from '../JsonData/Home_Json'
import { FaEyeSlash, FaHeart, FaShare } from 'react-icons/fa6'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductModals from '../Component/ProductModals'

const Our_Product = ({ card, setCard }) => {
  const [category, setCatgory] = useState("")
  const [show, setShow] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const addToCard = (id, price, title, image) => {
    const obj = { id, price, title, image }
    setCard([...card, obj])

    toast.success('🛒 Added to cart', {
      position: "top-right",
      autoClose: 1500,
      theme: "light",
      transition: Bounce,
    })
  }

  const addModals = (id) => {
    const handle = HoverImageData.filter((item) => item.id == id)
    setCatgory(handle)
    setShow(true)
  }

  return (
    <>
      <ToastContainer />

      <section ref={ref} className="bg-white py-20">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="text-5xl font-semibold text-black">
            Our Products
          </h1>
          <p className="text-gray-600 mt-2 text-sm uppercase tracking-widest">
            Beauty You'll Love
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {HoverImageData.map((item, i) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`group relative rounded-3xl overflow-hidden
              bg-white border border-gray-300
              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover
                  transition duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0
                group-hover:opacity-100 transition duration-500
                flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      addToCard(item.id, item.price, item.title, item.image)
                    }
                    className="p-3 rounded-full bg-black text-white
                    hover:bg-gray-800 transition"
                  >
                    <FaHeart />
                  </button>

                  <button
                    className="p-3 rounded-full bg-gray-700 text-white
                    hover:bg-gray-600 transition"
                  >
                    <FaShare />
                  </button>

                  <button
                    onClick={() => addModals(item.id)}
                    className="p-3 rounded-full border border-gray-400 text-white
                    hover:bg-white hover:text-black transition"
                  >
                    <FaEyeSlash />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center py-5 px-4">
                <h2 className="text-black font-semibold text-lg">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">★★★★★</p>
                <p className="text-black font-bold mt-2 text-lg">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {show && (
        <ProductModals
          onClose={() => setShow(false)}
          category={category}
        />
      )}
    </>
  )
}

export default Our_Product
