
import React from "react";
import { IoCloud } from "react-icons/io5";
import {
  MdDelete,
  MdLanguage,
  MdLockClock,
  MdProductionQuantityLimits,
  MdOutlinePriceChange
} from "react-icons/md";
import { FaCalendarAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = ({ card, setCard }) => {

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      setCard(card.filter(item => item.id !== id));
    }
  };

  return (
    <>
    <div className="w-full min-h-screen  py-10 px-4 sm:px-6">

      {/* HEADER */}
      {card.length !== 0 && (
        <div className="bg-black border border-gray-700 rounded-2xl px-6 py-6 flex flex-col lg:flex-row gap-6 justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              My Wishlist
            </h1>
            <p className="text-white mt-1 text-sm flex items-center gap-1">
              <FaHeart className="text-pink-500" />
              {card.length} items saved for later
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-white text-sm">
            <div className="flex items-center gap-2">
              <IoCloud /> 27°C Cloudy
            </div>
            <div className="flex items-center gap-2">
              <MdLanguage /> Language
            </div>
            <div className="flex items-center gap-2">
              <MdLockClock /> 08:30 AM
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> 07 Nov 2025
            </div>
          </div>
        </div>
      )}

      {/* TABLE HEADER (DESKTOP) */}
      {card.length !== 0 && (
        <div className="hidden lg:block mt-8 bg-black border border-gray-700 rounded-xl">
          <div className="grid grid-cols-[3fr_1fr_1fr_2fr] px-8 py-4 text-white font-bold text-sm">
            <div className="flex items-center gap-2">
              <MdProductionQuantityLimits /> Product
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <MdOutlinePriceChange /> Price
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <FaShoppingCart /> Stock
            </div>
            <div className="text-center">
              <FaHeart className="inline mr-1" /> Action
            </div>
          </div>
        </div>
      )}

      {/* EMPTY STATE */}
      {card.length === 0 ? (
        <div className="flex justify-center items-center mt-24">
          <div className="bg-black border border-gray-700 rounded-xl px-10 py-12 text-center">
            <div className="text-6xl text-pink-600 mb-4 flex justify-center">
              <FaHeart />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Wishlist is Empty
            </h1>
            <p className="text-gray-400 mt-2">
              Start adding products you love
            </p>

            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (

        /* PRODUCT LIST */
        <div className="mt-6 space-y-4">
          {card.map(item => (
            <div
              key={item.id}
              className="bg-black border border-gray-700 rounded-xl p-5 flex flex-col lg:grid lg:grid-cols-[3fr_1fr_1fr_2fr] gap-5 items-center"
            >

              {/* PRODUCT */}
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-[80px] h-[80px] rounded-lg border border-gray-600"
                />
                <div>
                  
                  <div className="flex items-center gap-1 text-sm text-white">
                    <FaUser />
                    <span>By Customer</span>
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-white font-bold text-center w-full">
                {item.price}
              </div>

              {/* STOCK */}
              <div className="text-green-400 font-semibold text-center w-full">
                In Stock
              </div>

              {/* ACTION */}
              <div className="flex gap-3 w-full justify-center lg:justify-end">
                <Link to={"/addDeliveryAddress"} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-black rounded-lg font-semibold hover:bg-pink-600 transition">
                  <FaShoppingCart /> buy to card
                </Link>
             {console.log("rampratap",item.id)}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-2 bg-red-900/40 rounded-lg hover:bg-red-900/60 transition"
                >
                  <MdDelete className="text-xl text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CLEAR ALL */}
      {card.length !== 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setCard("")}
            className="px-10 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition"
          >
            Clear Wishlist
          </button>
        </div>
      )}

    </div>
    
    </>
  );
};

export default WishList;

























// import React, { useState, useEffect } from "react";
// import { IoCloud } from "react-icons/io5";
// import {
//   MdDelete,
//   MdLanguage,
//   MdLockClock,
//   MdProductionQuantityLimits,
//   MdOutlinePriceChange,
//   MdLocalOffer,
//   MdFlashOn,
//   MdCreditCard,
//   MdAccountBalance,
//   MdPayment,
//   MdReceipt,
//   MdShoppingBag,
//   MdHistory,
//   MdClearAll,
//   MdDoneAll,
//   MdClose
// } from "react-icons/md";
// import { 
//   FaCalendarAlt, 
//   FaShoppingCart, 
//   FaHeart, 
//   FaUser,
//   FaBolt,
//   FaTag,
//   FaCheckCircle,
//   FaGooglePay,
//   FaAmazonPay,
//   FaPhoneAlt,
//   FaRupeeSign,
//   FaPercentage,
//   FaHistory,
//   FaTrash,
//   FaBoxOpen
// } from "react-icons/fa";
// import { GiShoppingBag, GiTakeMyMoney } from "react-icons/gi";
// import { BsLightningChargeFill, BsQrCodeScan } from "react-icons/bs";
// import { SiPhonepe, SiPaytm } from "react-icons/si";
// import { RiBankCardFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const WishList = ({ card, setCard }) => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedPayment, setSelectedPayment] = useState("");
//   const [paymentStep, setPaymentStep] = useState("select");
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [purchaseHistory, setPurchaseHistory] = useState([]);
//   const [showPurchaseHistory, setShowPurchaseHistory] = useState(false);
//   const [showClearAllModal, setShowClearAllModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
  
//   // REMOVED: const displayCard = card.length > 0 ? card : sampleProducts;
//   // Now we only use card prop directly

//   // Sample products only for "Add Sample Products" button
 

//   // Load purchase history from localStorage
//   useEffect(() => {
//     const savedHistory = localStorage.getItem('purchaseHistory');
//     if (savedHistory) {
//       setPurchaseHistory(JSON.parse(savedHistory));
//     }
//   }, []);

//   // Save purchase history to localStorage
//   useEffect(() => {
//     localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
//   }, [purchaseHistory]);

//   // Payment Methods Data
//   const paymentMethods = [
//     { id: "upi", name: "UPI", icon: <BsQrCodeScan />, color: "from-blue-500 to-cyan-500", popular: true },
//     { id: "credit", name: "Credit Card", icon: <MdCreditCard />, color: "from-purple-500 to-pink-500", popular: false },
//     { id: "debit", name: "Debit Card", icon: <RiBankCardFill />, color: "from-green-500 to-emerald-500", popular: false },
//     { id: "netbanking", name: "Net Banking", icon: <MdAccountBalance />, color: "from-orange-500 to-red-500", popular: false },
//     { id: "wallet", name: "Wallet", icon: <MdPayment />, color: "from-yellow-500 to-orange-500", popular: true },
//     { id: "cod", name: "Cash on Delivery", icon: <GiTakeMyMoney />, color: "from-gray-500 to-slate-500", popular: false },
//   ];

//   // Helper function to extract numeric price
//   const getNumericPrice = (priceString) => {
//     if (!priceString) return 0;
//     return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to remove this item from wishlist?")) {
//       setCard(card.filter(item => item.id !== id));
//       setSelectedItems(selectedItems.filter(itemId => itemId !== id));
//     }
//   };

//   const toggleSelectItem = (id) => {
//     if (selectedItems.includes(id)) {
//       setSelectedItems(selectedItems.filter(itemId => itemId !== id));
//     } else {
//       setSelectedItems([...selectedItems, id]);
//     }
//   };

//   const addToCart = (item) => {
//     setCartItems(prev => {
//       const existing = prev.find(i => i.id === item.id);
//       if (existing) {
//         return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//     alert(`${item.name} added to cart!`);
//   };

//   const handleBuyNow = (singleItem = null) => {
//     const itemsToBuy = singleItem ? [singleItem] : card.filter(item => selectedItems.includes(item.id));
    
//     if (itemsToBuy.length === 0) {
//       alert("Please select at least one item to buy!");
//       return;
//     }

//     // Calculate total price
//     const subtotal = itemsToBuy.reduce((sum, item) => sum + getNumericPrice(item.price), 0);
//     const tax = subtotal * 0.18; // 18% GST
//     const shipping = subtotal > 499 ? 0 : 49;
//     const total = subtotal + tax + shipping;
//     const savings = itemsToBuy.reduce((sum, item) => {
//       const original = getNumericPrice(item.originalPrice || item.price);
//       const selling = getNumericPrice(item.price);
//       return sum + (original - selling);
//     }, 0);

//     setOrderDetails({
//       items: itemsToBuy.map(item => ({
//         ...item,
//         purchasePrice: item.price,
//         purchaseDate: new Date().toISOString(),
//         quantity: item.quantity || 1
//       })),
//       subtotal: subtotal,
//       tax: tax,
//       shipping: shipping,
//       total: total,
//       savings: savings,
//       date: new Date().toLocaleString(),
//       orderId: "ORD" + Math.floor(Math.random() * 1000000),
//       deliveryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
//       paymentMethod: "",
//       transactionId: "TXN" + Math.floor(Math.random() * 1000000)
//     });
    
//     setShowPaymentModal(true);
//     setPaymentStep("select");
//   };

//   const processPayment = () => {
//     if (!selectedPayment) {
//       alert("Please select a payment method!");
//       return;
//     }

//     setPaymentStep("processing");
    
//     // Simulate payment processing
//     setTimeout(() => {
//       // Add to purchase history
//       const newPurchase = {
//         ...orderDetails,
//         paymentMethod: selectedPayment,
//         purchaseDate: new Date().toISOString(),
//         status: "Delivered"
//       };
      
//       setPurchaseHistory(prev => [newPurchase, ...prev]);
      
//       setPaymentStep("success");
      
//       // Remove purchased items from wishlist
//       if (orderDetails) {
//         const purchasedIds = orderDetails.items.map(item => item.id);
//         if (card.length > 0) {
//           setCard(prev => prev.filter(item => !purchasedIds.includes(item.id)));
//         }
//         setSelectedItems(prev => prev.filter(id => !purchasedIds.includes(id)));
//       }
//     }, 3000);
//   };

//   const getTotalPrice = () => {
//     return selectedItems.reduce((total, itemId) => {
//       const item = card.find(i => i.id === itemId);
//       if (item) {
//         return total + getNumericPrice(item.price);
//       }
//       return total;
//     }, 0);
//   };

//   const getTotalSavings = () => {
//     return selectedItems.reduce((savings, itemId) => {
//       const item = card.find(i => i.id === itemId);
//       if (item && item.originalPrice) {
//         const original = getNumericPrice(item.originalPrice);
//         const selling = getNumericPrice(item.price);
//         return savings + (original - selling);
//       }
//       return savings;
//     }, 0);
//   };

//   const clearAllWishlist = () => {
//     if (card.length > 0) {
//       setShowClearAllModal(true);
//     } else {
//       alert("Wishlist is already empty!");
//     }
//   };

//   const confirmClearAll = () => {
//     setCard([]);
//     setSelectedItems([]);
//     setShowClearAllModal(false);
//   };

//   const clearPurchaseHistory = () => {
//     if (purchaseHistory.length === 0) {
//       alert("No purchase history to clear!");
//       return;
//     }
    
//     if (window.confirm("Are you sure you want to clear all purchase history? This action cannot be undone.")) {
//       setPurchaseHistory([]);
//       localStorage.removeItem('purchaseHistory');
//     }
//   };

//   const getPurchaseStats = () => {
//     const totalPurchases = purchaseHistory.length;
//     const totalSpent = purchaseHistory.reduce((sum, order) => sum + order.total, 0);
//     const totalItems = purchaseHistory.reduce((sum, order) => sum + order.items.length, 0);
//     const totalSavings = purchaseHistory.reduce((sum, order) => sum + order.savings, 0);
    
//     return { totalPurchases, totalSpent, totalItems, totalSavings };
//   };

//   const purchaseStats = getPurchaseStats();

//   // Purchase History Modal
//   const PurchaseHistoryModal = () => {
//     return (
//       <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//         <div className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
//           {/* Modal Header */}
//           <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                   <FaHistory className="text-purple-600" />
//                   Purchase History
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-1">
//                   {purchaseHistory.length} orders • Total spent: ₹{purchaseStats.totalSpent.toFixed(2)}
//                 </p>
//               </div>
//               <div className="flex gap-3">
//                 <button
//                   onClick={clearPurchaseHistory}
//                   className="px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition flex items-center gap-2"
//                   disabled={purchaseHistory.length === 0}
//                 >
//                   <FaTrash />
//                   Clear History
//                 </button>
//                 <button
//                   onClick={() => setShowPurchaseHistory(false)}
//                   className="text-gray-500 hover:text-gray-700 text-2xl"
//                 >
//                   <MdClose />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-gray-200">
//             <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//               <div className="text-2xl text-pink-600 font-bold">{purchaseStats.totalPurchases}</div>
//               <div className="text-gray-600 text-sm">Total Orders</div>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//               <div className="text-2xl text-green-600 font-bold">₹{purchaseStats.totalSpent.toFixed(2)}</div>
//               <div className="text-gray-600 text-sm">Total Spent</div>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//               <div className="text-2xl text-blue-600 font-bold">{purchaseStats.totalItems}</div>
//               <div className="text-gray-600 text-sm">Items Purchased</div>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//               <div className="text-2xl text-yellow-600 font-bold">₹{purchaseStats.totalSavings.toFixed(2)}</div>
//               <div className="text-gray-600 text-sm">Total Saved</div>
//             </div>
//           </div>

//           {/* Purchase List */}
//           <div className="p-6 overflow-y-auto max-h-[60vh]">
//             {purchaseHistory.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="text-6xl text-gray-300 mb-4">
//                   <FaBoxOpen className="mx-auto" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">No Purchase History</h3>
//                 <p className="text-gray-600">Your purchase history will appear here</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {purchaseHistory.map((order, index) => (
//                   <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-pink-300 transition-colors">
//                     {/* Order Header */}
//                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-gray-300">
//                       <div>
//                         <div className="flex items-center gap-3">
//                           <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
//                             {order.orderId}
//                           </div>
//                           <div className="text-green-600 text-sm flex items-center gap-1">
//                             <FaCheckCircle />
//                             {order.status || "Delivered"}
//                           </div>
//                         </div>
//                         <div className="text-gray-600 text-sm mt-2">
//                           Ordered on: {new Date(order.date).toLocaleString()}
//                         </div>
//                       </div>
//                       <div className="text-right mt-3 md:mt-0">
//                         <div className="text-2xl font-bold text-gray-900">₹{order.total.toFixed(2)}</div>
//                         <div className="text-gray-600 text-sm capitalize">{order.paymentMethod}</div>
//                       </div>
//                     </div>

//                     {/* Purchased Items */}
//                     <div className="mb-4">
//                       <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
//                         <MdShoppingBag className="text-pink-600" />
//                         Purchased Items ({order.items.length})
//                       </h4>
//                       <div className="space-y-3">
//                         {order.items.map((item, itemIndex) => (
//                           <div key={itemIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
//                             <div className="flex items-center gap-3 flex-1">
//                               <img 
//                                 src={item.image} 
//                                 alt={item.name}
//                                 className="w-12 h-12 rounded-lg object-cover"
//                               />
//                               <div className="flex-1">
//                                 <div className="text-gray-900 font-medium">{item.name}</div>
//                                 <div className="text-gray-600 text-sm">{item.description}</div>
//                               </div>
//                             </div>
//                             <div className="text-right">
//                               <div className="text-gray-900 font-bold">{item.purchasePrice}</div>
//                               <div className="text-gray-500 text-sm">Qty: {item.quantity || 1}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Order Summary */}
//                     <div className="bg-white rounded-lg p-4 border border-gray-200">
//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <div className="text-gray-600">Delivery Date</div>
//                           <div className="text-gray-900">{order.deliveryDate}</div>
//                         </div>
//                         <div>
//                           <div className="text-gray-600">Transaction ID</div>
//                           <div className="text-gray-900 font-mono text-xs">{order.transactionId}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Clear All Modal
//   const ClearAllModal = () => {
//     return (
//       <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//         <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full p-6 shadow-2xl">
//           <div className="text-center">
//             <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <MdClearAll className="text-3xl text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">Clear Wishlist?</h2>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to remove all {card.length} items from your wishlist? 
//               This action cannot be undone.
//             </p>
            
//             {/* Items to be removed */}
//             <div className="bg-gray-50 rounded-xl p-4 mb-6 max-h-40 overflow-y-auto border border-gray-200">
//               <h4 className="text-gray-900 font-bold mb-2 text-left">Items to be removed:</h4>
//               <div className="space-y-2">
//                 {card.slice(0, 5).map(item => (
//                   <div key={item.id} className="flex items-center justify-between text-sm">
//                     <span className="text-gray-700 truncate max-w-[180px]">{item.name}</span>
//                     <span className="text-gray-900">{item.price}</span>
//                   </div>
//                 ))}
//                 {card.length > 5 && (
//                   <div className="text-gray-500 text-sm text-left">
//                     ...and {card.length - 5} more items
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowClearAllModal(false)}
//                 className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmClearAll}
//                 className="flex-1 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
//               >
//                 Clear All Items
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Payment Modal Component
//   const PaymentModal = () => {
//     const [upiId, setUpiId] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [cardExpiry, setCardExpiry] = useState("");
//     const [cardCvv, setCardCvv] = useState("");
//     const [selectedBank, setSelectedBank] = useState("");
//     const [selectedWallet, setSelectedWallet] = useState("");

//     const renderPaymentStep = () => {
//       switch (paymentStep) {
//         case "select":
//           return (
//             <div className="space-y-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Select Payment Method</h3>
              
//               <div className="grid grid-cols-2 gap-4">
//                 {paymentMethods.map(method => (
//                   <button
//                     key={method.id}
//                     onClick={() => setSelectedPayment(method.id)}
//                     className={`p-4 rounded-xl border-2 transition-all ${
//                       selectedPayment === method.id
//                         ? 'border-pink-500 bg-pink-50'
//                         : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                     }`}
//                   >
//                     <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mx-auto mb-3`}>
//                       <div className="text-2xl text-white">
//                         {method.icon}
//                       </div>
//                     </div>
//                     <div className="text-gray-900 font-medium">{method.name}</div>
//                     {method.popular && (
//                       <div className="text-xs text-green-600 mt-1">Most Popular</div>
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {selectedPayment && (
//                 <div className="mt-6">
//                   <button
//                     onClick={() => setPaymentStep("details")}
//                     className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
//                   >
//                     Continue to Payment Details
//                   </button>
//                 </div>
//               )}
//             </div>
//           );

//         case "details":
//           return (
//             <div className="space-y-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 {selectedPayment === "upi" && "Enter UPI Details"}
//                 {selectedPayment === "credit" && "Credit Card Details"}
//                 {selectedPayment === "debit" && "Debit Card Details"}
//                 {selectedPayment === "netbanking" && "Net Banking"}
//                 {selectedPayment === "wallet" && "Select Wallet"}
//                 {selectedPayment === "cod" && "Cash on Delivery"}
//               </h3>

//               {/* UPI Payment */}
//               {selectedPayment === "upi" && (
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <button className="bg-blue-50 p-4 rounded-xl text-blue-700 flex flex-col items-center justify-center border border-blue-200">
//                       <FaGooglePay className="text-2xl mb-2" />
//                       <div className="text-sm">Google Pay</div>
//                     </button>
//                     <button className="bg-purple-50 p-4 rounded-xl text-purple-700 flex flex-col items-center justify-center border border-purple-200">
//                       <SiPhonepe className="text-2xl mb-2" />
//                       <div className="text-sm">PhonePe</div>
//                     </button>
//                     <button className="bg-blue-50 p-4 rounded-xl text-blue-700 flex flex-col items-center justify-center border border-blue-200">
//                       <SiPaytm className="text-2xl mb-2" />
//                       <div className="text-sm">Paytm</div>
//                     </button>
//                     <button className="bg-yellow-50 p-4 rounded-xl text-yellow-700 flex flex-col items-center justify-center border border-yellow-200">
//                       <FaAmazonPay className="text-2xl mb-2" />
//                       <div className="text-sm">Amazon Pay</div>
//                     </button>
//                   </div>
                  
//                   <div>
//                     <label className="text-gray-700 mb-2 block">Enter UPI ID</label>
//                     <input
//                       type="text"
//                       placeholder="example@upi"
//                       value={upiId}
//                       onChange={(e) => setUpiId(e.target.value)}
//                       className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
//                     />
//                   </div>
                  
//                   <div className="text-center text-gray-500">OR</div>
                  
//                   <div className="text-center">
//                     <div className="w-48 h-48 bg-white p-4 rounded-xl mx-auto mb-4 border-2 border-gray-300">
//                       <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
//                         <div className="text-center">
//                           <BsQrCodeScan className="text-4xl mx-auto mb-2" />
//                           <div>Scan QR Code</div>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 text-sm">Scan to pay ₹{orderDetails?.total?.toFixed(2)}</p>
//                   </div>
//                 </div>
//               )}

//               {/* Credit/Debit Card */}
//               {(selectedPayment === "credit" || selectedPayment === "debit") && (
//                 <div className="space-y-4">
//                   <div>
//                     <label className="text-gray-700 mb-2 block">Card Number</label>
//                     <input
//                       type="text"
//                       placeholder="1234 5678 9012 3456"
//                       value={cardNumber}
//                       onChange={(e) => setCardNumber(e.target.value)}
//                       className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="text-gray-700 mb-2 block">Expiry Date</label>
//                       <input
//                         type="text"
//                         placeholder="MM/YY"
//                         value={cardExpiry}
//                         onChange={(e) => setCardExpiry(e.target.value)}
//                         className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-gray-700 mb-2 block">CVV</label>
//                       <input
//                         type="password"
//                         placeholder="123"
//                         value={cardCvv}
//                         onChange={(e) => setCardCvv(e.target.value)}
//                         className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center gap-2 text-gray-600 text-sm">
//                     <FaCheckCircle className="text-green-500" />
//                     Your card details are secure and encrypted
//                   </div>
//                 </div>
//               )}

//               {/* Net Banking */}
//               {selectedPayment === "netbanking" && (
//                 <div>
//                   <label className="text-gray-700 mb-2 block">Select Bank</label>
//                   <select
//                     value={selectedBank}
//                     onChange={(e) => setSelectedBank(e.target.value)}
//                     className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
//                   >
//                     <option value="">Select your bank</option>
//                     <option value="sbi">State Bank of India</option>
//                     <option value="hdfc">HDFC Bank</option>
//                     <option value="icici">ICICI Bank</option>
//                     <option value="axis">Axis Bank</option>
//                     <option value="kotak">Kotak Mahindra Bank</option>
//                   </select>
//                 </div>
//               )}

//               {/* Wallet */}
//               {selectedPayment === "wallet" && (
//                 <div className="space-y-4">
//                   {[
//                     { id: "paytm", name: "Paytm Wallet", icon: <SiPaytm />, balance: "₹1,250" },
//                     { id: "amazon", name: "Amazon Pay", icon: <FaAmazonPay />, balance: "₹850" },
//                     { id: "phonepe", name: "PhonePe", icon: <SiPhonepe />, balance: "₹2,100" },
//                   ].map(wallet => (
//                     <button
//                       key={wallet.id}
//                       onClick={() => setSelectedWallet(wallet.id)}
//                       className={`w-full p-4 rounded-xl border-2 flex items-center justify-between ${
//                         selectedWallet === wallet.id
//                           ? 'border-pink-500 bg-pink-50'
//                           : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="text-2xl text-gray-900">
//                           {wallet.icon}
//                         </div>
//                         <div className="text-left">
//                           <div className="text-gray-900 font-medium">{wallet.name}</div>
//                           <div className="text-gray-600 text-sm">Balance: {wallet.balance}</div>
//                         </div>
//                       </div>
//                       {selectedWallet === wallet.id && (
//                         <FaCheckCircle className="text-green-500" />
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Cash on Delivery */}
//               {selectedPayment === "cod" && (
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
//                   <GiTakeMyMoney className="text-5xl text-yellow-600 mx-auto mb-4" />
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">Cash on Delivery</h4>
//                   <p className="text-gray-700 mb-4">
//                     Pay ₹{orderDetails?.total?.toFixed(2)} when you receive your order
//                   </p>
//                   <div className="text-yellow-700 text-sm">
//                     Delivery executive will collect cash at your doorstep
//                   </div>
//                 </div>
//               )}

//               <div className="flex gap-3 mt-6">
//                 <button
//                   onClick={() => setPaymentStep("select")}
//                   className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   onClick={processPayment}
//                   className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
//                 >
//                   Pay Now ₹{orderDetails?.total?.toFixed(2)}
//                 </button>
//               </div>
//             </div>
//           );

//         case "processing":
//           return (
//             <div className="text-center py-8">
//               <div className="relative inline-block mb-6">
//                 <div className="w-24 h-24 border-4 border-gray-100 rounded-full"></div>
//                 <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-pink-500 border-r-purple-600 rounded-full animate-spin"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <MdPayment className="text-3xl text-gray-700 animate-pulse" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">Processing Payment</h3>
//               <p className="text-gray-600">
//                 Please wait while we process your payment of ₹{orderDetails?.total?.toFixed(2)}...
//               </p>
//               <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto mt-6">
//                 <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 animate-progress"></div>
//               </div>
//             </div>
//           );

//         case "success":
//           return (
//             <div className="text-center py-8">
//               <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
//                 <FaCheckCircle className="text-4xl text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Successful!</h3>
//               <p className="text-gray-600 mb-6">
//                 Your order has been confirmed and added to purchase history
//               </p>
              
//               {/* Order Summary */}
//               <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left border border-gray-200">
//                 <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
//                   <MdReceipt className="text-pink-600" />
//                   Order Details
//                 </h4>
                
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Order ID:</span>
//                     <span className="text-gray-900 font-mono">{orderDetails?.orderId}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Amount Paid:</span>
//                     <span className="text-2xl font-bold text-green-600">₹{orderDetails?.total?.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Payment Method:</span>
//                     <span className="text-gray-900 capitalize">{selectedPayment}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Date & Time:</span>
//                     <span className="text-gray-900">{orderDetails?.date}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Expected Delivery:</span>
//                     <span className="text-green-600">{orderDetails?.deliveryDate}</span>
//                   </div>
//                 </div>
                
//                 {/* Purchased Items */}
//                 <div className="mt-6 pt-6 border-t border-gray-300">
//                   <h5 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
//                     <MdShoppingBag className="text-pink-600" />
//                     Purchased Items ({orderDetails?.items?.length}):
//                   </h5>
//                   <div className="space-y-3 max-h-48 overflow-y-auto">
//                     {orderDetails?.items?.map((item, index) => (
//                       <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
//                         <div className="flex items-center gap-3">
//                           <img 
//                             src={item.image} 
//                             alt={item.name}
//                             className="w-10 h-10 rounded-lg object-cover"
//                           />
//                           <div>
//                             <div className="text-gray-900 font-medium text-sm">{item.name}</div>
//                             <div className="text-gray-600 text-xs">{item.category}</div>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-gray-900 font-medium">{item.price}</div>
//                           <div className="text-gray-500 text-xs">Qty: {item.quantity || 1}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => {
//                     setShowPaymentModal(false);
//                     setPaymentStep("select");
//                     setSelectedPayment("");
//                   }}
//                   className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             </div>
//           );

//         default:
//           return null;
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//         <div className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
//           {/* Modal Header */}
//           {paymentStep !== "success" && (
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                   <MdFlashOn className="text-yellow-500" />
//                   Complete Purchase
//                 </h2>
//                 <p className="text-gray-600 text-sm">Order Total: ₹{orderDetails?.total?.toFixed(2)}</p>
//               </div>
//               {paymentStep !== "processing" && (
//                 <button
//                   onClick={() => setShowPaymentModal(false)}
//                   className="text-gray-500 hover:text-gray-700 text-2xl"
//                 >
//                   <MdClose />
//                 </button>
//               )}
//             </div>
//           )}

//           {/* Payment Steps Indicator */}
//           {paymentStep !== "processing" && paymentStep !== "success" && (
//             <div className="flex justify-between mb-8 relative">
//               <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
//               {[
//                 { step: "select", label: "Method", number: 1 },
//                 { step: "details", label: "Details", number: 2 },
//                 { step: "confirm", label: "Pay", number: 3 },
//               ].map((stepItem) => (
//                 <div key={stepItem.step} className="relative z-10">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                     paymentStep === stepItem.step 
//                       ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
//                       : 'bg-gray-200 text-gray-500'
//                   }`}>
//                     {stepItem.number}
//                   </div>
//                   <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs ${
//                     paymentStep === stepItem.step ? 'text-gray-900 font-bold' : 'text-gray-500'
//                   }`}>
//                     {stepItem.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Payment Content */}
//           <div className="mb-6">
//             {renderPaymentStep()}
//           </div>

//           {/* Order Summary */}
//           {paymentStep !== "processing" && paymentStep !== "success" && orderDetails && (
//             <div className="border-t border-gray-200 pt-6 mt-6">
//               <h4 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
//                 <MdReceipt className="text-pink-600" />
//                 Order Summary
//               </h4>
              
//               {/* Items List */}
//               <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
//                 {orderDetails.items.map((item, index) => (
//                   <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     <div className="flex items-center gap-3">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-12 h-12 rounded-lg object-cover"
//                       />
//                       <div>
//                         <div className="text-gray-900 font-medium text-sm">{item.name}</div>
//                         <div className="text-gray-600 text-xs">{item.category}</div>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-gray-900 font-bold">{item.price}</div>
//                       {item.originalPrice && (
//                         <div className="text-gray-500 text-xs line-through">{item.originalPrice}</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Price Breakdown */}
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal ({orderDetails.items.length} items)</span>
//                   <span className="text-gray-900">₹{orderDetails.subtotal?.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Tax (GST 18%)</span>
//                   <span className="text-gray-900">₹{orderDetails.tax?.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className={orderDetails.shipping === 0 ? "text-green-600" : "text-gray-900"}>
//                     {orderDetails.shipping === 0 ? "FREE" : `₹${orderDetails.shipping}`}
//                   </span>
//                 </div>
//                 {orderDetails.savings > 0 && (
//                   <div className="flex justify-between">
//                     <span className="text-gray-600 flex items-center gap-1">
//                       <FaPercentage className="text-green-500" />
//                       Total Savings
//                     </span>
//                     <span className="text-green-600">₹{orderDetails.savings?.toFixed(2)}</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-300">
//                   <span className="text-gray-900 font-bold text-lg">Total Amount</span>
//                   <span className="text-2xl font-bold text-pink-600">₹{orderDetails.total?.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Security Footer */}
//           {paymentStep === "details" && (
//             <div className="mt-6 pt-6 border-t border-gray-200">
//               <div className="flex items-center justify-center gap-4 text-gray-600 text-sm">
//                 <div className="flex items-center gap-2">
//                   <FaCheckCircle className="text-green-500" />
//                   <span>Secure Payment</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaPhoneAlt className="text-blue-500" />
//                   <span>24/7 Support</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full min-h-screen py-10 px-4 sm:px-6 bg-white">

//       {/* HEADER - Show only when card has items */}
//       {card.length !== 0 && (
//         <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl px-6 py-6 mb-6 shadow-sm">
//           <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
//             <div className="flex-1">
//               <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 My Wishlist
//               </h1>
//               <p className="text-gray-700 mt-2 text-sm flex items-center gap-2">
//                 <FaHeart className="text-pink-600" />
//                 {card.length} items saved for later
//                 {selectedItems.length > 0 && (
//                   <span className="ml-4 text-green-700 flex items-center gap-1">
//                     <GiShoppingBag /> {selectedItems.length} selected
//                     <span className="ml-2 text-pink-600">₹{getTotalPrice().toFixed(2)}</span>
//                   </span>
//                 )}
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               {/* Purchase History Button */}
//               <button
//                 onClick={() => setShowPurchaseHistory(true)}
//                 className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
//               >
//                 <MdHistory />
//                 Purchase History
//                 {purchaseHistory.length > 0 && (
//                   <span className="bg-white text-purple-600 text-xs px-2 py-1 rounded-full">
//                     {purchaseHistory.length}
//                   </span>
//                 )}
//               </button>

//               {/* Weather & Info */}
//               <div className="flex items-center gap-4 text-gray-700">
//                 <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
//                   <IoCloud className="text-blue-500" /> 
//                   <span>27°C</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
//                   <MdLockClock className="text-green-500" />
//                   <span>08:30 AM</span>
//                 </div>
//               </div>

//               {/* Buy Selected Button */}
//               {selectedItems.length > 0 && (
//                 <button
//                   onClick={() => handleBuyNow()}
//                   className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all flex items-center gap-2 group"
//                 >
//                   <BsLightningChargeFill className="text-xl group-hover:scale-110 transition-transform" />
//                   Buy Selected ({selectedItems.length}) - ₹{getTotalPrice().toFixed(2)}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* EMPTY STATE - Show only when card is empty */}
//       {card.length === 0 ? (
//         <div className="flex justify-center items-center min-h-[60vh]">
//           <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 rounded-2xl px-10 py-12 text-center max-w-md shadow-lg">
//             <div className="text-7xl text-pink-600 mb-6 flex justify-center animate-pulse">
//               <FaHeart />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-3">
//               Your Wishlist is Empty
//             </h1>
//             <p className="text-gray-600 mb-2">
//               Save your favorite items here for quick purchase
//             </p>
//            <div>
//             <Link to={"/"} className="text-pink-800" >Home shopping</Link>
//            </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* TABLE HEADER */}
//           <div className="hidden lg:block mb-6 bg-gray-50 border border-gray-200 rounded-xl">
//             <div className="grid grid-cols-[50px_3fr_1fr_1fr_1fr_2fr] px-8 py-4">
//               <div className="text-center">
//                 <input 
//                   type="checkbox" 
//                   className="w-5 h-5 accent-pink-500 cursor-pointer"
//                   checked={selectedItems.length === card.length && card.length > 0}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setSelectedItems(card.map(item => item.id));
//                     } else {
//                       setSelectedItems([]);
//                     }
//                   }}
//                 />
//               </div>
//               <div className="flex items-center gap-2 text-gray-900 font-bold">
//                 <MdProductionQuantityLimits className="text-pink-600" /> Product
//               </div>
//               <div className="text-center flex items-center justify-center gap-2 text-gray-900 font-bold">
//                 <FaRupeeSign className="text-green-600" /> Price
//               </div>
//               <div className="text-center flex items-center justify-center gap-2 text-gray-900 font-bold">
//                 <FaPercentage className="text-yellow-600" /> Discount
//               </div>
//               <div className="text-center flex items-center justify-center gap-2 text-gray-900 font-bold">
//                 <FaShoppingCart className="text-blue-600" /> Stock
//               </div>
//               <div className="text-center text-gray-900 font-bold">
//                 <FaHeart className="inline mr-1 text-red-600" /> Actions
//               </div>
//             </div>
//           </div>

//           {/* PRODUCT LIST - Only show card items */}
//           <div className="space-y-4">
//             {card.map(item => (
//               <div
//                 key={item.id}
//                 className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex flex-col lg:grid lg:grid-cols-[50px_3fr_1fr_1fr_1fr_2fr] gap-5 items-center">
                  
//                   {/* SELECT CHECKBOX */}
//                   <div className="hidden lg:flex justify-center">
//                     <input 
//                       type="checkbox" 
//                       checked={selectedItems.includes(item.id)}
//                       onChange={() => toggleSelectItem(item.id)}
//                       className="w-5 h-5 accent-pink-500 cursor-pointer"
//                     />
//                   </div>

//                   {/* PRODUCT INFO */}
//                   <div className="flex items-center gap-4 w-full">
//                     <div className="relative">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-[90px] h-[90px] rounded-xl border-2 border-gray-200 group-hover:border-pink-400 transition-all object-cover"
//                       />
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
//                         SALE
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-gray-900 font-bold text-lg group-hover:text-pink-600 transition-colors">
//                         {item.name}
//                       </h3>
//                       <div className="flex items-center gap-2 mt-2">
//                         <div className="flex gap-1 text-yellow-500">
//                           {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
//                         </div>
//                         <span className="text-gray-600 text-sm">({item.rating})</span>
//                       </div>
//                       <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
//                         <FaUser className="text-blue-600" />
//                         <span>{item.category} • Delivery {item.delivery}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* PRICE */}
//                   <div className="text-center w-full">
//                     <div className="text-2xl font-bold text-gray-900">
//                       {item.price}
//                     </div>
//                     {item.originalPrice && (
//                       <div className="text-sm text-gray-500 line-through">
//                         {item.originalPrice}
//                       </div>
//                     )}
//                   </div>

//                   {/* DISCOUNT */}
//                   <div className="text-center w-full">
//                     {item.discount ? (
//                       <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full border border-green-200">
//                         <FaPercentage className="text-xs" />
//                         {item.discount}
//                       </div>
//                     ) : (
//                       <span className="text-gray-500">No Discount</span>
//                     )}
//                   </div>

//                   {/* STOCK STATUS */}
//                   <div className="text-center w-full">
//                     <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
//                       item.stock === "In Stock" 
//                         ? "bg-green-100 text-green-800 border-green-200"
//                         : item.stock === "Low Stock"
//                         ? "bg-yellow-100 text-yellow-800 border-yellow-200"
//                         : "bg-red-100 text-red-800 border-red-200"
//                     }`}>
//                       <div className={`w-2 h-2 rounded-full ${
//                         item.stock === "In Stock" ? "bg-green-500" :
//                         item.stock === "Low Stock" ? "bg-yellow-500" : "bg-red-500"
//                       } animate-pulse`}></div>
//                       {item.stock}
//                     </div>
//                   </div>

//                   {/* ACTIONS */}
//                   <div className="flex flex-col sm:flex-row gap-3 w-full lg:justify-end">
//                     {/* Buy Now Button */}
//                     <button
//                       onClick={() => handleBuyNow(item)}
//                       className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all group/buy"
//                     >
//                       <FaBolt className="group-hover/buy:animate-pulse" />
//                       Buy Now
//                     </button>

//                     {/* Add to Cart */}
//                     <button 
//                       onClick={() => addToCart(item)}
//                       className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
//                     >
//                       <FaShoppingCart /> Add to Cart
//                     </button>

//                     {/* Delete */}
//                     <button
//                       onClick={() => handleDelete(item.id)}
//                       className="flex items-center justify-center gap-2 px-4 py-3 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition"
//                     >
//                       <MdDelete className="text-xl" />
//                       <span className="lg:hidden">Remove</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Mobile Checkbox */}
//                 <div className="flex lg:hidden items-center gap-3 mt-4 pt-4 border-t border-gray-200">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedItems.includes(item.id)}
//                     onChange={() => toggleSelectItem(item.id)}
//                     className="w-5 h-5 accent-pink-500"
//                   />
//                   <span className="text-gray-600 text-sm">Select for bulk purchase</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* BULK ACTIONS FOOTER */}
//           {card.length > 0 && (
//             <div className="mt-10 p-6 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-2xl shadow-sm">
//               <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//                 <div className="text-gray-900">
//                   <div className="text-sm text-gray-600">Selected Items</div>
//                   <div className="text-2xl font-bold text-pink-600">{selectedItems.length} of {card.length}</div>
//                 </div>

//                 <div className="text-gray-900">
//                   <div className="text-sm text-gray-600">Total Amount</div>
//                   <div className="text-3xl font-bold">₹{getTotalPrice().toFixed(2)}</div>
//                   {getTotalSavings() > 0 && (
//                     <div className="text-sm text-green-700">
//                       You save: ₹{getTotalSavings().toFixed(2)}
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button
//                     onClick={clearAllWishlist}
//                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
//                   >
//                     <MdClearAll />
//                     Clear Wishlist
//                   </button>

//                   <button
//                     onClick={() => handleBuyNow()}
//                     disabled={selectedItems.length === 0}
//                     className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-pink-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     <GiShoppingBag />
//                     Buy Selected Items
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       {/* Payment Modal */}
//       {showPaymentModal && <PaymentModal />}

//       {/* Purchase History Modal */}
//       {showPurchaseHistory && <PurchaseHistoryModal />}

//       {/* Clear All Modal */}
//       {showClearAllModal && <ClearAllModal />}

//       {/* Quick Stats - Show only when card has items */}
//       {card.length > 0 && (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//             <div className="text-2xl text-pink-600 font-bold">{card.length}</div>
//             <div className="text-gray-600 text-sm">Wishlist Items</div>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//             <div className="text-2xl text-green-600 font-bold">₹{getTotalPrice().toFixed(2)}</div>
//             <div className="text-gray-600 text-sm">Selected Value</div>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//             <div className="text-2xl text-blue-600 font-bold">{purchaseHistory.length}</div>
//             <div className="text-gray-600 text-sm">Past Orders</div>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
//             <div className="text-2xl text-yellow-600 font-bold">₹{purchaseStats.totalSavings.toFixed(2)}</div>
//             <div className="text-gray-600 text-sm">Total Savings</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishList;