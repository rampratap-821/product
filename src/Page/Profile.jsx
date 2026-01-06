import React, { useState, useEffect } from 'react'
import { 
  FaBell, FaCamera, FaEdit, FaEye, FaLockOpen, FaPlus, FaSave, 
  FaShoppingCart, FaTractor, FaHeart, FaHome, FaPumpSoap, 
  FaHeadphones, FaWallet, FaMugHot, FaDumbbell, FaClock,
  FaEdit as FaEditIcon, FaTrash, FaRegSmile, FaRegLaughSquint
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiShopify } from "react-icons/si";
import { FaCcAmazonPay, FaMoneyBill1, FaLocationDot } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { IoSettings, IoLogOutSharp, IoShareSocial } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import { RiDeleteBin5Fill, RiMailAddFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Textarea } from 'flowbite-react';
import { GiRotaryPhone } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

const Profile = () => {
    const [show, setShow] = useState(1)
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState("Rampratap Singh")
    const [email] = useState("rampratap.singh@gmail.com")
    const [phone, setPhone] = useState("+91 98765 43210")
    const [tempPhone, setTempPhone] = useState("+91 98765 43210")
    const [address, setAddress] = useState("123 Green Valley, Andheri West, Mumbai, Maharashtra 400053")
    const [tempAddress, setTempAddress] = useState("123 Green Valley, Andheri West, Mumbai, Maharashtra 400053")
    const [memberSince] = useState("March 2023")
    const [activeTab, setActiveTab] = useState(1)

    const [wishlist, setWishlist] = useState([
        { id: 1, name: "Radiant Glow Serum", category: "Face & Skin Care", price: 1899, rating: 4.5, reviews: 128, icon: <FaPumpSoap className="text-black" /> },
        { id: 2, name: "Wireless Earbuds", category: "Electronics", price: 3499, rating: 4.7, reviews: 256, icon: <FaHeadphones className="text-black" /> },
        { id: 3, name: "Leather Wallet", category: "Accessories", price: 2499, rating: 4.8, reviews: 89, icon: <FaWallet className="text-black" /> },
        { id: 4, name: "Organic Green Tea", category: "Food", price: 499, rating: 4.3, reviews: 312, icon: <FaMugHot className="text-black" /> },
        { id: 5, name: "Yoga Mat", category: "Fitness", price: 1599, rating: 4.6, reviews: 178, icon: <FaDumbbell className="text-black" /> },
        { id: 6, name: "Smart Watch", category: "Electronics", price: 8999, rating: 4.4, reviews: 432, icon: <FaClock className="text-black" /> }
    ]);

    const [orders] = useState([
        { id: 1, date: "15 Nov 2024", status: "Delivered", total: 1450, items: 3, tracking: "TRK785421369" },
        { id: 2, date: "10 Nov 2024", status: "Processing", total: 3299, items: 2, tracking: "TRK985421368" },
        { id: 3, date: "05 Nov 2024", status: "Shipped", total: 5499, items: 5, tracking: "TRK685421367" }
    ]);

    const [addresses, setAddresses] = useState([
        { id: 1, type: "Home", isDefault: true, address: "123 Green Valley, Andheri West, Mumbai, Maharashtra 400053" },
        { id: 2, type: "Office", isDefault: false, address: "Tech Park, Floor 8, Hiranandani, Powai, Mumbai 400076" },
        { id: 3, type: "Parents' House", isDefault: false, address: "45 Rose Garden, Sector 22, Delhi 110022" }
    ]);

    // Scroll to top when section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [show]);

    const handleEditSave = () => {
        if (isEditing) {
            setPhone(tempPhone);
            setAddress(tempAddress);
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setTempPhone(phone);
        setTempAddress(address);
        setIsEditing(false);
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    const setDefaultAddress = (id) => {
        setAddresses(addresses.map(addr => ({
            ...addr,
            isDefault: addr.id === id
        })));
    };

    const deleteAddress = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Delivered': return 'bg-green-100 text-green-800 border-green-300';
            case 'Shipped': return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Processing': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            default: return 'bg-black-100 text-black-800 border-black-300';
        }
    };

    const handleNavClick = (id) => {
        setShow(id);
        setActiveTab(id);
    };

    return (
        <div className='bg-gradient-to-br from-black-50 to-white text-black-900 min-h-screen'>
            <div className='py-6 px-4 md:px-8 max-w-7xl '>
                {/* Header */}
                <div className='text-center mb-8 animate-fadeIn'>
                    <h1 className='text-3xl md:text-4xl font-bold text-black'>
                        My Profile
                    </h1>
                    <p className='text-black-600 mt-2 text-sm md:text-base'>
                        Manage your account, track orders, and customize your shopping preferences
                    </p>
                </div>

                {/* Main Layout */}
                <div className='flex flex-col lg:flex-row gap-6 animate-fadeIn'>
                    {/* Sidebar - Left */}
                    <div className='lg:w-1/4'>
                        <div className='bg-white border border-black/20 rounded-2xl p-6  hover:shadow-2xl transition-all duration-300'>
                            {/* Profile Info */}
                            <div className='flex flex-col items-center py-5 border-b border-white/30 mb-6'>
                                <div className='relative mb-4 group'>
                                    <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105'>
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                                            className='w-full h-full object-cover'
                                            alt="Profile"
                                        />
                                    </div>
                                    <button className='absolute bottom-2 right-2 bg-black text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300'>
                                        <FaCamera size={14} className="text-white" />
                                    </button>
                                </div>
                                <h2 className='text-xl font-bold text-black mb-1'>{tempName}</h2>
                                <p className='text-black-800 text-sm mb-3'>{email}</p>
                                <div className='flex items-center space-x-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className='text-yellow-600'>★</span>
                                    ))}
                                    <span className='text-black-800 text-sm ml-2'>(4.4)</span>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className='space-y-2'>
                                {[
                                    { id: 1, icon: <CgProfile className="text-black" />, label: "Profile Info" },
                                    { id: 2, icon: <SiShopify className="text-black" />, label: "My Orders" },
                                    { id: 3, icon: <FaHeart className="text-black" />, label: "Wishlist" },
                                    { id: 4, icon: <FaHome className="text-black" />, label: "Address" },
                                    { id: 5, icon: <FaCcAmazonPay className="text-black" />, label: "Payment" },
                                    { id: 6, icon: <AiFillSecurityScan className="text-black" />, label: "Security" },
                                    { id: 7, icon: <IoSettings className="text-black" />, label: "Settings" }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${
                                            activeTab === item.id 
                                            ? 'bg-white/90 text-black shadow-lg transform scale-[1.02]' 
                                            : 'text-black hover:bg-white/50 hover:shadow-md'
                                        }`}
                                    >
                                        <span className={`text-lg mr-3 transition-transform duration-300 ${
                                            activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'
                                        }`}>
                                            {item.icon}
                                        </span>
                                        <span className='font-medium'>{item.label}</span>
                                        {activeTab === item.id && (
                                            <div className='ml-auto w-2 h-2 bg-black rounded-full animate-pulse'></div>
                                        )}
                                    </button>
                                ))}
                                
                                <button className='flex items-center w-full p-3 rounded-xl text-black hover:bg-white/50 transition-all duration-300 hover:shadow-md group mt-4'>
                                    <span className='text-lg mr-3 group-hover:scale-110 transition-transform duration-300'>
                                        <IoLogOutSharp className="text-black" />
                                    </span>
                                    <span className='font-medium'>Logout</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content - Right */}
                    <div className='lg:w-3/4'>
                        {/* Profile Info */}
                        {show === 1 && (
                            <div className='animate-slideIn'>
                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {[
                                        { icon: <FaLock className="text-black text-xl" />, value: orders.length, label: "Total Orders", color: "" },
                                        { icon: <FaRegSmile className="text-black text-xl" />, value: wishlist.length, label: "Wishlist Items", color: "" },
                                        { icon: <FaLocationDot className="text-black text-xl" />, value: "1,250", label: "Loyalty Points", color: "" },
                                        { icon: <TbTruckDelivery className="text-black text-xl" />, value: "₹8,450", label: "Money Saved", color: "" }
                                    ].map((stat, index) => (
                                        <div 
                                            key={index} 
                                            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 shadow-lg hover:shadow-xl border border-black/20 transition-all duration-300 hover:-translate-y-1`}
                                        >
                                            <div className="text-black mb-3 flex justify-center">{stat.icon}</div>
                                            <h3 className="text-2xl font-bold text-black mb-1 text-center">{stat.value}</h3>
                                            <p className="text-black-900 text-sm text-center">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Profile Form */}
                                <div className='bg-white rounded-2xl shadow-lg border border-black-200 p-6 hover:shadow-xl transition-all duration-300'>
                                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                                        <h2 className='text-2xl font-bold text-black-900 mb-4 md:mb-0'>Profile Information</h2>
                                        <div className='flex gap-3'>
                                            {isEditing ? (
                                                <>
                                                    <button
                                                        onClick={handleEditSave}
                                                        className='flex items-center gap-2 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 text-black px-4 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'
                                                    >
                                                        <FaSave className="text-black" /> Save Changes
                                                    </button>
                                                    <button
                                                        onClick={handleCancel}
                                                        className='flex items-center gap-2 bg-black-200 text-black-800 px-4 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'
                                                    >
                                                        <MdCancel className="text-black" /> Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    onClick={() => setIsEditing(true)}
                                                    className='flex items-center gap-2 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 text-black px-4 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'
                                                >
                                                    <FaEdit className="text-black" /> Edit Profile
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                        {[
                                            { label: "Full Name", value: tempName, setValue: setTempName, icon: <CgProfile className="text-black" /> },
                                            { label: "Phone Number", value: tempPhone, setValue: setTempPhone, icon: <GiRotaryPhone className="text-black" /> },
                                            { label: "Email Address", value: email, icon: <RiMailAddFill className="text-black" />, disabled: true },
                                            { label: "Member Since", value: memberSince, icon: <SlCalender className="text-black" />, disabled: true }
                                        ].map((field, index) => (
                                            <div key={index} className='space-y-2 transition-all duration-300 hover:scale-[1.01]'>
                                                <label className='text-black-700 font-medium'>{field.label}</label>
                                                <div className={`flex items-center bg-black-50 rounded-xl p-3 border ${
                                                    isEditing && !field.disabled ? 'border-pink-700' : 'border-black-300'
                                                } transition-all duration-300`}>
                                                    <span className='mr-3'>{field.icon}</span>
                                                    <input
                                                        type='text'
                                                        value={field.value}
                                                        onChange={(e) => field.setValue?.(e.target.value)}
                                                        disabled={!isEditing || field.disabled}
                                                        className='flex-1 bg-transparent outline-none text-black-900 text-base disabled:opacity-75'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className='space-y-2 transition-all duration-300 hover:scale-[1.01]'>
                                        <label className='text-black-700 font-medium'>Delivery Address</label>
                                        <div className={`bg-black-50 rounded-xl p-3 border ${
                                            isEditing ? 'border-pink-700' : 'border-black-300'
                                        } transition-all duration-300`}>
                                            <Textarea
                                                value={tempAddress}
                                                onChange={(e) => setTempAddress(e.target.value)}
                                                disabled={!isEditing}
                                                className='bg-transparent border-none text-black-900 text-base min-h-[100px] resize-none'
                                                placeholder="Enter your delivery address..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Orders */}
                        {show === 2 && (
                            <div className='animate-slideIn'>
                                <div className='bg-white rounded-2xl shadow-lg border border-black-200 p-6 hover:shadow-xl transition-all duration-300'>
                                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                                        <h2 className='text-2xl font-bold text-black-900 mb-4 md:mb-0'>My Orders</h2>
                                        <div className='px-4 py-2 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 rounded-full'>
                                            <span className='text-black font-medium'>Total Orders: {orders.length}</span>
                                        </div>
                                    </div>

                                    <div className='space-y-4'>
                                        {orders.map((order) => (
                                            <div key={order.id} className='bg-black-50 rounded-xl p-5 border border-black-300 hover:border-pink-700 hover:shadow-md transition-all duration-300'>
                                                <div className='flex flex-col md:flex-row justify-between mb-4'>
                                                    <div>
                                                        <h3 className='text-lg font-bold text-black-900'>Order #{order.id.toString().padStart(6, '0')}</h3>
                                                        <p className='text-black-600 text-sm flex items-center mt-1'>
                                                            <CiShop className='mr-2 text-black' /> Placed on {order.date}
                                                        </p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)} mt-2 md:mt-0`}>
                                                        {order.status}
                                                    </span>
                                                </div>

                                                <div className='mb-4'>
                                                    <h4 className='text-black-700 text-sm mb-2'>Products:</h4>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {["Lipstick", "Sneakers", "T-Shirt", "Headphones", "Phone Case"].slice(0, order.items).map((item, idx) => (
                                                            <div key={idx} className='flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-black-300 hover:border-pink-700 hover:scale-105 transition-all duration-200'>
                                                                <span className='text-black'>
                                                                    {idx === 0 ? <FaRegLaughSquint className="text-black" /> : 
                                                                     idx === 1 ? <FaShoppingCart className="text-black" /> : 
                                                                     idx === 2 ? <FaShoppingCart className="text-black" /> : 
                                                                     idx === 3 ? <FaHeadphones className="text-black" /> : 
                                                                     <FaHeadphones className="text-black" />}
                                                                </span>
                                                                <span className='text-sm font-medium'>{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-black-300 text-sm'>
                                                    <div className='flex items-center text-black-700'>
                                                        <CiShop className='mr-2 text-black' /> <span>Items: {order.items}</span>
                                                    </div>
                                                    <div className='flex items-center text-black-700'>
                                                        <FaMoneyBill1 className='mr-2 text-black' /> <span>Total: ₹{order.total.toLocaleString()}</span>
                                                    </div>
                                                    <div className='flex items-center text-black-700'>
                                                        <FaTractor className='mr-2 text-black' /> <span>Track</span>
                                                    </div>
                                                    <div className='flex items-center text-black-700'>
                                                        <FaEye className='mr-2 text-black' /> <button className='hover:text-pink-700 transition-colors'>Details</button>
                                                    </div>
                                                    <div className='flex items-center text-black-700'>
                                                        <CiShop className='mr-2 text-black' /> <button className='hover:text-pink-700 transition-colors'>Reorder</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Wishlist */}
                        {show === 3 && (
                            <div className='animate-slideIn'>
                                <div className='bg-white rounded-2xl shadow-lg border border-black-200 p-6 hover:shadow-xl transition-all duration-300'>
                                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                                        <h2 className='text-2xl font-bold text-black-900 mb-4 md:mb-0'>My Wishlist</h2>
                                        <div className='px-4 py-2 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 rounded-full'>
                                            <span className='text-black font-medium'>Items: {wishlist.length}</span>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                        {wishlist.map((item) => (
                                            <div key={item.id} className='bg-white rounded-xl p-4 border border-black-300 hover:border-pink-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group'>
                                                <div className='text-center mb-4'>
                                                    <div className='flex justify-center mb-3 text-3xl'>
                                                        {item.icon}
                                                    </div>
                                                    <h3 className='font-bold text-black-900 group-hover:text-pink-700 transition-colors duration-300'>{item.name}</h3>
                                                    <p className='text-black-600 text-sm mt-1'>{item.category}</p>
                                                </div>
                                                
                                                <div className='flex justify-between items-center mb-4'>
                                                    <div className='text-lg font-bold text-black-900'>₹{item.price.toLocaleString()}</div>
                                                    <div className='flex items-center'>
                                                        <div className='text-yellow-500'>
                                                            {"★".repeat(Math.floor(item.rating))}
                                                            <span className='text-black-300'>{"★".repeat(5-Math.floor(item.rating))}</span>
                                                        </div>
                                                        <span className='text-black-600 text-sm ml-2'>({item.reviews})</span>
                                                    </div>
                                                </div>

                                                <div className='flex justify-between items-center'>
                                                    <button 
                                                        onClick={() => removeFromWishlist(item.id)}
                                                        className='p-2 hover:text-red-600 transition-colors duration-300 hover:scale-110'
                                                        title='Remove from wishlist'
                                                    >
                                                        <RiDeleteBin5Fill className='text-black' />
                                                    </button>
                                                    <button className='flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105'>
                                                        <MdShoppingCart className="text-black" />
                                                        <span className='text-black font-medium text-sm'>Add to Cart</span>
                                                    </button>
                                                    <button className='p-2 hover:text-blue-600 transition-colors duration-300 hover:scale-110' title='Share'>
                                                        <IoShareSocial className='text-black' />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Address */}
                        {show === 4 && (
                            <div className='animate-slideIn'>
                                <div className='bg-white rounded-2xl shadow-lg border border-black-200 p-6 hover:shadow-xl transition-all duration-300'>
                                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                                        <h2 className='text-2xl font-bold text-black-900 mb-4 md:mb-0'>My Addresses</h2>
                                        <button className='flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'>
                                            <FaPlus className="text-black" /> Add New Address
                                        </button>
                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        {addresses.map((addr) => (
                                            <div 
                                                key={addr.id} 
                                                className={`bg-white rounded-xl p-5 border ${
                                                    addr.isDefault ? 'border-pink-700 shadow-md' : 'border-black-300'
                                                } hover:border-pink-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                                            >
                                                <div className='flex justify-between items-start mb-4'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className={`p-3 rounded-lg ${
                                                            addr.isDefault ? 'bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700' : 'bg-black-100'
                                                        } transition-all duration-300`}>
                                                            <FaHome className="text-black" />
                                                        </div>
                                                        <div>
                                                            <h3 className='font-bold text-black-900'>{addr.type}</h3>
                                                            {addr.isDefault && (
                                                                <span className='px-3 py-1 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 text-black text-sm rounded-full mt-2 inline-block'>Default</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <button className='p-2 hover:text-blue-600 transition-colors duration-300 hover:scale-110' title='Edit address'>
                                                            <FaEditIcon className="text-black" />
                                                        </button>
                                                        <button 
                                                            onClick={() => deleteAddress(addr.id)}
                                                            className='p-2 hover:text-red-600 transition-colors duration-300 hover:scale-110'
                                                            title='Delete address'
                                                        >
                                                            <FaTrash className="text-black" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className='text-black-700 leading-relaxed'>{addr.address}</p>
                                                {!addr.isDefault && (
                                                    <button 
                                                        onClick={() => setDefaultAddress(addr.id)}
                                                        className='mt-4 text-sm text-black-600 hover:text-pink-700 transition-colors duration-300 hover:scale-105 inline-block'
                                                    >
                                                        Set as default →
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Coming Soon Sections */}
                        {[5, 6, 7].includes(show) && (
                            <div className='animate-slideIn'>
                                <div className='bg-white rounded-2xl shadow-lg border border-black-200 p-8 text-center hover:shadow-xl transition-all duration-300'>
                                    <div className='max-w-md mx-auto'>
                                        <div className='w-20 h-20 rounded-full bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 flex items-center justify-center mx-auto mb-6 animate-pulse'>
                                            {show === 5 && <FaCcAmazonPay className='text-3xl text-black' />}
                                            {show === 6 && <FaLockOpen className='text-3xl text-black' />}
                                            {show === 7 && <IoSettingsSharp className='text-3xl text-black' />}
                                        </div>
                                        <h3 className='text-2xl font-bold text-black-900 mb-3'>
                                            {show === 5 && 'Payment Management'}
                                            {show === 6 && 'Security Settings'}
                                            {show === 7 && 'Account Settings'}
                                        </h3>
                                        <p className='text-black-600 mb-6'>
                                            This section is under development and will be available soon with exciting features!
                                        </p>
                                        <button className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-pink-700 via-pink-700 to-pink-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105'>
                                            <FaBell className="text-black" />
                                            <span className='text-black font-medium'>Notify Me When Ready</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add smooth animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }

                .animate-slideIn {
                    animation: slideIn 0.4s ease-out;
                }

                /* Smooth scrolling for the whole page */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    )
}

export default Profile