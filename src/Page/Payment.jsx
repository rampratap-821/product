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

const Payment = () => {
  const [paymentAmount, setPaymentAmount] = useState('500');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMoneyRain, setShowMoneyRain] = useState(false);
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
    { id: 'upi-qr', name: 'UPI QR', icon: FaQrcode, description: 'Scan to pay', color: 'from-purple-500 to-indigo-600' },
    { id: 'card', name: 'Card', icon: FaCreditCard, description: 'Credit/Debit card', color: 'from-blue-500 to-cyan-600' },
    { id: 'upi-id', name: 'UPI ID', icon: FaMobileAlt, description: 'Pay via UPI ID', color: 'from-green-500 to-emerald-600' },
    { id: 'net-banking', name: 'Net Banking', icon: RiBankFill, description: 'Bank transfer', color: 'from-orange-500 to-red-600' },
    { id: 'wallet', name: 'Wallet', icon: FaWallet, description: 'Paytm, PhonePe', color: 'from-pink-500 to-rose-600' }
  ];

  const banks = [
    { id: 'hdfc', name: 'HDFC Bank', logo: 'HDFC', color: 'bg-blue-50', textColor: 'text-blue-700', iconColor: 'bg-blue-100 text-blue-600' },
    { id: 'kotak', name: 'Kotak Mahindra Bank', logo: 'Kotak', color: 'bg-purple-50', textColor: 'text-purple-700', iconColor: 'bg-purple-100 text-purple-600' },
    { id: 'icici', name: 'ICICI Bank', logo: 'ICICI', color: 'bg-orange-50', textColor: 'text-orange-700', iconColor: 'bg-orange-100 text-orange-600' },
    { id: 'sbi', name: 'State Bank of India', logo: 'SBI', color: 'bg-blue-50', textColor: 'text-blue-700', iconColor: 'bg-blue-100 text-blue-600' },
    { id: 'axis', name: 'Axis Bank', logo: 'Axis', color: 'bg-red-50', textColor: 'text-red-700', iconColor: 'bg-red-100 text-red-600' }
  ];

  const wallets = [
    { 
      id: 'paytm', 
      name: 'Paytm', 
      logo: paytm, 
      brandColor: '#00BAF2', 
      color: 'bg-[#00BAF2]/10', 
      textColor: 'text-[#00BAF2]', 
      iconColor: 'bg-[#00BAF2]/20',
      borderColor: 'border-[#00BAF2]/30'
    },
    { 
      id: 'phonepay', 
      name: 'PhonePe', 
      logo: phonepay, 
      brandColor: '#5F259F', 
      color: 'bg-[#5F259F]/10', 
      textColor: 'text-[#5F259F]', 
      iconColor: 'bg-[#5F259F]/20',
      borderColor: 'border-[#5F259F]/30'
    },
    { 
      id: 'googlepay', 
      name: 'Google Pay', 
      logo: googlepay, 
      brandColor: '#5F6368', 
      color: 'bg-[#5F6368]/10', 
      textColor: 'text-[#5F6368]', 
      iconColor: 'bg-[#5F6368]/20',
      borderColor: 'border-[#5F6368]/30'
    },
    { 
      id: 'amazonpay', 
      name: 'Amazon Pay', 
      logo: amazone, 
      brandColor: '#FF9900', 
      color: 'bg-[#FF9900]/10', 
      textColor: 'text-[#FF9900]', 
      iconColor: 'bg-[#FF9900]/20',
      borderColor: 'border-[#FF9900]/30'
    },
    { 
      id: 'mobikwik', 
      name: 'MobiKwik', 
      logo: mobikwik, 
      brandColor: '#B73E96', 
      color: 'bg-[#B73E96]/10', 
      textColor: 'text-[#B73E96]', 
      iconColor: 'bg-[#B73E96]/20',
      borderColor: 'border-[#B73E96]/30'
    }
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
        setShowMoneyRain(true);
      }, 500);
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
    setShowMoneyRain(false);
    setPaymentAmount('2000000');
    
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

  const MoneyRain = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-50px',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="text-green-500 drop-shadow-lg">₹</div>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (isProcessing) {
      const selectedWalletData = getSelectedWallet();
      
      return (
        <div ref={processingRef} className="p-6 md:p-8 animate-fade-in">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                    <MdPayment className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Processing Payment</h1>
            <p className="text-gray-600 mb-8 text-lg">
              Please wait while we process your payment...
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full animate-progress"></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-500">Verifying</span>
                <span className="text-sm text-gray-500">Processing</span>
                <span className="text-sm text-gray-500">Complete</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 max-w-md mx-auto mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                  <p className="text-sm font-medium text-blue-600 mb-1">Amount</p>
                  <p className="font-bold text-2xl text-gray-800">₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600 mb-1">Method</p>
                  <p className="font-semibold text-gray-800">
                    {selectedMethod === 'upi-qr' ? 'UPI QR' : 
                     selectedMethod === 'card' ? 'Credit/Debit Card' : 
                     selectedMethod === 'net-banking' ? 'Net Banking' : 
                     selectedMethod === 'upi-id' ? 'UPI ID' : 
                     selectedWalletData ? selectedWalletData.name : 'Wallet'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center text-blue-600">
              <MdLock className="w-5 h-5 mr-2" />
              <p className="text-sm">Secured by 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      );
    }

    if (isSuccess) {
      const selectedWalletData = getSelectedWallet();
      
      return (
        <div ref={successRef} className="p-6 md:p-8 animate-fade-in">
          {showMoneyRain && <MoneyRain />}
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <MdCheckCircle className="w-16 h-16 text-white animate-checkmark" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full animate-ping opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full animate-ping opacity-50" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8 text-lg">Your payment has been processed successfully</p>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-2xl mx-auto mb-10 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Transaction ID</p>
                  <p className="font-bold text-xl text-gray-800">TX{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Amount</p>
                  <p className="font-bold text-3xl text-gray-800">₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Payment Method</p>
                  <p className="font-semibold text-xl text-gray-800">
                    {selectedMethod === 'upi-qr' ? 'UPI QR' : 
                     selectedMethod === 'card' ? 'Credit/Debit Card' : 
                     selectedMethod === 'net-banking' ? 'Net Banking' : 
                     selectedMethod === 'upi-id' ? 'UPI ID' : 
                     selectedWalletData ? selectedWalletData.name : 'Wallet'}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Status</p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-green-100 text-green-800">
                    <MdCheckCircle className="w-5 h-5 mr-2" />
                    Completed
                  </span>
                </div>
              </div>
              
              <div className="text-left mb-8">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Date & Time</p>
                <p className="font-semibold text-gray-800">{(new Date()).toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto mb-12">
              <button
                onClick={handleMakeAnotherPayment}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <MdAttachMoney className="w-6 h-6 mr-2" />
                Make Another Payment
              </button>
              
              <button className="w-full border-2 border-gray-300 text-gray-700 py-5 px-6 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Receipt
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-6">Secured by RazorPay</p>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MdSecurity className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-xs text-gray-500">256-bit SSL</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-sm font-bold text-gray-700">PCI</span>
                  </div>
                  <span className="text-xs text-gray-500">PCI DSS</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-sm font-bold text-gray-700">RBI</span>
                  </div>
                  <span className="text-xs text-gray-500">RBI Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div ref={topRef} className="p-6 md:p-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-t-2xl -mx-6 -mt-6 px-6 md:px-8 py-8 md:py-10 shadow-lg mb-10">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Payment Amount</h2>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-4xl">₹</div>
              <input
                type="text"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value.replace(/\D/g, ''))}
                className="text-5xl md:text-6xl font-bold w-full bg-white/10 backdrop-blur-sm rounded-2xl focus:border-white focus:ring-4 focus:ring-white/20 focus:outline-none transition-all duration-300 pl-10 text-white placeholder-white/50"
                placeholder="0"
              />
            </div>
            <p className="text-white/80 text-center mt-4 text-lg">
              Amount: ₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 -mt-8 relative z-10">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
             
              Choose Payment Method
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex flex-col items-center justify-center p-5  border-2 transition-all duration-300 transform hover:-translate-y-1 relative ${
                      selectedMethod === method.id
                        ? `border-gradient bg-gradient-to-br ${method.color} text-white shadow-xl`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-lg bg-white'
                    }`}
                  >
                    <div className={`mb-3 p-3 rounded-full ${
                      selectedMethod === method.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className={`font-semibold mb-1 ${selectedMethod === method.id ? 'text-white' : 'text-gray-800'}`}>
                      {method.name}
                    </span>
                    <span className={`text-xs ${selectedMethod === method.id ? 'text-white/90' : 'text-gray-500'}`}>
                      {method.description}
                    </span>
                    {selectedMethod === method.id && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <MdCheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* UPI QR Selected */}
            {selectedMethod === 'upi-qr' && (
              <div className="border-t pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 shadow-lg">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-4">
                          <FaQrcode className="w-12 h-12 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-purple-700 mb-2">Scan QR Code</h3>
                        <p className="text-gray-600">Use any UPI app to scan</p>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-2xl shadow-inner">
                            <div className="bg-white p-6 rounded-xl">
                              <img className='w-full object-cover' src={barcode} alt="QR Code"/>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
                            <div className="flex items-center mb-4">
                              <MdPayment className="w-8 h-8 mr-3" />
                              <div>
                                <p className="text-sm opacity-90">AMOUNT TO PAY</p>
                                <p className="text-2xl font-bold">₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</p>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-sm font-bold">1</span>
                                </div>
                                <p className="text-sm">Open your UPI app</p>
                              </div>
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-sm font-bold">2</span>
                                </div>
                                <p className="text-sm">Tap on Scan & Pay</p>
                              </div>
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-sm font-bold">3</span>
                                </div>
                                <p className="text-sm">Scan QR code above</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 flex items-center justify-center">
                          <MdLock className="w-5 h-5 text-purple-500 mr-2" />
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
              <div className="border-t pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                    <FaCreditCard className="w-8 h-8 text-blue-600 mr-3" />
                    Enter Card Details
                  </h3>
                  
                  {/* Professional Card Preview */}
                  <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-6 text-white shadow-xl mb-8 w-full transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">CARD NUMBER</p>
                        <p className="text-xl font-mono tracking-widest">
                          {cardDetails.cardNumber ? formatCardNumber(cardDetails.cardNumber) : '•••• •••• •••• ••••'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 mb-1">VALID THRU</p>
                        <p className="text-lg font-mono">
                          {cardDetails.expiry || 'MM/YY'}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">CARDHOLDER NAME</p>
                        <p className="text-lg font-medium tracking-wide">
                          {cardDetails.name.toUpperCase() || 'YOUR NAME'}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {cardDetails.cardType === 'visa' ? (
                          <div className="w-16 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                            <SiVisa className="w-10 h-10 text-white" />
                          </div>
                        ) : (
                          <div className="w-16 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                            <SiMastercard className="w-10 h-10 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 blur-lg"></div>
                    </div>
                  </div>
                  
                  {/* Professional Form */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <MdPayment className="w-4 h-4 mr-2 text-blue-600" />
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
                            className="w-full px-4 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                          />
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            {cardDetails.cardType === 'visa' ? (
                              <SiVisa className="w-6 h-6 text-blue-600" />
                            ) : (
                              <SiMastercard className="w-6 h-6 text-red-600" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formatExpiry(cardDetails.expiry)}
                            onChange={handleCardInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <div className="relative">
                            <input
                              type="password"
                              name="cvv"
                              value={cardDetails.cvv}
                              onChange={handleCardInputChange}
                              placeholder="123"
                              maxLength="3"
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                              <MdLock className="w-5 h-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleCardInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-green-700 bg-green-50 p-4 rounded-lg border border-green-200">
                        <MdSecurity className="w-6 h-6 text-green-600 mr-3" />
                        Your card details are secure and encrypted with 256-bit SSL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* UPI ID Payment */}
            {selectedMethod === 'upi-id' && (
              <div className="border-t pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 shadow-lg">
                  <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                        <FaMobileAlt className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">UPI ID Payment</h3>
                      <p className="text-gray-600">Enter your UPI ID to receive payment request</p>
                    </div>
                    
                    
                    
                    <div className="max-w-md mx-auto">
                      <label className="block text-sm font-medium text-green-700 mb-2">
                        Enter UPI ID
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="yourname@upi"
                          className="w-full px-14 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-lg"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <span className="text-gray-500 text-sm">@upi</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Enter your UPI ID to receive payment request on your app</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Net Banking Options */}
            {selectedMethod === 'net-banking' && (
              <div className="border-t pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center justify-center">
                    <RiBankFill className="w-8 h-8 text-orange-600 mr-3" />
                    Select Your Bank
                  </h3>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {banks.map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => setSelectedBank(bank.id)}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                            selectedBank === bank.id
                              ? 'border-orange-500 bg-orange-50 shadow-lg'
                              : 'border-gray-200 hover:border-orange-300 hover:shadow-md bg-white'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 text-lg font-bold ${bank.iconColor}`}>
                              {bank.logo}
                            </div>
                            <div className="text-left">
                              <span className={`font-bold block ${bank.textColor}`}>{bank.name}</span>
                              <span className="text-sm text-gray-500">Secure net banking</span>
                            </div>
                          </div>
                          {selectedBank === bank.id && (
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                              <MdCheckCircle className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {selectedBank && (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 text-white text-lg font-bold">
                              {banks.find(b => b.id === selectedBank)?.logo}
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 text-lg">{banks.find(b => b.id === selectedBank)?.name}</p>
                              <p className="text-sm text-gray-600">Secure redirect to bank login</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Amount</p>
                            <p className="text-xl font-bold text-gray-800">₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</p>
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
              <div className="border-t pt-8 animate-fade-in">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100 shadow-lg">
                  <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-4">
                        <FaWallet className="w-12 h-12 text-pink-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Wallet</h3>
                      <p className="text-gray-600">Select your preferred wallet for payment</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                      {wallets.map((wallet) => (
                        <button
                          key={wallet.id}
                          onClick={() => setSelectedWallet(wallet.id)}
                          className={`flex flex-col items-center justify-center p-5 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                            selectedWallet === wallet.id
                              ? `border-pink-500 bg-pink-50 shadow-lg`
                              : 'border-gray-200 hover:border-pink-300 hover:shadow-md bg-white'
                          }`}
                        >
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3 ${wallet.iconColor}`}>
                           <img src={wallet.logo} alt={wallet.name} className="w-10 h-10 object-contain" />
                          </div>
                          <span className="font-semibold text-gray-800 text-center">{wallet.name}</span>
                          {selectedWallet === wallet.id && (
                            <div className="mt-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                              <MdCheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {selectedWallet && (
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mr-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                              <img src={getSelectedWallet()?.logo} 
                                   alt={getSelectedWallet()?.name} 
                                   className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 text-xl">{getSelectedWallet()?.name}</p>
                              <p className="text-sm text-gray-600">Instant payment</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Amount</p>
                            <p className="text-2xl font-bold text-gray-800">₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</p>
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
          <div className="mb-8">
            <button
              onClick={handlePay}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 px-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={
                !selectedMethod || 
                (selectedMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)) ||
                (selectedMethod === 'net-banking' && !selectedBank) ||
                (selectedMethod === 'wallet' && !selectedWallet) ||
                (selectedMethod === 'upi-id' && !upiId)
              }
            >
              <span>PAY NOW ₹{(parseInt(paymentAmount) || 0).toLocaleString('en-IN')}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
            
            {!selectedMethod && (
              <p className="text-center text-gray-500 mt-3">Please select a payment method to continue</p>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By proceeding, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-2xl shadow-xl w-24 h-24 flex items-center justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
            <MdPayment className="w-12 h-12" />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">RazorPay Payment Gateway</h1>
            <div className="flex items-center justify-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full">
              <MdSecurity className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-lg font-medium text-gray-700">Secure Payment Gateway</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
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
        
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
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
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .border-gradient {
          border-image: linear-gradient(to right, #8B5CF6, #3B82F6) 1;
        }
        
        ::-webkit-scrollbar {
          width: 0px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(204, 207, 212, 1), rgba(229, 225, 236, 1));
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Payment;