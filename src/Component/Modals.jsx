// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const Modals = (props) => {
//     const [isRegister, setIsRegister] = useState(false);
//     const [isLoginActive, setIsLoginActive] = useState(false);

//     const handleClick = (event) => {
//         if (props.onClose) props.onClose();
//     };

//     return (
//         <div
//             className="bg-[rgba(0,0,0,0.7)] w-full h-[100vh] flex justify-center items-center font-['Roboto'] fixed z-10"
//             onClick={handleClick}
//         >
//             <div
//                 className="relative  w-[300px] sm:w-[400px] md:w-[400px] lg:w-[400px] py-5"
//                 onClick={(event) => event.stopPropagation()}
//             >
//                 {/* LOGIN BOX */}
//                 <motion.div
//                     initial={{ opacity: 1, scale: 1 }}
//                     animate={{
//                         scale: isRegister ? 0.95 : 1,
//                         opacity: isRegister ? 0.5 : 1,
//                         y: isRegister ? -10 : 0,
//                     }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-black rounded-2xl p-8 relative z-10"
//                 >
//                     <h2 className="text-pink-600 text-3xl font-bold mb-6 text-center">Login</h2>
//                     <input
//                         type="text"
//                         placeholder="Enter your email"
//                         className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-2 text-black focus:outline-none focus:border-pink-600"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                         className="w-full border-2 border-pink-300 rounded px-2 py-2 text-black focus:outline-none focus:border-pink-600"
//                     />
//                     <div className="py-2">
//                         <Link rel="# " className="">Forgot password</Link>
//                     </div >
//                     <div className="text-center   rounded bg-pink-600 hover:bg-pink-800 py-2 font-bold">
//                         <button >
//                             Login
//                         </button>
//                     </div>

//                     <div className="text-center pt-4">
//                         <span className="text-teal-400">Don't have an account ?</span>
//                         <span className="font-bold text-pink-500"><Link   onClick={() => setIsRegister(true)}>signup </Link></span>

//                     </div>

//                 </motion.div>

//                 {/* FLOATING SIGNUP BALL */}
//                 <motion.div
//                     onClick={() => setIsRegister(true)}
//                     initial={{ scale: 1 }}
//                     animate={
//                         isRegister
//                             ? {
//                                 x: "-50%",
//                                 y: "-50%",
//                                 top: "50%",
//                                 left: "50%",
//                             }
//                             : { top: "1.5rem", right: "-2.5rem", scale: 1 }
//                     }
//                     transition={{
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className={`absolute bg-teal-400 w-20 h-20 rounded-full cursor-pointer flex justify-center items-center text-pink-600 font-bold z-20`}
//                     style={{
//                         position: "absolute",
//                         right: isRegister ? "" : "",
//                     }}
//                 >
//                     {!isRegister && "Signup"}
//                 </motion.div>

//                 {/* SIGNUP PAGE INSIDE BALL */}
//                 <AnimatePresence>
//                     {isRegister && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                             animate={{ opacity: 1, y: 0, scale: 1 }}
//                             exit={{ opacity: 0, scale: 0.8 }}
//                             transition={{ delay: 0.6, duration: 0.6 }}
//                             className="absolute inset-0 bg-black rounded-2xl p-8 z-30 text-center"
//                         >
//                             <h2 className="text-pink-600 text-3xl font-bold mb-6">Signup</h2>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-1 text-pink-600 focus:outline-none focus:border-pink-600"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-1 text-pink-600 focus:outline-none focus:border-pink-600"
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="Enter your password"
//                                 className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-1 text-pink-600 focus:outline-none focus:border-pink-600"
//                             />
//                               <input
//                                 type="password"
//                                 placeholder="Enter your password"
//                                 className="w-full mb-6 border-2 border-pink-300 rounded px-2 py-1 text-pink-600 focus:outline-none focus:border-pink-600"
//                             />
//                             <div className="text-center   rounded bg-pink-600 hover:bg-pink-800 py-1 font-bold">
//                                 <button >
//                                     Signup
//                                 </button>
//                             </div>
//                             <div className="text-center py-4 ">
//                                 <span className="text-teal-400">Already have an account ?</span>
//                                 <span className="font-bold text-pink-500"><Link   onClick={() => setIsRegister(false)}>login </Link></span>

//                             </div>

//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// export default Modals;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";


