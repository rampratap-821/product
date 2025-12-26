import React, { useState, useEffect, useRef } from 'react';
import amazone from "../assets/Icons/amazon.png";
import googlepay from "../assets/Icons/googlepay.png";
import mobikwik from "../assets/Icons/mobikwik.png";
import paytm from "../assets/Icons/paytm.png";
import phonepay from "../assets/Icons/phonepay.png";
import barcode from "../assets/Icons/barcode.png";

// Import icons for payment methods
import { FaQrcode, FaCreditCard, FaMobileAlt, FaBuilding, FaWallet } from 'react-icons/fa';
import { MdPayment, MdCheckCircle, MdSecurity, MdLock, MdAttachMoney } from 'react-icons/md';
import { RiBankFill } from 'react-icons/ri';
import { SiVisa, SiMastercard } from 'react-icons/si';

const Payment = ({card,setCard}) => {
  console.log("Card details:", card);
  
  // Use card.price instead of separate paymentAmount state
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    cardType: 'visa'
  });

  const topRef = useRef(null);
  const processingRef = useRef(null);
  const successRef = useRef(null);

  const paymentMethods = [
    { id: 'upi-qr', name: 'UPI QR', icon: FaQrcode, description: 'Scan to pay' },
    { id: 'card', name: 'Card', icon: FaCreditCard, description: 'Credit/Debit card' },
    { id: 'upi-id', name: 'UPI ID', icon: FaMobileAlt, description: 'Pay via UPI ID' },
    { id: 'net-banking', name: 'Net Banking', icon: RiBankFill, description: 'Bank transfer' },
    { id: 'wallet', name: 'Wallet', icon: FaWallet, description: 'Paytm, PhonePe' }
  ];

  const banks = [
    { id: 'hdfc', name: 'HDFC Bank', logo: 'HDFC' },
    { id: 'kotak', name: 'Kotak Mahindra Bank', logo: 'Kotak' },
    { id: 'icici', name: 'ICICI Bank', logo: 'ICICI' },
    { id: 'sbi', name: 'State Bank of India', logo: 'SBI' },
    { id: 'axis', name: 'Axis Bank', logo: 'Axis' }
  ];

  const wallets = [
    { id: 'paytm', name: 'Paytm', logo: paytm },
    { id: 'phonepay', name: 'PhonePe', logo: phonepay },
    { id: 'googlepay', name: 'Google Pay', logo: googlepay },
    { id: 'amazonpay', name: 'Amazon Pay', logo: amazone },
    { id: 'mobikwik', name: 'MobiKwik', logo: mobikwik }
  ];

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (isProcessing && processingRef.current) {
      setTimeout(() => {
        processingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isProcessing]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setShowFireworks(true);
      }, 500);
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
      // Stop fireworks after 5 seconds
      setTimeout(() => {
        setShowFireworks(false);
      }, 5000);
    }
  }, [isSuccess]);

  const handlePay = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }
    
    if (selectedMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill all card details');
      return;
    }
    
    if (selectedMethod === 'net-banking' && !selectedBank) {
      alert('Please select a bank');
      return;
    }

    if (selectedMethod === 'wallet' && !selectedWallet) {
      alert('Please select a wallet');
      return;
    }

    if (selectedMethod === 'upi-id' && !upiId) {
      alert('Please enter UPI ID');
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 3000);
  };

  const handleMakeAnotherPayment = () => {
    setSelectedMethod(null);
    setSelectedBank('');
    setSelectedWallet('');
    setUpiId('');
    setCardDetails({
      cardNumber: '',
      expiry: '',
      cvv: '',
      name: '',
      cardType: 'visa'
    });
    setIsSuccess(false);
    setShowFireworks(false);
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    
    if (name === 'cardNumber') {
      newValue = value.replace(/\D/g, '');
      if (newValue.startsWith('4')) {
        setCardDetails(prev => ({ ...prev, cardType: 'visa' }));
      } else if (newValue.startsWith('5')) {
        setCardDetails(prev => ({ ...prev, cardType: 'mastercard' }));
      }
    }
    
    setCardDetails(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return value;
  };

  const getSelectedWallet = () => {
    return wallets.find(w => w.id === selectedWallet);
  };

  const Fireworks = () => {
    const [particles, setParticles] = useState([]);
    const containerRef = useRef(null);

    const colors = [
      '#FF7A8A',
      '#FF8FA3',
      '#FFB3C1',
      '#FF6B8B',
      '#FF8FAB',
      '#FFC2D1',
      '#FFFFFF'
    ];

    useEffect(() => {
      if (!showFireworks) return;

      const newParticles = [];
      const maxParticles = 200;

      const explosionPoints = [
        { x: 50, y: 30 },
        { x: 30, y: 50 },
        { x: 70, y: 40 },
        { x: 40, y: 70 },
        { x: 60, y: 60 }
      ];

      explosionPoints.forEach(point => {
        for (let i = 0; i < maxParticles / explosionPoints.length; i++) {
          const angle = Math.random() * Math.PI * 2;
          const velocity = 5 + Math.random() * 10;
          const size = 3 + Math.random() * 7;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const lifetime = 1000 + Math.random() * 1000;
          const delay = Math.random() * 500;

          newParticles.push({
            id: `${point.x}-${point.y}-${i}`,
            x: point.x,
            y: point.y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            size,
            color,
            lifetime,
            delay,
            createdAt: Date.now()
          });
        }
      });

      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles(prev => 
          prev.filter(p => Date.now() - p.createdAt < p.lifetime)
            .map(p => ({
              ...p,
              x: p.x + p.vx * 0.1,
              y: p.y + p.vy * 0.1,
              vy: p.vy + 0.05,
              size: p.size * 0.99
            }))
        );
      }, 16);

      return () => clearInterval(interval);
    }, [showFireworks]);

    if (!showFireworks) return null;

    return (
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-firework-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}40`,
              opacity: 1 - ((Date.now() - particle.createdAt) / particle.lifetime),
              transform: `translate(-50%, -50%)`,
              animationDelay: `${particle.delay}ms`
            }}
          />
        ))}
        
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              borderRadius: '50%',
              boxShadow: `0 0 10px 2px currentColor`,
              animationDelay: `${Math.random() * 2000}ms`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Format price from card prop
  const formatPrice = () => {
    return card[0]?.price ? (card[0].price) : 0;
  };

  const renderContent = () => {
    if (isProcessing) {
      const selectedWalletData = getSelectedWallet();
      
      return (
        <div ref={processingRef} className="p-4 sm:p-6 md:p-8 animate-fade-in">
          <div className="text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-full flex items-center justify-center animate-pulse">
                    <MdPayment className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-[#ff7a8a] mb-3 sm:mb-4">Processing Payment</h1>
            <p className="text-black-600 mb-6 sm:mb-8 text-base sm:text-lg">
              Please wait while we process your payment...
            </p>
            
            <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
              <div className="w-full bg-black-200 rounded-full h-2">
                <div className="bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] h-2 rounded-full animate-progress"></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs sm:text-sm text-black-500">Verifying</span>
                <span className="text-xs sm:text-sm text-black-500">Processing</span>
                <span className="text-xs sm:text-sm text-black-500">Complete</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl p-4 sm:p-6 max-w-md mx-auto mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-medium text-[#ff7a8a] mb-1">Amount</p>
                  <p className="font-bold text-xl sm:text-2xl text-black-800">₹{formatPrice().toLocaleString('en-IN')}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm font-medium text-[#ff7a8a] mb-1">Method</p>
                  <p className="font-semibold text-black-800 text-sm sm:text-base">
                    {selectedMethod === 'upi-qr' ? 'UPI QR' : 
                     selectedMethod === 'card' ? 'Credit/Debit Card' : 
                     selectedMethod === 'net-banking' ? 'Net Banking' : 
                     selectedMethod === 'upi-id' ? 'UPI ID' : 
                     selectedWalletData ? selectedWalletData.name : 'Wallet'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-[#ff7a8a] text-sm sm:text-base">
              <MdLock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <p className="text-xs sm:text-sm">Secured by 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      );
    }

    if (isSuccess) {
      const selectedWalletData = getSelectedWallet();
      
      return (
        <div ref={successRef} className="p-4 sm:p-6 md:p-8 animate-fade-in">
          <Fireworks />
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-full flex items-center justify-center shadow-xl animate-success-pulse">
                  <MdCheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-checkmark" />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-200 rounded-full animate-ping opacity-50"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-red-200 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff7a8a] mb-3 sm:mb-4 animate-bounce">Payment Successful!</h1>
            <p className="text-black mb-6 sm:mb-8 text-base sm:text-lg">Your payment has been successfully completed</p>
            
            <div className="bg-gradient-to-br from-black-50 to-black-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-6 sm:mb-10 border border-black-200 shadow-sm backdrop-blur-sm bg-white/80">
  <div className="bg-white p-6 sm:p-8 rounded-xl border border-black-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    
    <div className="space-y-4">
      {/* Transaction ID */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-black-600">Transaction ID</span>
        <span className="font-bold text-black text-lg">TX{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
      </div>
      
      {/* Amount */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-black-600">Amount</span>
        <span className="font-bold text-black-800 text-2xl">₹{formatPrice().toLocaleString('en-IN')}</span>
      </div>
      
      {/* Payment Method */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-black-600">Payment Method</span>
        <span className="font-semibold text-black-800">
          {selectedMethod === 'upi-qr' ? 'UPI QR' : 
           selectedMethod === 'card' ? 'Credit/Debit Card' : 
           selectedMethod === 'net-banking' ? 'Net Banking' : 
           selectedMethod === 'upi-id' ? 'UPI ID' : 
           selectedWalletData ? selectedWalletData.name : 'Wallet'}
        </span>
      </div>
      
      {/* Status */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-black-600">Status</span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 text-[#ff7a8a] animate-pulse">
          <MdCheckCircle className="w-4 h-4 mr-2" />
          Completed
        </span>
      </div>
      
      {/* Date & Time */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-black-600">Date & Time</span>
        <span className="font-semibold text-black-800 text-sm text-right">
          {(new Date()).toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
    </div>
    
  </div>
</div>
            
            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto mb-8 sm:mb-12 px-4">
              <button
                onClick={handleMakeAnotherPayment}
                className="w-full bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg hover:from-[#ff6b8b] hover:via-[#ff8fab] hover:to-[#ffc2d1] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center animate-pulse"
              >
                <MdAttachMoney className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Make Another Payment
              </button>
              
            </div>
            
            <div className="border-t border-black-200 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-black-500 mb-4 sm:mb-6">Secured by RazorPay</p>
              <div className="flex items-center justify-center space-x-4 sm:space-x-8">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-sm hover:shadow-md">
                    <MdSecurity className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7a8a]" />
                  </div>
                  <span className="text-xs text-black-500">256-bit SSL</span>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-sm hover:shadow-md">
                    <span className="text-xs sm:text-sm font-bold text-[#ff7a8a]">PCI</span>
                  </div>
                  <span className="text-xs text-black-500">PCI DSS</span>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-sm hover:shadow-md">
                    <span className="text-xs sm:text-sm font-bold text-[#ff7a8a]">RBI</span>
                  </div>
                  <span className="text-xs text-black-500">RBI Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div ref={topRef} className="p-4 sm:p-6 md:p-8">
        {/* Payment Amount Section - Responsive */}
        <div className="bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-t-xl sm:rounded-t-2xl -mx-4 sm:-mx-6 md:-mx-8 -mt-4 sm:-mt-6 md:-mt-8 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 shadow-lg mb-6 sm:mb-10">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">Payment Amount</h2>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl">₹</div>
              <input
                type="text"
                value={formatPrice()}
                readOnly
                className="text-4xl sm:text-5xl md:text-6xl font-bold w-full bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border-transparent focus:border-white focus:ring-2 sm:focus:ring-4 focus:ring-white/20 focus:outline-none transition-all duration-300 pl-10 sm:pl-12 text-white placeholder-white/50 cursor-default text-center sm:text-left"
              />
            </div>
            <p className="text-white/80 text-center mt-3 sm:mt-4 text-base sm:text-lg">
              Amount: ₹{formatPrice().toLocaleString('en-IN')}
            </p>
            {card?.name && (
              <p className="text-white/80 text-center mt-2 text-base sm:text-lg">
                For: {card.name}
              </p>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 -mt-8 relative z-10">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl font-bold text-black-700 mb-4 sm:mb-6 flex items-center">
              Choose Payment Method
            </h2>
            
            {/* Payment Methods Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative rounded-xl ${
                      selectedMethod === method.id
                        ? `bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] text-white shadow-xl border-transparent`
                        : 'border-black-200 hover:border-[#ff7a8a]/50 hover:shadow-lg bg-white'
                    }`}
                  >
                    <div className={`mb-2 sm:mb-3 p-2 sm:p-3 rounded-full ${
                      selectedMethod === method.id ? 'bg-white/20 text-white' : 'bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 text-[#ff7a8a]'
                    }`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <span className={`font-semibold mb-1 text-sm sm:text-base ${selectedMethod === method.id ? 'text-white' : 'text-black-800'}`}>
                      {method.name}
                    </span>
                    <span className={`text-xs ${selectedMethod === method.id ? 'text-white/90' : 'text-black-500'} text-center`}>
                      {method.description}
                    </span>
                    {selectedMethod === method.id && (
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <MdCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff7a8a]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* UPI QR Selected */}
            {selectedMethod === 'upi-qr' && (
              <div className="border-t pt-6 sm:pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ff7a8a]/20 shadow-lg">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                      <div className="text-center mb-6 sm:mb-8">
                        <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 rounded-full mb-3 sm:mb-4">
                          <FaQrcode className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ff7a8a]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#ff7a8a] mb-2">Scan QR Code</h3>
                        <p className="text-black-600 text-sm sm:text-base">Use any UPI app to scan</p>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row gap-6 items-center">
                        <div className="flex-1 w-full">
                          <div className="bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] p-4 sm:p-6 rounded-2xl shadow-inner">
                            <div className="bg-white p-4 sm:p-6 rounded-xl">
                              <img className='w-full object-cover' src={barcode} alt="QR Code"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 sm:mt-8 text-center">
                        <p className="text-xs sm:text-sm text-black-600 flex items-center justify-center">
                          <img src={barcode} className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7a8a] mr-2" />
                          QR code expires in 5 minutes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Card Details Form - Professional Design */}
            {selectedMethod === 'card' && (
              <div className="border-t pt-6 sm:pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ff7a8a]/20 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ff7a8a] mb-4 sm:mb-6 flex items-center">
                    <FaCreditCard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff7a8a] mr-2 sm:mr-3" />
                    Enter Card Details
                  </h3>
                  
                  {/* Professional Card Preview */}
                  <div className="bg-gradient-to-r from-black-800 via-black-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-xl mb-6 sm:mb-8 w-full transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div>
                        <p className="text-xs text-black-400 mb-1">CARD NUMBER</p>
                        <p className="text-lg sm:text-xl font-mono tracking-widest">
                          {cardDetails.cardNumber ? formatCardNumber(cardDetails.cardNumber) : '•••• •••• •••• ••••'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-black-400 mb-1">VALID THRU</p>
                        <p className="text-base sm:text-lg font-mono">
                          {cardDetails.expiry || 'MM/YY'}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-black-400 mb-1">CARDHOLDER NAME</p>
                        <p className="text-base sm:text-lg font-medium tracking-wide">
                          {cardDetails.name.toUpperCase() || 'YOUR NAME'}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {cardDetails.cardType === 'visa' ? (
                          <div className="w-12 h-8 sm:w-16 sm:h-12 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-lg flex items-center justify-center">
                            <SiVisa className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          </div>
                        ) : (
                          <div className="w-12 h-8 sm:w-16 sm:h-12 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-lg flex items-center justify-center">
                            <SiMastercard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] blur-lg"></div>
                    </div>
                  </div>
                  
                  {/* Professional Form */}
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-black-700 mb-2 flex items-center">
                          <MdPayment className="w-4 h-4 mr-2 text-[#ff7a8a]" />
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cardNumber"
                            value={formatCardNumber(cardDetails.cardNumber)}
                            onChange={handleCardInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            className="w-full px-3 sm:px-4 py-3 sm:py-4 pl-10 sm:pl-12 border-2 border-black-300 rounded-xl focus:ring-2 focus:ring-[#ff7a8a] focus:border-[#ff7a8a] transition-all duration-300 text-base sm:text-lg"
                          />
                          <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                            {cardDetails.cardType === 'visa' ? (
                              <SiVisa className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7a8a]" />
                            ) : (
                              <SiMastercard className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7a8a]" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-black-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formatExpiry(cardDetails.expiry)}
                            onChange={handleCardInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black-300 rounded-xl focus:ring-2 focus:ring-[#ff7a8a] focus:border-[#ff7a8a] transition-all duration-300 text-base sm:text-lg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-black-700 mb-2">CVV</label>
                          <div className="relative">
                            <input
                              type="password"
                              name="cvv"
                              value={cardDetails.cvv}
                              onChange={handleCardInputChange}
                              placeholder="123"
                              maxLength="3"
                              className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black-300 rounded-xl focus:ring-2 focus:ring-[#ff7a8a] focus:border-[#ff7a8a] transition-all duration-300 text-base sm:text-lg"
                            />
                            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                              <MdLock className="w-4 h-4 sm:w-5 sm:h-5 text-black-400" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="sm:col-span-2 lg:col-span-1">
                          <label className="block text-sm font-medium text-black-700 mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleCardInputChange}
                            placeholder="John Doe"
                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black-300 rounded-xl focus:ring-2 focus:ring-[#ff7a8a] focus:border-[#ff7a8a] transition-all duration-300 text-base sm:text-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-[#ff7a8a] bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 p-3 sm:p-4 rounded-lg border border-[#ff7a8a]/20">
                        <MdSecurity className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff7a8a] mr-2 sm:mr-3" />
                        Your card details are secure and encrypted with 256-bit SSL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* UPI ID Payment */}
            {selectedMethod === 'upi-id' && (
              <div className="border-t pt-6 sm:pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ff7a8a]/20 shadow-lg">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 rounded-full mb-3 sm:mb-4">
                        <FaMobileAlt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ff7a8a]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#ff7a8a] mb-2">UPI ID Payment</h3>
                      <p className="text-black-600 text-sm sm:text-base">Enter your UPI ID to receive payment request</p>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                      <label className="block text-sm font-medium text-[#ff7a8a] mb-2">
                        Enter UPI ID
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="yourname@upi"
                          className="w-full px-10 sm:px-14 py-3 sm:py-4 border-2 border-black-300 rounded-xl focus:ring-2 focus:ring-[#ff7a8a] focus:border-[#ff7a8a] transition-all duration-300 text-base sm:text-lg"
                        />
                        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                          <span className="text-black-500 text-xs sm:text-sm">@upi</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-black-500 mt-2">Enter your UPI ID to receive payment request on your app</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Net Banking Options */}
            {selectedMethod === 'net-banking' && (
              <div className="border-t pt-6 sm:pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ff7a8a]/20 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ff7a8a] mb-4 sm:mb-6 flex items-center justify-center">
                    <RiBankFill className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#ff7a8a] mr-2 sm:mr-3" />
                    Select Your Bank
                  </h3>
                  
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {banks.map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => setSelectedBank(bank.id)}
                          className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                            selectedBank === bank.id
                              ? 'border-[#ff7a8a] bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 shadow-lg'
                              : 'border-black-200 hover:border-[#ff7a8a]/50 hover:shadow-md bg-white'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mr-3 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 text-[#ff7a8a]`}>
                              {bank.logo}
                            </div>
                            <div className="text-left">
                              <span className={`font-bold block text-sm sm:text-base text-[#ff7a8a]`}>{bank.name}</span>
                              <span className="text-xs text-black-500">Secure net banking</span>
                            </div>
                          </div>
                          {selectedBank === bank.id && (
                            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                              <MdCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {selectedBank && (
                      <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 p-4 sm:p-6 rounded-xl border border-[#ff7a8a]/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center mb-3 sm:mb-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-lg flex items-center justify-center mr-3 text-white text-sm sm:text-base md:text-lg font-bold">
                              {banks.find(b => b.id === selectedBank)?.logo}
                            </div>
                            <div>
                              <p className="font-bold text-black-800 text-base sm:text-lg">{banks.find(b => b.id === selectedBank)?.name}</p>
                              <p className="text-xs sm:text-sm text-black-600">Secure redirect to bank login</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs sm:text-sm text-black-500">Amount</p>
                            <p className="text-lg sm:text-xl font-bold text-black-800">₹{formatPrice().toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Payment */}
            {selectedMethod === 'wallet' && (
              <div className="border-t pt-6 sm:pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ff7a8a]/20 shadow-lg">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 rounded-full mb-3 sm:mb-4">
                        <FaWallet className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ff7a8a]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black-800 mb-2">Choose Wallet</h3>
                      <p className="text-black-600 text-sm sm:text-base">Select your preferred wallet for payment</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {wallets.map((wallet) => (
                        <button
                          key={wallet.id}
                          onClick={() => setSelectedWallet(wallet.id)}
                          className={`flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                            selectedWallet === wallet.id
                              ? `border-[#ff7a8a] bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 shadow-lg`
                              : 'border-black-200 hover:border-[#ff7a8a]/50 hover:shadow-md bg-white'
                          }`}
                        >
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl mb-2 sm:mb-3 bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10`}>
                           <img src={wallet.logo} alt={wallet.name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain" />
                          </div>
                          <span className="font-semibold text-black-800 text-center text-xs sm:text-sm md:text-base">{wallet.name}</span>
                          {selectedWallet === wallet.id && (
                            <div className="mt-1 sm:mt-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] rounded-full flex items-center justify-center animate-pulse">
                              <MdCheckCircle className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {selectedWallet && (
                      <div className="bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10 rounded-xl p-4 sm:p-6 border border-[#ff7a8a]/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                          <div className="flex items-center mb-3 sm:mb-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-2xl mr-3 sm:mr-4 bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] text-white">
                              <img src={getSelectedWallet()?.logo} 
                                   alt={getSelectedWallet()?.name} 
                                   className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain" />
                            </div>
                            <div>
                              <p className="font-bold text-black-800 text-base sm:text-lg md:text-xl">{getSelectedWallet()?.name}</p>
                              <p className="text-xs sm:text-sm text-black-600">Instant payment</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs sm:text-sm text-black-500">Amount</p>
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-black-800">₹{formatPrice().toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pay Button */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={handlePay}
              className="w-full bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] text-white py-3 sm:py-4 px-4 rounded-xl font-bold text-base sm:text-lg hover:from-[#ff6b8b] hover:via-[#ff8fab] hover:to-[#ffc2d1] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-pulse"
              disabled={
                !selectedMethod || 
                (selectedMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)) ||
                (selectedMethod === 'net-banking' && !selectedBank) ||
                (selectedMethod === 'wallet' && !selectedWallet) ||
                (selectedMethod === 'upi-id' && !upiId)
              }
            >
              <span>PAY NOW ₹{formatPrice().toLocaleString('en-IN')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
            
            {!selectedMethod && (
              <p className="text-center text-black-500 mt-2 sm:mt-3 text-sm sm:text-base">Please select a payment method to continue</p>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-black-500">
            <p>By proceeding, you agree to our <a href="#" className="text-[#ff7a8a] hover:underline">Terms of Service</a> and <a href="#" className="text-[#ff7a8a] hover:underline">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff7a8a]/10 via-[#ff8fa3]/10 to-[#ffb3c1]/10">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
          <div className="bg-gradient-to-br from-[#ff7a8a] via-[#ff8fa3] to-[#ffb3c1] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
            <MdPayment className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-800 mb-2 sm:mb-3">RazorPay Payment Gateway</h1>
            <div className="flex items-center justify-center bg-gradient-to-br from-[#ff7a8a]/20 via-[#ff8fa3]/20 to-[#ffb3c1]/20 px-4 sm:px-6 py-1 sm:py-2 rounded-full">
              <MdSecurity className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#ff7a8a] mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-black-700">Secure Payment Gateway</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 pb-6 sm:pb-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-black-100">
          {renderContent()}
        </div>
      </main>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes firework-particle {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes success-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 122, 138, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 122, 138, 0.8), 0 0 60px rgba(255, 122, 138, 0.6);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out;
        }
        
        .animate-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkmark 0.6s ease-in-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
        
        .animate-firework-particle {
          animation: firework-particle 0.6s ease-out forwards;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-success-pulse {
          animation: success-pulse 2s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .border-gradient {
          border-image: linear-gradient(to right, #ff7a8a, #ffb3c1) 1;
        }
        
        ::-webkit-scrollbar {
          width: 0px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ff7a8a, #ffb3c1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ff6b8b, #ffc2d1);
        }
      `}</style>
    </div>
  );
};

export default Payment;