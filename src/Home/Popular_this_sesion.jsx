


// import React, { useEffect, useRef, useState } from "react";
// import { Cosmetic } from "../JsonData/Home_Json";
// import { Link } from "react-router-dom";

// const This_Season = () => {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const rafRef = useRef(null);
//   const [show, setShow] = useState(false);

//   /* SECTION APPEAR */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setShow(true),
//       { threshold: 0.4 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   /* SMOOTH SLIDER */
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let x = 0;
//     const speed = 0.5;

//     const animate = () => {
//       x -= speed;
//       if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
//       track.style.transform = `translateX(${x}px)`;
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full bg-white py-20 overflow-hidden">
//       <div
//         className={`max-w-[1400px] mx-auto px-6
//         transition-all duration-1000 ease-out
//         ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
//       >
//         {/* HEADING */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-pink-700">
//             This Season’s Picks
//           </h2>
//           <p className="text-pink-500 mt-3 text-sm tracking-wide">
//             Discover trending beauty categories
//           </p>
//         </div>

//         {/* SLIDER */}
//         <div className="relative overflow-hidden">
//           <div
//             ref={trackRef}
//             className="flex gap-8 will-change-transform"
//           >
//             {[...Cosmetic, ...Cosmetic].map((item, i) => (
//               <div
//                 key={i}
//                 className="min-w-[260px] md:min-w-[300px]
//                 bg-white rounded-2xl overflow-hidden
//                 border border-pink-200
//                 shadow-sm hover:shadow-lg
//                 transition duration-300"
//               >
//                 {/* IMAGE */}
//                 <div className="w-full h-[260px] overflow-hidden">
//                   <img
//                     src={item.url}
//                     alt={item.category}
//                     className="w-full h-full object-cover
//                     hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-5 text-center">
//                   <h3 className="text-lg font-semibold text-pink-700 mb-3">
//                     {item.category}
//                   </h3>

//                   <Link
//                     to={`/category/${item.category}`}
//                     className="inline-block px-6 py-2 text-sm font-semibold
//                     text-white bg-pink-600 rounded-full
//                     hover:bg-pink-700 transition"
//                   >
//                     Explore
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default This_Season;



import React, { useEffect, useRef, useState } from "react";
import { Cosmetic } from "../JsonData/Home_Json";
import { Link } from "react-router-dom";

const This_Season = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const [show, setShow] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  /* SECTION APPEAR */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* SMOOTH SLIDER - PAUSABLE */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        x -= speed;
        if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 overflow-hidden">
      <div
        className={`max-w-[1400px] mx-auto px-6
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black" >
            This Season's Picks
          </h2>
          <p className="text-black mt-3 text-lg tracking-wide">
            Discover trending beauty categories
          </p>
        </div>

        {/* SLIDER */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-8 will-change-transform"
          >
            {[...Cosmetic, ...Cosmetic].map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] md:min-w-[300px]
                bg-white rounded-2xl overflow-hidden
                border border-gray-300
                shadow-sm hover:shadow-xl
                transition-all duration-500
                cursor-pointer"
              >
                {/* IMAGE */}
                <div className="w-full h-[260px] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.category}
                    className="w-full h-full object-cover
                    hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <h3 className="text-xl  text-black mb-3">
                    {item.category}
                  </h3>

                  <Link
                    to={`/category/${item.category}`}
                    className="inline-block px-8 py-3 text-sm font-semibold
                    text-white bg-black rounded-xl
                    hover:bg-gray-800 transition-all duration-300
                    hover:shadow-lg"
                    onMouseEnter={(e) => e.stopPropagation()}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* PAUSE INDICATOR */}
          {isPaused && (
            <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded-md opacity-75">
              Paused
            </div>
          )}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-block px-8 py-4 text-lg font-semibold
            text-black border-2 border-black rounded-xl
            hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default This_Season;