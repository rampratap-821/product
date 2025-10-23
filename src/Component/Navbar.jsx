import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBasketFill, RiSearchLine, RiUserLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const dropdowns = {
        brands: {
            title: "Brands",
            items: [
                { title: "L'Oreal", description: "Premium beauty products" },
                { title: "Maybelline", description: "Affordable makeup" },
                { title: "Lakme", description: "Indian beauty brand" },
                { title: "Huda Beauty", description: "Luxury cosmetics" },
                { title: "MAC", description: "Professional makeup" },
            ]
        },
        luxe: {
            title: "Luxe",
            items: [
                { title: "Designer Perfumes", description: "Luxury fragrances" },
                { title: "Premium Skincare", description: "High-end skincare" },
                { title: "Luxury Makeup", description: "Premium cosmetics" },
                { title: "VIP Services", description: "Exclusive treatments" },
            ]
        },
        nykaFashion: {
            title: "Nyka Fashion",
            items: [
                { title: "Western Wear", description: "Trendy outfits" },
                { title: "Ethnic Wear", description: "Traditional clothing" },
                { title: "Accessories", description: "Jewelry & more" },
                { title: "Footwear", description: "Shoes & sandals" },
            ]
        },
        beautyAdvice: {
            title: "Beauty Advice",
            items: [
                { title: "Skincare Tips", description: "Healthy skin guide" },
                { title: "Makeup Tutorials", description: "Step-by-step guides" },
                { title: "Hair Care", description: "Hair treatment tips" },
                { title: "Expert Advice", description: "Professional tips" },
            ]
        }
    };

    // HAR DROPDOWN KI ALAG DESIGN - RESPONSIVE VERSION
    const dropdownDesigns = {
        brands: {
            container: "absolute top-full left-0 mt-2 w-72 md:w-80 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl border border-pink-200 z-50 overflow-hidden",
            content: "p-3 md:p-4",
            grid: "grid grid-cols-1 gap-2 md:gap-3",
            item: "block p-3 md:p-4 rounded-lg md:rounded-xl bg-white/80 backdrop-blur-sm border border-white hover:bg-white hover:shadow-md md:hover:shadow-lg hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
            title: "font-bold text-pink-700 text-sm",
            description: "text-xs text-pink-500 mt-1 hidden md:block",
            arrow: "w-3 h-3 ms-2 transition-transform duration-300"
        },
        luxe: {
            container: "absolute top-full left-0 mt-2 w-64 md:w-72 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-amber-200 z-50 overflow-hidden",
            content: "p-3 md:p-4",
            grid: "grid grid-cols-1 gap-2",
            item: "block p-2 md:p-3 rounded-lg bg-amber-100/50 hover:bg-amber-200 hover:shadow-sm md:hover:shadow-md border border-amber-100 hover:border-amber-300 transition-all duration-200 transform hover:-translate-y-0.5",
            title: "font-semibold text-amber-800 text-sm",
            description: "text-xs text-amber-600 mt-1 hidden md:block",
            arrow: "w-3 h-3 ms-2 transition-transform duration-200"
        },
        nykaFashion: {
            container: "absolute top-full left-0 mt-2 w-80 md:w-96 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl md:rounded-3xl shadow-xl md:shadow-2xl border border-purple-200 z-50 overflow-hidden",
            content: "p-4 md:p-6",
            grid: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4",
            item: "block p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-lg md:hover:shadow-xl border border-purple-100 hover:border-purple-300 transition-all duration-400 transform hover:-translate-y-1",
            title: "font-bold text-purple-700 text-sm",
            description: "text-xs text-purple-500 mt-1 hidden md:block",
            arrow: "w-3 h-3 ms-2 transition-transform duration-300"
        },
        beautyAdvice: {
            container: "absolute top-full left-0 mt-2 w-72 md:w-88 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-blue-200 z-50 overflow-hidden",
            content: "p-3 md:p-4",
            grid: "grid grid-cols-1 gap-2",
            item: "block p-2 md:p-3 rounded-lg bg-blue-100/30 hover:bg-blue-200 hover:shadow-sm border border-blue-100 hover:border-blue-300 transition-all duration-150",
            title: "font-medium text-blue-700 text-sm",
            description: "text-xs text-blue-500 mt-1 hidden md:block",
            arrow: "w-3 h-3 ms-2 transition-transform duration-200"
        }
    };

    const handleDropdownToggle = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200 ">
            {/* Main Navbar */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between py-3 md:py-4">
                    {/* Left Section - Logo & Navigation */}
                    <div className="flex items-center space-x-4 md:space-x-8">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <span className="text-xl md:text-2xl font-bold text-pink-600">Rampratap</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <ul className="flex items-center space-x-6">
                                {/* Categories - No Dropdown */}
                                <li>
                                    <Link to="/categories" className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm md:text-base">
                                        Categories
                                    </Link>
                                </li>

                                {/* Brands Dropdown */}
                                <li className="relative dropdown-container">
                                    <button
                                        onClick={() => handleDropdownToggle('brands')}
                                        className="flex items-center justify-between text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm md:text-base"
                                    >
                                        Brands
                                        <svg
                                            className={`${dropdownDesigns.brands.arrow} ${activeDropdown === 'brands' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {activeDropdown === 'brands' && (
                                        <div
                                            className={dropdownDesigns.brands.container}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={dropdownDesigns.brands.content}>
                                                <div className={dropdownDesigns.brands.grid}>
                                                    {dropdowns.brands.items.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/brands/${item.title.toLowerCase().replace(' ', '-')}`}
                                                            className={dropdownDesigns.brands.item}
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <div className={dropdownDesigns.brands.title}>{item.title}</div>
                                                            <div className={dropdownDesigns.brands.description}>{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                {/* Luxe Dropdown */}
                                <li className="relative dropdown-container">
                                    <button
                                        onClick={() => handleDropdownToggle('luxe')}
                                        className="flex items-center justify-between text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm md:text-base"
                                    >
                                        Luxe
                                        <svg
                                            className={`${dropdownDesigns.luxe.arrow} ${activeDropdown === 'luxe' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {activeDropdown === 'luxe' && (
                                        <div
                                            className={dropdownDesigns.luxe.container}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={dropdownDesigns.luxe.content}>
                                                <div className={dropdownDesigns.luxe.grid}>
                                                    {dropdowns.luxe.items.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/luxe/${item.title.toLowerCase().replace(' ', '-')}`}
                                                            className={dropdownDesigns.luxe.item}
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <div className={dropdownDesigns.luxe.title}>{item.title}</div>
                                                            <div className={dropdownDesigns.luxe.description}>{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                {/* Nyka Fashion Dropdown */}
                                <li className="relative dropdown-container">
                                    <button
                                        onClick={() => handleDropdownToggle('nykaFashion')}
                                        className="flex items-center justify-between text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm md:text-base"
                                    >
                                        Nyka Fashion
                                        <svg
                                            className={`${dropdownDesigns.nykaFashion.arrow} ${activeDropdown === 'nykaFashion' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {activeDropdown === 'nykaFashion' && (
                                        <div
                                            className={dropdownDesigns.nykaFashion.container}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={dropdownDesigns.nykaFashion.content}>
                                                <div className={dropdownDesigns.nykaFashion.grid}>
                                                    {dropdowns.nykaFashion.items.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/fashion/${item.title.toLowerCase().replace(' ', '-')}`}
                                                            className={dropdownDesigns.nykaFashion.item}
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <div className={dropdownDesigns.nykaFashion.title}>{item.title}</div>
                                                            <div className={dropdownDesigns.nykaFashion.description}>{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                {/* Beauty Advice Dropdown */}
                                <li className="relative dropdown-container">
                                    <button
                                        onClick={() => handleDropdownToggle('beautyAdvice')}
                                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm md:text-base"
                                    >
                                        Beauty Advice
                                        <svg
                                            className={`${dropdownDesigns.beautyAdvice.arrow} ${activeDropdown === 'beautyAdvice' ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {activeDropdown === 'beautyAdvice' && (
                                        <div
                                            className={dropdownDesigns.beautyAdvice.container}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className={dropdownDesigns.beautyAdvice.content}>
                                                <div className={dropdownDesigns.beautyAdvice.grid}>
                                                    {dropdowns.beautyAdvice.items.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            to={`/advice/${item.title.toLowerCase().replace(' ', '-')}`}
                                                            className={dropdownDesigns.beautyAdvice.item}
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <div className={dropdownDesigns.beautyAdvice.title}>{item.title}</div>
                                                            <div className={dropdownDesigns.beautyAdvice.description}>{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Search, Auth, Cart */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        {/* Search Bar - Hidden on mobile, visible on tablet and up */}
                        <div className="hidden md:flex items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search cosmetics products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-48 lg:w-64 px-4 py-2 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                                />
                                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden sm:flex items-center space-x-2">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1">
                                <RiUserLine className="text-sm" />
                                <span>Sign in</span>
                            </button>
                        </div>

                        {/* Cart */}
                        <div className="relative">
                            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
                                <RiShoppingBasketFill className="text-xl" />
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                    0
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 text-gray-700 hover:bg-pink-50 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine className="text-xl" />
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar - Visible only on mobile */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search cosmetics products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                        />
                        <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        {/* Mobile Auth Button */}
                        <div className="sm:hidden mb-4">
                            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                                <RiUserLine />
                                <span>Sign in to your account</span>
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    to="/categories" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-pink-50 rounded-lg transition-colors font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Categories
                                </Link>
                            </li>

                            {/* Mobile Dropdowns */}
                            {Object.entries(dropdowns).map(([key, dropdown]) => (
                                <li key={key} className="border-b border-gray-100 last:border-b-0">
                                    <button
                                        onClick={() => handleDropdownToggle(key)}
                                        className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-pink-50 rounded-lg transition-colors font-medium text-left"
                                    >
                                        <span>{dropdown.title}</span>
                                        <svg
                                            className={`w-3 h-3 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    {activeDropdown === key && (
                                        <div className="ml-4 mt-2 space-y-1 pb-2">
                                            {dropdown.items.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    to={`/${key}/${item.title.toLowerCase().replace(' ', '-')}`}
                                                    className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setActiveDropdown(null);
                                                    }}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;