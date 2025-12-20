import React from "react";

const products = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
];

const Get_Glowing = () => {
  return (
    <section className="w-full min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center bg-white px-4 py-8">

      {/* HEADING */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          LUXURY COSMETICS
        </h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Premium Beauty Collection
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="mt-8 w-full max-w-4xl">
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {products.map((img, index) => (
            <div
              key={index}
              className="
              w-[100px] h-[140px]
              sm:w-[130px] sm:h-[180px]
              md:w-[150px] md:h-[200px]
              rounded-lg overflow-hidden
              border border-gray-300
              shadow-sm
              hover:shadow-md
              transition-all duration-300
              "
            >
              <img
                src={img}
                alt="cosmetic product"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <button
          className="
          px-6 py-2 rounded-md
          border border-black
          text-black
          hover:bg-black hover:text-white
          transition-colors duration-300
          text-sm sm:text-base
          "
        >
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  );
};

export default Get_Glowing;