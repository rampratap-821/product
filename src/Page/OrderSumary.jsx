import React from "react";
import { Link } from "react-router-dom";

export default function OrderSumary({ formData, setFormData, card, setCard }) {

  // 🔒 SAFETY GUARD (UI level only)
  if (!card || card.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading order summary...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Address */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
              Delivery Address
            </h3>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-white">
                  {formData?.name || "Customer Name"}
                  <span className="ml-2 text-xs bg-gray-800 px-2 py-0.5 rounded text-white">
                    HOME
                  </span>
                </p>

                <p className="text-sm text-gray-300 mt-1">
                  {formData?.mobile || "XXXXXXXXXX"}
                </p>
                 <p className="text-sm text-gray-300 mt-1">
                  {formData?.address || "XXXXXXXXXX"}
                </p>
                 <p className="text-sm text-gray-300 mt-1">
                  {formData?.city || "XXXXXXXXXX"}
                </p>
              </div>

              <Link to = {"/addDeliveryAddress"} className="text-pink-500 text-sm font-semibold hover:underline">
                Change
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-5">
              Product Details
            </h3>

            <div className="flex gap-6">
              <img
                src={card?.[0]?.image}
                alt="product"
                className="w-32 h-32 object-cover rounded border border-gray-700"
              />

              <div className="flex-1">
                <p className="font-medium text-white mb-2">
                  {card?.[0]?.title}
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                    4.4 ★
                  </span>
                  <span className="text-xs text-gray-400">
                    (2,839 ratings)
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-bold text-white">
                    ₹{card?.[0]?.price}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    ₹799
                  </span>
                  <span className="text-sm text-green-500 font-semibold">
                    64% off
                  </span>
                </div>

                <p className="text-sm text-gray-300">
                  Delivery by <span className="font-medium text-white">Oct 15</span> | FREE
                </p>
              </div>
            </div>
          </div>

          {/* Donation */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
              Donate to Ram Cosmetic
            </h3>

            <div className="flex gap-3">
              {[10, 20, 50, 100].map((amt) => (
                <button
                  key={amt}
                  className="px-4 py-2 border border-gray-700 rounded text-white
                  hover:border-pink-500 hover:text-pink-500 transition"
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-black p-6 rounded-lg border border-gray-800 h-fit sticky top-24">

          <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-5">
            Price Details
          </h3>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Price (1 item)</span>
              <span className="text-white">₹{card?.[0]?.price}</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">− ₹5</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-500">FREE</span>
            </div>
          </div>

          <div className="border-t border-gray-800 my-4"></div>

          <div className="flex justify-between font-semibold text-lg text-white">
            <span>Total Amount</span>
            <span>₹{(card?.[0]?.price || 0) + 5}</span>
          </div>

          <p className="text-sm text-green-500 mt-2">
            You will save ₹{(card?.[0]?.price || 0) + 5} on this order
          </p>

          <Link
            to="/payment"
            className="block mt-6 text-center 
            bg-gradient-to-r from-pink-500 to-rose-500
            hover:opacity-90 text-white font-semibold py-3 rounded transition"
          >
            Continue to Payment
          </Link>
        </div>

      </div>
    </div>
  );
}
