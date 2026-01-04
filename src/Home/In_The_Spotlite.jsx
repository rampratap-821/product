
import React, { useState } from "react";

const images = [
  "https://media.istockphoto.com/id/1062618124/photo/clean-face-beautiful-woman-cleaning-skin-with-cosmetic-pad.jpg?s=612x612&w=0&k=20&c=xoeqoWS7w3rIM96lPvgZ-Bc14Fc7ZFkOMqpQHTVcgIo= ",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df ",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80 ",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2 ",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb ",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9 ",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04 ",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
];

export default function FullWidthBanner() {
  const [index, setIndex] = useState(0);
  const cardWidth = 260; // image width + gap
  const visibleCards = Math.floor(window.innerWidth / cardWidth);

  const nextSlide = () => {
    if (index < images.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full bg-white py-10 relative overflow-hidden">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        ‹
      </button>

      {/* Slider */}
      <div className="overflow-hidden w-full px-6">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-[240px] h-[420px] rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  );
}


