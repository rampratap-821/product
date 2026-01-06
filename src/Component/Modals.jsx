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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
            onClick={handleClick}
        >
            {/* Animated Background Particles - Less on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(isMobile ? 10 : 20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-700 rounded-full"
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

            {/* Main Modal */}
            <motion.div
                initial={{ scale: 0, rotate: isMobile ? 0 : -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: isMobile ? 0 : 180 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative w-full max-w-4xl mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Dual Panel Layout - Stack on mobile, side by side on tablet/desktop */}
                <div className={`flex ${isMobile ? 'flex-col h-[90vh]' : 'flex-col lg:flex-row'} bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10  max-h-[90vh] md:max-h-[85vh]`}>
                    
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
                                            ? "bg-gradient-to-r from-pink-700 to-pink-700 text-white "
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

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
                                            <div className="absolute -inset-0.5  rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formDatas.email}
                                                onChange={handleChanges}
                                                placeholder="you@example.com"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors placeholder-gray-500 pl-10 md:pl-12"
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
                                            <div className="absolute -inset-0.5  rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formDatas.password}
                                                onChange={handleChanges}
                                                placeholder="Enter your password"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors placeholder-gray-500 pl-10 md:pl-12"
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
                                        className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-700 via-pink-700 to-pink-700 p-px"
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
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 to-pink-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors placeholder-gray-500 pl-10 md:pl-12"
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
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 to-pink-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors placeholder-gray-500 pl-10 md:pl-12"
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
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 to-pink-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors appearance-none pl-10 md:pl-12"
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
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-700 to-pink-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Create a strong password"
                                                className="relative w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 md:py-3 text-white focus:outline-none focus:border-pink-700 transition-colors placeholder-gray-500 pl-10 md:pl-12"
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
                                        className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-700 via-pink-700 to-pink-700 p-px"
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
                        <div className={`text-center ${isMobile ? 'mt-4' : 'mt-6'}`}>
                            <p className="text-gray-400 text-sm">
                                {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                                <button
                                    onClick={() => setIsRegister(!isRegister)}
                                    className="font-semibold text-pink-700 hover:text-pink-800 transition-colors"
                                >
                                    {isRegister ? "Sign In" : "Create Account"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modals;