const Modals = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //// ragister


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",

    });

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    // input change handle
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // submit
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

        } catch (error) {
            console.error(error);
            setMsg(
                error.response?.data?.message || "❌ Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };


    // login


    const [formDatas, setFormDatas] = useState({
        email: "",
        password: "",
    });

    const [loadings, setLoadings] = useState(false);
    const [msgs, setMsgs] = useState("");

    const handleChanges = (e) => {
        setFormDatas({
            ...formDatas,
            [e.target.name]: e.target.value,
        });
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

            // token save in localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("login", handleClick());

            console.log("Login Response:", res.data);

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

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div
            className="w-full h-[100vh] flex justify-center items-center font-['Roboto'] fixed z-50"
            onClick={handleClick}
        >
            {/* Space Background with Stars and Nebula - SAME FOR BOTH */}
            <div className="absolute inset-0 bg-black">
                {/* Animated Stars */}
                <div className="absolute inset-0">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full animate-pulse"
                            style={{
                                width: Math.random() * 3 + 1 + 'px',
                                height: Math.random() * 3 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animationDuration: Math.random() * 3 + 2 + 's',
                                opacity: Math.random() * 0.7 + 0.3
                            }}
                        />
                    ))}
                </div>

                {/* Animated Nebula/Clouds */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
                </div>
            </div>

            <div
                className="relative w-[300px] sm:w-[400px] md:w-[400px] lg:w-[400px] py-5"
                onClick={(event) => event.stopPropagation()}
            >
                {/* LOGIN BOX - Glassmorphism Design */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        scale: isRegister ? 0.95 : 1,
                        opacity: isRegister ? 0.5 : 1,
                        y: isRegister ? -10 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-900/80 to-purple-900/60 backdrop-blur-xl rounded-2xl p-8 relative z-10 border border-purple-500/30 shadow-2xl shadow-purple-900/30"
                    style={{
                        display: isRegister ? 'none' : 'block'
                    }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30"></div>
                        </div>
                    </div>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-3xl font-bold mb-6 text-center"> Login</h2>


                    <form onSubmit={handleSubmits}>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                     value={formDatas.email}
                                    onChange={handleChanges}
                                    placeholder="Enter your email"
                                    className="w-full mb-4 bg-gray-800/50 border-2 border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-400"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="password"
                                      name="password"
                                      value={formDatas.password}
                                    onChange={handleChanges}
                                    placeholder="Enter your password"
                                    className="w-full bg-gray-800/50 border-2 border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-400 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>


                        <div className=" mt-5 text-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 font-bold cursor-pointer transform hover:scale-[1.02] transition-all shadow-lg shadow-purple-600/30">
                            <button className="w-full text-white" type="submit" disabled={loadings}>
                                 {loadings ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>

                       {msgs && <p>{msgs}</p>}

                    <div className="text-center pt-6">
                        <span className="text-cyan-300">Don't have an account ? </span>
                        <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            <Link onClick={() => setIsRegister(true)} className="hover:text-pink-300 transition-colors"> Sign up</Link>
                        </span>
                    </div>

                </motion.div>

                {/* SIGNUP BOX - EXACTLY SAME AS LOGIN BUT WITH SIGNUP CONTENT */}
                <AnimatePresence>
                    {isRegister && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-gray-900/80 to-purple-900/60 backdrop-blur-xl rounded-2xl p-8 relative z-10 border border-purple-500/30 shadow-2xl shadow-purple-900/30"
                        >

                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 text-3xl font-bold mb-6 text-center">Register</h2>


                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border-2 border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-400"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border-2 border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-400"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                    </div>


                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="role"
                                            placeholder="Enter your role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border-2 border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-400"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>
                                    </div>





                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800/50 border-2 border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-400 pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300"
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>


                                </div>

                                <div className="text-center rounded-lg bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 py-3 font-bold cursor-pointer transform hover:scale-[1.02] transition-all mt-6 shadow-lg shadow-cyan-600/30">
                                    <button className="w-full text-white" type="submit" disabled={loading}>
                                        {loading ? "Registering..." : "Register"}
                                    </button>
                                </div>
                            </form>
                            {msg && <p>{msg}</p>}
                            <div className="text-center pt-6">
                                <span className="text-purple-300">Already have an account ? </span>
                                <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                                    <Link onClick={() => setIsRegister(false)} className="hover:text-cyan-300 transition-colors"> Login</Link>
                                </span>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FLOATING SIGNUP BALL - FIXED POSITION (Both Login and Signup mein same jagah) */}
                <motion.div
                    onClick={() => setIsRegister(!isRegister)}
                    initial={{ top: "1.5rem", right: "-2.5rem", scale: 1 }}
                    animate={{
                        top: "1.5rem",
                        right: "-2.5rem",
                        scale: 1,
                        rotate: isRegister ? 360 : 0
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className={`absolute w-20 h-20 rounded-full cursor-pointer flex justify-center items-center z-20 overflow-hidden`}
                    style={{
                        position: "absolute",
                    }}
                >
                    {/* Planet Surface */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-500 to-pink-500 rounded-full"></div>

                    {/* Planet Rings */}
                    <div className="absolute w-32 h-2 bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-45 opacity-70"></div>
                    <div className="absolute w-28 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent -rotate-45 opacity-60"></div>

                    {/* Planet Craters */}
                    <div className="absolute top-4 left-6 w-4 h-4 bg-purple-700/40 rounded-full"></div>
                    <div className="absolute bottom-6 right-8 w-3 h-3 bg-pink-700/40 rounded-full"></div>
                    <div className="absolute top-8 right-4 w-5 h-5 bg-teal-700/40 rounded-full"></div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-pink-400 rounded-full blur opacity-30"></div>

                    {/* Ball Text - Changes based on state */}
                    <span className="relative text-white font-bold text-sm drop-shadow-lg ">
                        {isRegister ? "Login" : "Signup"}
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default Modals;