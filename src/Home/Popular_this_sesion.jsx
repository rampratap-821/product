

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Cosmetic } from "../JsonData/Home_Json";
import { Link } from "react-router-dom";

const This_Season = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Check if we have at least 6 products, if not, duplicate to reach 6
  const products = Cosmetic.length >= 6 ? Cosmetic : [...Cosmetic, ...Cosmetic.slice(0, 6 - Cosmetic.length)];

  const cardWidth = 304; // Desktop: 280px width + 24px gap
  const mobileCardWidth = 260; // Mobile: 240px width + 20px gap
  const visibleCards = 4;
  const mobileVisibleCards = 1; // Mobile: 1 card visible at a time
  const totalSlides = Math.max(1, products.length - visibleCards + 1);
  const mobileTotalSlides = products.length; // Mobile: each product is a slide

  /* CHECK MOBILE DEVICE */
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset to first slide on mobile change
      setCurrentIndex(0);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(0px)`;
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* SECTION APPEAR */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* AUTO PLAY FOR MOBILE - SHOWS ALL 6 PRODUCTS ONE BY ONE */
  useEffect(() => {
    if (!isMobile || !isAutoPlaying || isAnimating) return;

    const autoPlay = () => {
      if (currentIndex >= mobileTotalSlides - 1) {
        goToSlide(0);
      } else {
        slideRight();
      }
    };

    autoPlayRef.current = setInterval(autoPlay, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isMobile, isAutoPlaying, currentIndex, isAnimating, mobileTotalSlides]);

  /* PAUSE AUTOPLAY ON INTERACTION */
  const pauseAutoPlay = () => {
    if (isMobile) {
      setIsAutoPlaying(false);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }
  };

  const resumeAutoPlay = () => {
    if (isMobile) {
      setIsAutoPlaying(true);
    }
  };

  /* GET CURRENT CARD WIDTH BASED ON DEVICE */
  const getCurrentCardWidth = () => {
    return isMobile ? mobileCardWidth : cardWidth;
  };

  /* GET TOTAL SLIDES BASED ON DEVICE */
  const getTotalSlides = () => {
    return isMobile ? mobileTotalSlides : totalSlides;
  };

  /* SLIDE FUNCTIONS */
  const slideLeft = () => {
    const totalSlides = getTotalSlides();
    const cardWidth = getCurrentCardWidth();
    
    if (isAnimating || currentIndex === 0) return;
    pauseAutoPlay();
    
    setIsAnimating(true);
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      if (isMobile) {
        setTimeout(resumeAutoPlay, 1000);
      }
    }, 500);
  };

  const slideRight = () => {
    const totalSlides = getTotalSlides();
    const cardWidth = getCurrentCardWidth();
    
    if (isAnimating || currentIndex >= totalSlides - 1) return;
    pauseAutoPlay();
    
    setIsAnimating(true);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      if (isMobile) {
        setTimeout(resumeAutoPlay, 1000);
      }
    }, 500);
  };

  const goToSlide = (index) => {
    const cardWidth = getCurrentCardWidth();
    
    if (isAnimating || index === currentIndex) return;
    pauseAutoPlay();
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      if (isMobile) {
        setTimeout(resumeAutoPlay, 1000);
      }
    }, 500);
  };

  /* TOUCH SWIPE FOR MOBILE */
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoPlay();
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      slideRight();
    } else if (isRightSwipe) {
      slideLeft();
    }

    setTimeout(resumeAutoPlay, 1000);
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white py-16 overflow-hidden"
    >
      <div
        className={`max-w-[1400px] mx-auto px-4 md:px-6
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >
        {/* HEADING */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            This Season's Picks
          </h2>
          <p className="text-black mt-3 text-base md:text-lg tracking-wide">
            Discover trending beauty categories
          </p>
          {isMobile && (
            <p className="text-sm text-pink-600 mt-2">
              Showing all 6 products
            </p>
          )}
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative">
          {/* DESKTOP BUTTONS - HIDDEN ON MOBILE */}
          <div className="hidden md:block">
            {/* LEFT BUTTON */}
            <button
              onClick={slideLeft}
              disabled={currentIndex === 0 || isAnimating}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8
              w-14 h-14 bg-white rounded-full shadow-xl
              flex items-center justify-center z-20 border border-gray-200
              transition-all duration-300
              ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50 hover:scale-110 active:scale-95"}`}
              aria-label="Previous slide"
            >
              <svg
                className={`w-7 h-7 ${currentIndex === 0 ? "text-gray-400" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={slideRight}
              disabled={currentIndex >= getTotalSlides() - 1 || isAnimating}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-8
              w-14 h-14 bg-white rounded-full shadow-xl
              flex items-center justify-center z-20 border border-gray-200
              transition-all duration-300
              ${currentIndex >= getTotalSlides() - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50 hover:scale-110 active:scale-95"}`}
              aria-label="Next slide"
            >
              <svg
                className={`w-7 h-7 ${currentIndex >= getTotalSlides() - 1 ? "text-gray-400" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

         

          {/* SLIDER WINDOW */}
          <div 
            ref={containerRef}
            className="overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* TRACK - TRANSFORMS ON BUTTON CLICK */}
            <div
              ref={trackRef}
              className={`flex ${isMobile ? 'gap-5' : 'gap-6'} transition-transform duration-500 ease-in-out`}
              style={{ 
                transform: `translateX(-${currentIndex * getCurrentCardWidth()}px)`,
                paddingLeft: isMobile ? '16px' : '0'
              }}
            >
              {products.map((item, i) => (
                <div
                  key={i}
                  className={`${isMobile ? 'min-w-[240px]' : 'min-w-[280px]'} flex-shrink-0
                  bg-white rounded-xl overflow-hidden
                  border border-gray-200
                  shadow-md hover:shadow-lg
                  transition-all duration-300
                  cursor-pointer mx-1`}
                >
                  {/* IMAGE */}
                  <div className={`w-full ${isMobile ? 'h-[180px]' : 'h-[200px]'} overflow-hidden`}>
                    <img
                      src={item.url}
                      alt={item.category}
                      className="w-full h-full object-cover
                      hover:scale-105 transition duration-500"
                      draggable="false"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-5 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-black mb-3 md:mb-4">
                      {item.category}
                    </h3>

                    <Link
                      to={`/payment`}
                      className="inline-block w-full py-3 text-sm md:text-base font-bold
                      text-white bg-pink-700 rounded-lg
                      hover:bg-pink-800 transition-all duration-300
                      hover:shadow-md active:scale-95"
                      onClick={pauseAutoPlay}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PAGINATION DOTS - SHOW ALL 6 DOTS ON MOBILE */}
          <div className="flex justify-center items-center gap-2 md:gap-3 mt-6 md:mt-8 overflow-x-auto px-4">
            {Array.from({ length: getTotalSlides() }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex 
                    ? `${isMobile ? 'w-6 h-2' : 'w-10 h-2'} bg-pink-700` 
                    : `${isMobile ? 'w-2 h-2' : 'w-2 h-2'} bg-gray-300 hover:bg-gray-400`
                } rounded-full disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${index + 1}`}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
              />
            ))}
          </div>

       
          
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-10">
         <Link
  className="
    inline-block 
    px-6 
    md:px-8 
    py-3 
    text-base 
    md:text-lg 
    font-semibold
    text-black 
    border-2 
    border-black 
    rounded-xl
    transition-all 
    duration-500
    ease-[cubic-bezier(0.4,0,0.2,1)]
    hover:bg-black 
    hover:text-white
   
   
   
   
    active:translate-y-0
  "
>
  View All Categories
</Link>
        </div>
      </div>
    </section>
  );
};

export default This_Season;