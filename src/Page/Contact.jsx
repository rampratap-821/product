import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import { MdOutlineLocalPostOffice } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-pink-700" />,
      title: "Phone Number",
      details: "+91 98765 43210",
      subtitle: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      icon: <FaEnvelope className="text-2xl text-pink-700" />,
      title: "Email Address",
      details: "hello@glamourglow.com",
      subtitle: "support@glamourglow.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-pink-700" />,
      title: "Our Location",
      details: "123 Beauty Street, Cosmetics District",
      subtitle: "Mumbai, Maharashtra 400001"
    },
    {
      icon: <FaClock className="text-2xl text-pink-700" />,
      title: "Working Hours",
      details: "Monday - Saturday: 9:00 AM - 9:00 PM",
      subtitle: "Sunday: 10:00 AM - 6:00 PM"
    }
  ];

  const socialLinks = [
    { 
      icon: <FaInstagram className="text-white" />, 
      label: "Instagram",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    { 
      icon: <FaFacebookF className="text-white" />, 
      label: "Facebook",
      bgColor: "bg-blue-600"
    },
    { 
      icon: <FaTwitter className="text-white" />, 
      label: "Twitter",
      bgColor: "bg-blue-400"
    },
    { 
      icon: <FaWhatsapp className="text-white" />, 
      label: "WhatsApp",
      bgColor: "bg-green-500"
    }
  ];

  const faqs = [
    {
      question: "What is your return policy for cosmetic products?",
      answer: "We offer a 30-day return policy for unopened products. For opened products, we accept returns within 7 days if you have an allergic reaction."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping charges vary based on location."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! All our cosmetic products are 100% cruelty-free and not tested on animals."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email and SMS to track your package."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-black font-medium mb-2">{item.details}</p>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <FaCommentDots className="text-2xl text-pink-700" />
              </div>
              <h2 className="text-3xl font-bold text-black">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-black font-medium mb-2">
                    <FaUser className="text-pink-700" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-black font-medium mb-2">
                    <MdOutlineLocalPostOffice className="text-pink-700" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-black font-medium mb-2">
                    <FaPhone className="text-pink-700" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-black font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-black"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-black font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none text-black"
                  placeholder="Tell us about your beauty concerns or questions..."
                />
              </div>

              {/* Send Message Button - Fixed size and centered */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="
                    px-10 
                    py-4 
                    bg-pink-700 
                    text-white 
                    rounded-xl 
                    font-bold 
                    text-lg 
                    hover:bg-pink-800 
                    transition 
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    w-auto
                    min-w-[200px]
                  "
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                Connect with Us on Social Media
              </h3>
              <div className="flex justify-center gap-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`
                      w-14 
                      h-14 
                      rounded-full 
                      ${social.bgColor}
                      flex 
                      items-center 
                      justify-center 
                      text-2xl 
                      hover:opacity-90 
                      transition
                    `}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-center text-black">
                Follow us for beauty tips, new launches, and exclusive offers!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    {/* FAQ Question with Plus/Minus Icon */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 flex justify-between items-center text-left  transition"
                    >
                      <h4 className="text-lg font-semibold text-black pr-4">
                        {faq.question}
                      </h4>
                      <div className="flex-shrink-0">
                        {openFaqIndex === index ? (
                          <FaMinus className="text-pink-700 text-lg" />
                        ) : (
                          <FaPlus className="text-pink-700 text-lg" />
                        )}
                      </div>
                    </button>

                    {/* FAQ Answer - Animated Slide Down */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-300
                        ease-in-out
                        ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}
                      `}
                    >
                      <div className="p-6 pt-0">
                        <div className="pl-4">
                          <p className="text-black">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-700" />
                Find Our Store
              </h3>
              <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-pink-700 mx-auto mb-4" />
                  <p className="text-black font-medium">123 Beauty Street, Cosmetics District</p>
                  <p className="text-black">Mumbai, Maharashtra 400001</p>
                  <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;