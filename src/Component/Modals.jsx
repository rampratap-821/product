
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const Modals = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Register logic
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    // Login logic
    const [formDatas, setFormDatas] = useState({
        email: "",
        password: "",
    });

    const [loadings, setLoadings] = useState(false);
    const [msgs, setMsgs] = useState("");

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Input handlers
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChanges = (e) => {
        setFormDatas({
            ...formDatas,
            [e.target.name]: e.target.value,
        });
    };

    // Form submissions
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");

        try {
            const res = await axios.post(
                "https://padmpb.onrender.com/api/auth/register",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            setMsg("✅ Registration Successful");
            console.log(res.data);

            // Reset form
            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: "user",
                });
            }, 2000);

        } catch (error) {
            console.error(error);
            setMsg(
                error.response?.data?.message || "❌ Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSubmits = async (e) => {
        e.preventDefault();
        setLoadings(true);
        setMsgs("");

        try {
            const res = await axios.post(
                "https://padmpb.onrender.com/api/auth/login",
                formDatas,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            setMsgs("✅ Login Successful");
            localStorage.setItem("token", res.data.token);
            console.log("Login Response:", res.data);

            // Reset form
            setTimeout(() => {
                setFormDatas({
                    email: "",
                    password: "",
                });
            }, 2000);

        } catch (error) {
            console.error(error);
            setMsgs(
                error.response?.data?.message || "❌ Login Failed"
            );
        } finally {
            setLoadings(false);
        }
    };

    const handleClick = (event) => {
        if (props.onClose) props.onClose();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Real cosmetic images from Unsplash - Different sizes for different devices
    const cosmeticImages = [
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto cycle through images only on desktop
    React.useEffect(() => {
        if (!isMobile) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % cosmeticImages.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    return (
        <div
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
            onClick={handleClick}
        >
            {/* Animated Background Particles - Less on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(isMobile ? 10 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-full"
                        initial={{ 
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0 
                        }}
                        animate={{ 
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: [0, 1, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Glowing Orbs - Smaller on mobile */}
            <div className="absolute inset-0">
                <motion.div
                    className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} rounded-full bg-gradient-to-r from-[#ff7a8a]/20 to-[#ffb3c1]/10 blur-3xl`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} rounded-full bg-gradient-to-r from-[#ffb3c1]/20 to-[#ff7a8a]/10 blur-3xl`}
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>

            {/* Main Modal */}
            <motion.div
                initial={{ scale: 0, rotate: isMobile ? 0 : -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative w-full max-w-4xl mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Dual Panel Layout - Stack on mobile, side by side on tablet/desktop */}
                <div className={`flex ${isMobile ? 'flex-col h-[90vh]' : 'flex-col lg:flex-row'} bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] md:max-h-[85vh]`}>
                    
                    {/* Left Panel - Cosmetic Image Gallery - Hidden on very small mobile, show on tablet+ */}
                    {!isMobile && (
                        <div className={`${isTablet ? 'w-2/5' : 'lg:w-2/5'} relative overflow-hidden ${isMobile ? 'hidden' : 'block'}`}>
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <img 
                                        src={cosmeticImages[currentImageIndex]} 
                                        alt="Cosmetic Products"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                                </motion.div>
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 lg:p-8">
                                {/* Top Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center lg:text-left"
                                >
                                    {/* Logo/Brand */}
                                    <div className={`${isTablet ? 'w-12 h-12' : 'w-16 h-16'} mx-auto lg:mx-0 mb-4 relative`}>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-2xl rotate-45"></div>
                                        <div className="absolute inset-1 bg-white/10 backdrop-blur-sm rounded-2xl rotate-45 flex items-center justify-center">
                                            <svg className={`${isTablet ? 'w-6 h-6' : 'w-8 h-8'} text-white rotate-315`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h2 className={`${isTablet ? 'text-xl' : 'text-2xl lg:text-3xl'} font-bold mb-2 text-white`}>
                                        {isRegister ? "Join Beauty World" : "Welcome Back"}
                                    </h2>
                                    
                                    <p className={`text-white/80 mb-4 ${isTablet ? 'text-xs' : 'text-sm lg:text-base'}`}>
                                        {isRegister 
                                            ? "Discover premium cosmetics and exclusive offers"
                                            : "Access your beauty profile and continue shopping"
                                        }
                                    </p>

                                    {/* Image Indicators */}
                                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                                        {cosmeticImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`${isTablet ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full transition-all duration-300 ${
                                                    currentImageIndex === index
                                                        ? `${isTablet ? 'w-6' : 'w-8'} bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1]`
                                                        : "bg-white/50 hover:bg-white"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Featured Products - Hidden on tablet, show on desktop */}
                                    {!isTablet && (
                                        <div className="hidden lg:block space-y-3">
                                            <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-sm rounded-lg">
                                                <div className="w-8 h-8 bg-gradient-to-br from-[#ff7a8a] to-[#ffb3c1] rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-white text-xs font-semibold">Premium Collection</div>
                                                    <div className="text-white/60 text-xs">Explore luxury beauty</div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-sm rounded-lg">
                                                <div className="w-8 h-8 bg-gradient-to-br from-[#ff8fa3] to-[#ffb3c1] rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-white text-xs font-semibold">Free Shipping</div>
                                                    <div className="text-white/60 text-xs">Orders above $50</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>

                                {/* Bottom Stats */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 pt-4 border-t border-white/20"
                                >
                                    <div className="flex justify-around">
                                        <div className="text-center">
                                            <div className={`${isTablet ? 'text-lg' : 'text-xl'} font-bold text-white`}>5K+</div>
                                            <div className="text-white/60 text-xs">Products</div>
                                        </div>
                                        <div className="text-center">
                                            <div className={`${isTablet ? 'text-lg' : 'text-xl'} font-bold text-white`}>100%</div>
                                            <div className="text-white/60 text-xs">Organic</div>
                                        </div>
                                        <div className="text-center">
                                            <div className={`${isTablet ? 'text-lg' : 'text-xl'} font-bold text-white`}>4.9★</div>
                                            <div className="text-white/60 text-xs">Rating</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Image Navigation Arrows */}
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + cosmeticImages.length) % cosmeticImages.length)}
                                className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${isTablet ? 'w-8 h-8' : 'w-10 h-10'} bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20`}
                            >
                                <svg className={`${isTablet ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % cosmeticImages.length)}
                                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isTablet ? 'w-8 h-8' : 'w-10 h-10'} bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20`}
                            >
                                <svg className={`${isTablet ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Right Panel - Form */}
                    <div className={`${isMobile ? 'w-full' : isTablet ? 'w-full lg:w-3/5' : 'lg:w-3/5'} p-4 sm:p-6 md:p-8 lg:p-8`}>
                        {/* Close Button */}
                        <button
                            onClick={handleClick}
                            className={`absolute ${isMobile ? 'top-2 right-2' : 'top-4 right-4'} text-gray-400 hover:text-white transition-colors`}
                        >
                            <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Form Toggle */}
                        <div className={`flex gap-1 ${isMobile ? 'mb-4' : 'mb-6 md:mb-8'} bg-black/50 rounded-xl md:rounded-2xl p-1 w-fit mx-auto ${isMobile ? '' : 'lg:mx-0'}`}>
                            {["Login", "Register"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setIsRegister(tab === "Register")}
                                    className={`${isMobile ? 'px-3 py-1 text-xs' : 'px-4 md:px-6 py-2 text-sm'} rounded-lg md:rounded-xl font-semibold transition-all duration-300 ${
                                        isRegister === (tab === "Register")
                                            ? "bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] text-white shadow-lg shadow-[#ff7a8a]/20"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Header (only shown on mobile) */}
                        {isMobile && (
                            <div className="text-center mb-4">
                                <h2 className="text-xl font-bold text-white mb-1">
                                    {isRegister ? "Join Beauty World" : "Welcome Back"}
                                </h2>
                                <p className="text-gray-300 text-sm">
                                    {isRegister 
                                        ? "Create your account" 
                                        : "Sign in to continue"
                                    }
                                </p>
                            </div>
                        )}

                        {/* Animated Form Container */}
                        <AnimatePresence mode="wait">
                            {!isRegister ? (
                                <motion.form
                                    key="login"
                                    initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: isMobile ? 0 : -20 }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleSubmits}
                                    className="space-y-4 md:space-y-6"
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className={isMobile ? "text-sm" : ""}>Email Address</span>
                                            </div>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formDatas.email}
                                                onChange={handleChanges}
                                                placeholder="you@example.com"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors placeholder-gray-500 pl-10 md:pl-12"
                                                required
                                            />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <span className={isMobile ? "text-sm" : ""}>Password</span>
                                            </div>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formDatas.password}
                                                onChange={handleChanges}
                                                placeholder="Enter your password"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors placeholder-gray-500 pl-10 md:pl-12"
                                                required
                                            />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                {showPassword ? (
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loadings}
                                        className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] p-px"
                                    >
                                        <div className="relative bg-black rounded-xl px-4 md:px-6 py-2 md:py-3 transition-all duration-300 group-hover:bg-transparent">
                                            <span className="relative text-white font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                                                {loadings ? (
                                                    <>
                                                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        <span className="text-sm md:text-base">Signing In...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                        </svg>
                                                        <span className="text-sm md:text-base">Sign In</span>
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    </button>

                                    {msgs && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-2 md:p-3 rounded-lg text-center text-sm md:text-base font-medium ${
                                                msgs.includes("✅") 
                                                    ? "bg-green-900/20 text-green-400 border border-green-900/30"
                                                    : "bg-red-900/20 text-red-400 border border-red-900/30"
                                            }`}
                                        >
                                            {msgs}
                                        </motion.div>
                                    )}
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="register"
                                    initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: isMobile ? 0 : -20 }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4 md:space-y-6"
                                >
                                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4 md:gap-6`}>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span className={isMobile ? "text-sm" : ""}>Full Name</span>
                                                </div>
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors placeholder-gray-500 pl-10 md:pl-12"
                                                    required
                                                />
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className={isMobile ? "text-sm" : ""}>Email Address</span>
                                                </div>
                                            </label>
                                            <div className="relative group">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors placeholder-gray-500 pl-10 md:pl-12"
                                                    required
                                                />
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className={isMobile ? "text-sm" : ""}>Role</span>
                                            </div>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors appearance-none pl-10 md:pl-12"
                                                required
                                            >
                                                <option value="user" className="bg-gray-900">User</option>
                                                <option value="admin" className="bg-gray-900">Admin</option>
                                                <option value="moderator" className="bg-gray-900">Moderator</option>
                                            </select>
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <span className={isMobile ? "text-sm" : ""}>Password</span>
                                            </div>
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Create a strong password"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-[#ff7a8a] transition-colors placeholder-gray-500 pl-10 md:pl-12"
                                                required
                                            />
                                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                {showPassword ? (
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] p-px"
                                    >
                                        <div className="relative bg-black rounded-xl px-4 md:px-6 py-2 md:py-3 transition-all duration-300 group-hover:bg-transparent">
                                            <span className="relative text-white font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                                                {loading ? (
                                                    <>
                                                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        <span className="text-sm md:text-base">Creating Account...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                        </svg>
                                                        <span className="text-sm md:text-base">Create Account</span>
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    </button>

                                    {msg && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-2 md:p-3 rounded-lg text-center text-sm md:text-base font-medium ${
                                                msg.includes("✅") 
                                                    ? "bg-green-900/20 text-green-400 border border-green-900/30"
                                                    : "bg-red-900/20 text-red-400 border border-red-900/30"
                                            }`}
                                        >
                                            {msg}
                                        </motion.div>
                                    )}
                                </motion.form>
                            )}
                        </AnimatePresence>

                        {/* Switch link at bottom for mobile */}
                        <div className={`text-center ${isMobile ? 'mt-4' : 'mt-6'} pt-4 border-t border-gray-200/20`}>
                            <p className="text-gray-400 text-sm">
                                {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                                <button
                                    onClick={() => setIsRegister(!isRegister)}
                                    className="font-semibold text-[#ff7a8a] hover:text-[#ff6b7d] transition-colors"
                                >
                                    {isRegister ? "Sign In" : "Create Account"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Switch Button - Only show on larger screens */}
                {!isMobile && (
                    <motion.button
                        onClick={() => setIsRegister(!isRegister)}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20"
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-full blur-lg animate-pulse"></div>
                            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center border-2 border-white/10 shadow-2xl">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                        d={isRegister ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"} 
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.button>
                )}

                {/* Mobile Toggle Button - Bottom center for mobile */}
                {isMobile && (
                    <button
                        onClick={() => setIsRegister(!isRegister)}
                        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#ff7a8a] to-[#ffb3c1] rounded-full flex items-center justify-center shadow-lg border-2 border-white/10"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d={isRegister ? "M10 19l-7-7m0 0l7-7m-7 7h18" : "M14 5l7 7m0 0l-7 7m7-7H3"} 
                            />
                        </svg>
                    </button>
                )}
            </motion.div>

            {/* Decorative Corner Elements - Hidden on mobile */}
            {!isMobile && (
                <>
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#ff7a8a] opacity-50"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ffb3c1] opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ff8fa3] opacity-50"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#ff7a8a] opacity-50"></div>
                </>
            )}
        </div>
    );
};

export default Modals;