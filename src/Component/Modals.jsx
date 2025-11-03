import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Modals = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [isLoginActive, setIsLoginActive] = useState(false);

    const handleClick = (event) => {
        if (props.onClose) props.onClose();
    };

    return (
        <div
            className="bg-[rgba(0,0,0,0.7)] w-full h-[100vh] flex justify-center items-center font-['Roboto'] fixed z-10"
            onClick={handleClick}
        >
            <div
                className="relative  w-[300px] sm:w-[400px] md:w-[400px] lg:w-[400px] py-5"
                onClick={(event) => event.stopPropagation()}
            >
                {/* LOGIN BOX */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        scale: isRegister ? 0.95 : 1,
                        opacity: isRegister ? 0.5 : 1,
                        y: isRegister ? -10 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 relative z-10"
                >
                    <h2 className="text-pink-600 text-3xl font-bold mb-6 text-center">Login</h2>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-2 text-black focus:outline-none focus:border-pink-600"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border-2 border-pink-300 rounded px-2 py-2 text-black focus:outline-none focus:border-pink-600"
                    />
                    <div className="py-2">
                        <Link rel="# " className="">Forgot password</Link>
                    </div >
                    <div className="text-center   rounded bg-pink-600 hover:bg-pink-800 py-2 font-bold">
                        <button >
                            Login
                        </button>
                    </div>

                    <div className="text-center pt-4">
                        <span>Don't have an account ?</span>
                        <span className="font-bold text-pink-500"><Link   onClick={() => setIsRegister(true)}>signup </Link></span>

                    </div>

                </motion.div>

                {/* FLOATING SIGNUP BALL */}
                <motion.div
                    onClick={() => setIsRegister(true)}
                    initial={{ scale: 1 }}
                    animate={
                        isRegister
                            ? {
                                x: "-50%",
                                y: "-50%",
                                top: "50%",
                                left: "50%",
                            }
                            : { top: "1.5rem", right: "-2.5rem", scale: 1 }
                    }
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className={`absolute bg-white w-20 h-20 rounded-full cursor-pointer flex justify-center items-center text-pink-600 font-bold z-20`}
                    style={{
                        position: "absolute",
                        right: isRegister ? "" : "",
                    }}
                >
                    {!isRegister && "Signup"}
                </motion.div>

                {/* SIGNUP PAGE INSIDE BALL */}
                <AnimatePresence>
                    {isRegister && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute inset-0 bg-white rounded-2xl p-8 z-30 text-center"
                        >
                            <h2 className="text-pink-600 text-3xl font-bold mb-6">Signup</h2>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-2 text-pink-600 focus:outline-none focus:border-pink-600"
                            />
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full mb-4 border-2 border-pink-300 rounded px-2 py-2 text-pink-600 focus:outline-none focus:border-pink-600"
                            />
                            <input
                                type="Confirm a password"
                                placeholder="Repeat Password"
                                className="w-full mb-6 border-2 border-pink-300 rounded px-2 py-2 text-pink-600 focus:outline-none focus:border-pink-600"
                            />
                            <div className="text-center   rounded bg-pink-600 hover:bg-pink-800 py-2 font-bold">
                                <button >
                                    Signup
                                </button>
                            </div>
                            <div className="text-center py-4 ">
                                <span>Already have an account ?</span>
                                <span className="font-bold text-pink-500"><Link   onClick={() => setIsRegister(false)}>login </Link></span>

                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Modals;
