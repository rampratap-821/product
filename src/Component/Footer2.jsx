import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhone, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (email) {
      alert(`Email sent to: ${email}`);
      setEmail("");
    }
  };

  // Company links array
  const companyLinks = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "About",
      link: "/about"
    },
    {
      id: 3,
      name: "Product",
      link: "/products"
    },
  ];

  // Help links array
  const helpLinks = [
    {
      name: "Contact Us",
      link: "/contact"
    },
    {
      name: "Track Order",
      link: "/track-order"
    }
  ];

  return (
    <>
      <footer className="bg-white text-gray-800 w-full pt-16">
        {/* MAIN FOOTER CONTENT */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {/* GRID CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* ABOUT - COLSPAN 2 */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-700 to-pink-500 mb-4"></div>
                <p className="text-black text-lg leading-relaxed">
                  India's trusted destination for beauty, skincare & luxury cosmetics.
                  Discover authentic brands, trending products & expert care.
                </p>
              </div>

              {/* TAGLINE */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-black">
                  BEAUTY YOU DESERVE 
                </h3>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition">
                  <FaTwitter className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition">
                  <FaInstagram className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition">
                  <FaLinkedinIn className="text-white" />
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-6 tracking-widest">COMPANY</h3>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.id}>
                    <Link 
                      to={item.link}
                      className="text-black hover:text-pink-700 cursor-pointer transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-6 tracking-widest">HELP</h3>
              <ul className="space-y-3">
                {helpLinks.map((item, i) => (
                  <li key={i}>
                    <Link 
                      to={item.link}
                      className="text-text-black hover:text-pink-700 cursor-pointer transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 space-y-4">
                <div className="flex items-center gap-3 text-black">
                  <FaPhone className="" />
                  <span>+91 8218253516</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <FaEnvelope className="" />
                  <span>support@beauty.store</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <FaMapMarkerAlt className="" />
                  <span className="text-sm">Moradabad • Ratanpur • BahadurpurRajpoot</span>
                </div>
              </div>
            </div>

            {/* NEWSLETTER SECTION - EXACTLY LIKE DIAGRAM */}
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-6 tracking-widest">NEWSLETTER</h3>
              <p className="text-black mb-6 text-sm">
                Sign Up to get updates & news about us. Get the latest deals directly in your inbox.
              </p>

              {/* EMAIL INPUT - EXACTLY LIKE DIAGRAM */}
              <div className="space-y-4">
                <div className="relative">
                  {/* INPUT FIELD - WHITE background like diagram */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Email Address"
                    className="
                      w-full
                      bg-white
                      text-black
                      pl-4
                      pr-16
                      py-4
                      rounded-xl
                      border-2
                      border-pink-700
                      focus:outline-none
                      focus:ring-1
                      focus:ring-pink-700
                      text-sm
                      placeholder-gray-500
                    "
                  />

                  {/* VERTICAL LINE (DANDA) on RIGHT SIDE */}
                 

                  {/* ENVELOPE ICON - RIGHT SIDE with PINK-700 background */}
                  <div className="
                    absolute 
                    right-0 
                    top-1/2 
                    transform 
                    -translate-y-1/2
                    w-10 
                    h-full 
                    bg-pink-700 
                    rounded-r-xl 
                    flex 
                    items-center 
                    justify-center
                  ">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D WAVE SVG */}
        <div className="w-full overflow-hidden -mt-4">
          <svg className="block w-full h-[140px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.84-30.13,172-41.86c82.39-16.72,168.19-17.73,
                 250.45-.39c57.84,12.59,112.43,35.25,169.81,47.06c118.4,24.58,
                 233.36,2.88,343.16-41.14V120H0V16.48
                 C103.29,64.41,213.72,76.75,321.39,56.44Z"
              fill="#be185d"
            />
          </svg>
        </div>

        {/* BOTTOM SECTION - NO TOP/BOTTOM SPACE */}
       
      </footer>
    </>
  );
};

export default Footer;