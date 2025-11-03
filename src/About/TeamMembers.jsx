// import React, { useRef } from "react";
// import { ProfileData } from "../JsonData/About";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // icons

// const TeamMembers = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth - 100; // kitna slide kare
//       scrollRef.current.scrollTo({
//         left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative w-full bg-gray-100 py-10">
//       {/* Left Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Scrollable Members */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-scroll scroll-smooth cursor-grab select-none px-10
//                    [scrollbar-width:none] [-ms-overflow-style:none]
//                    [&::-webkit-scrollbar]:hidden"
//       >
//         {ProfileData.map((item, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-white"
//           >
//             <img
//               src={item.profile_image}
//               alt={item.name}
//               className="w-full h-[250px] object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default TeamMembers;






import React from 'react'
import { ProfileData } from '../JsonData/About'

const TeamMembers = () => {
    return (
       <div className='w-[100%] px-10 py-[20px] sm:py-[50px]'>
            <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
                {
                    ProfileData.map((item) =>
                        <div className='bg-white  w-full lg:h-[400px] md:h-[350px] sm:h-[350px]  h-[350px] rounded-2xl  group grid grid-cols-1 hover:scale-105 transition duration-300 shadow-lg'>
                            <div className='bg-pink-600 w-full h-[200px]  flex justify-center items-center rounded-2xl relative'>

                                <div className='group-hover:scale-110 transition duration-300'>
                                    <div className=' w-[110px] h-[110px] rounded-full bg-white flex justify-center items-center'>
                                        <img src={item.profile_image} className='w-[100px] h-[100px] rounded-full object-cover' />
                                    </div>
                                </div>
                                <div className='absolute right-0 translate-y-2 top-0 pr-5 text-2xl'>❤️</div>

                            </div>


                            <div className='text-center px-5'>
                               <h1 className='text-2xl font-bold'> {item.name}</h1>
                               <h1 className='text-1xl font-bold text-green-600'> {item.role}</h1>
                               <h1 className=' text-gray-700'> {item.content}</h1>

                            </div>
                            

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TeamMembers;

