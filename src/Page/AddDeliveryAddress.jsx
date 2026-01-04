import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddDeliveryAddress = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", formData);
   
    navigate("/orderSumary");
  };

  return (
  <div className="min-h-screen bg-[#f1f3f6] py-10 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

      {/* LEFT : ADDRESS FORM */}
      <div className="lg:col-span-2 bg-white rounded-sm shadow">

        {/* HEADER */}
        <div className="px-8 py-6 border-b">
          <h1 className="text-2xl font-semibold text-gray-800">
            Add a delivery address
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Use a permanent address where you can receive orders
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">

          {/* NAME + MOBILE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* PINCODE CITY STATE */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address (House No, Building, Street)
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Locality / Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* ADDRESS TYPE */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Address Type
            </p>
            <div className="flex gap-6">
              {["home", "work"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="addressType"
                    value={type}
                    checked={formData.addressType === type}
                    onChange={handleChange}
                  />
                  {type.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Link
              to="/wishlist"
              className="px-6 py-2 border border-gray-300 text-gray-700 text-sm"
            >
              Back
            </Link>

            <button
              type="submit"
              className="px-8 py-2 bg-pink-700 text-white text-sm font-medium hover:bg-pink-800"
            >
              Save & Deliver address
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT : INFO BOX (WEB FEEL) */}
      <div className="bg-white shadow rounded-sm h-fit">
        <div className="px-6 py-5 border-b">
          <h2 className="text-sm font-semibold text-gray-700">
            DELIVERY INFO
          </h2>
        </div>
        <div className="px-6 py-4 text-sm text-gray-600 space-y-3">
          <p>• Safe & secure payments</p>
          <p>• Fast delivery across India</p>
          <p>• Easy returns available</p>
        </div>
      </div>

    </div>
  </div>
);

};

export default AddDeliveryAddress;
