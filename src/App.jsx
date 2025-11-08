import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Products from './Page/Products'
import Gallery from './Page/Gallery'
import Blog from './Page/Blog'
import Team from './Page/Team'
import Contact from './Page/Contact'
import Navbar1 from './Component/Navbar1'
import Navbar from './Component/Navbar'
import Navbar3 from './Component/Navbar3'
import Direction from './Component/Direction'
import Footer from './Component/Footer'
import Footer2 from './Component/Footer2'
import Footer3 from './Component/Footer3'
import Footer4 from './Component/Footer4'
import Profile from './Page/Profile'
import MyAccount from './Page/MyAccount'
import WishList from './Page/WishList'
const App = () => {
  const [card,setCard] = useState([])
  return (
    <Router >
      {/* <Navbar1/> */}
      <Navbar card = {card} setCard = {setCard}/>
      {/* <Navbar3/> */}
      <Direction/>
      <Routes>
        <Route path='/' element={<Home card = {card} setCard ={setCard}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/myaccount' element={<MyAccount/>}></Route>
        <Route path='/wishlist' element={<WishList card = {card} setCard = {setCard}/>}></Route>

      </Routes>
      <Footer/>
      <Footer2/>
      <Footer3/>
      <Footer4/>
      {/* <Footer5/> */}
    </Router>
  )
}

export default App








// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // Sample data for cards
// const sampleData = [
//   { id: 1, title: "Card One", description: "Yeh card ek example hai." },
//   { id: 2, title: "Card Two", description: "Doosra example card." },
//   { id: 3, title: "Card Three", description: "Teesra example card." },
//   { id: 4, title: "Card Four", description: "Chautha example card." },
//   { id: 5, title: "Card Five", description: "Paanchva example card." },
//   { id: 6, title: "Card Six", description: "Chhatha example card." },
// ];

// // Home Component - Card Selection
// function SelectedCards({ 
//   sampleData, 
//   selectedIds, 
//   toggleSelect, 
//   clearSelection, 
//   selectAll 
// }) {
//   const selectedCards = sampleData.filter((card) => selectedIds.includes(card.id));

//   return (
//     <div className="p-6">
//       {/* Header with actions */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Cards Selector</h1>
//           <p className="text-gray-600 mt-1">
//             {selectedIds.length} cards selected - 
//             <Link to="/view-selected" className="text-blue-600 hover:text-blue-800 ml-1 font-medium">
//               View Selected Page
//             </Link>
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={selectAll}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
//           >
//             Select All
//           </button>
//           <button
//             onClick={clearSelection}
//             className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium"
//           >
//             Clear All
//           </button>
//         </div>
//       </div>

//       {/* Grid of all cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//         {sampleData.map((card) => {
//           const isSelected = selectedIds.includes(card.id);
//           return (
//             <div
//               key={card.id}
//               onClick={() => toggleSelect(card.id)}
//               className={`p-4 rounded-xl border-2 cursor-pointer transform transition-all duration-200 
//                 ${isSelected 
//                   ? "scale-105 border-blue-500 bg-blue-50 shadow-md" 
//                   : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
//                 }`}
//             >
//               <h2 className="font-semibold text-lg text-gray-800">{card.title}</h2>
//               <p className="text-sm mt-2 text-gray-600">{card.description}</p>
//               <div className="mt-3 flex justify-between items-center">
//                 <span className={`text-xs px-2 py-1 rounded-full ${
//                   isSelected 
//                     ? "bg-blue-100 text-blue-800" 
//                     : "bg-gray-100 text-gray-600"
//                 }`}>
//                   {isSelected ? "✅ Selected" : "👆 Click to select"}
//                 </span>
//                 {isSelected && (
//                   <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
//                     ✓
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Quick Preview of Selected Cards */}
//       {selectedIds.length > 0 && (
//         <div className="bg-white p-4 rounded-lg border shadow-sm">
//           <h3 className="text-lg font-semibold mb-3 text-gray-800">
//             Quick Preview - Selected Cards ({selectedCards.length})
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//             {selectedCards.slice(0, 3).map((card) => (
//               <div key={card.id} className="p-3 rounded-lg border bg-blue-50 border-blue-200">
//                 <h4 className="font-medium text-gray-800">{card.title}</h4>
//                 <p className="text-xs text-gray-600 mt-1">{card.description}</p>
//               </div>
//             ))}
//             {selectedCards.length > 3 && (
//               <div className="p-3 rounded-lg border bg-gray-100 text-center flex items-center justify-center">
//                 <div>
//                   <p className="text-sm text-gray-600">
//                     +{selectedCards.length - 3} more cards selected
//                   </p>
//                   <Link 
//                     to="/view-selected" 
//                     className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                   >
//                     View All
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // View Selected Page Component
// function ViewSelected({ sampleData, selectedIds }) {
//   const selectedCards = sampleData.filter((card) => selectedIds.includes(card.id));

//   return (
//     <div className="p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">Selected Cards</h1>
//             <p className="text-gray-600 mt-1">
//               Total {selectedCards.length} cards selected
//             </p>
//           </div>
//           <Link
//             to="/"
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium inline-block text-center"
//           >
//             ← Back to Selection
//           </Link>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-lg border shadow-sm min-h-[400px]">
//           {selectedIds.length === 0 ? (
//             // Empty State - Jab koi card select nahi hua
//             <div className="flex flex-col items-center justify-center h-96 text-center p-6">
//               <div className="mb-6">
//                 <div className="text-6xl text-gray-300 mb-4">📭</div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-500 mb-2">
//                 Koi Card Select Nahin Hua Hai
//               </h3>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Aapne abhi tak koi bhi card select nahi kiya hai. 
//                 Pehle cards page par jake kuch cards select karein.
//               </p>
//               <Link
//                 to="/"
//                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
//               >
//                 Cards Select Karein →
//               </Link>
//             </div>
//           ) : (
//             // Selected Cards Display
//             <div className="p-6">
//               {/* Summary Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//                   <p className="text-sm text-blue-600 font-medium">Total Selected</p>
//                   <p className="text-2xl font-bold text-blue-700">{selectedCards.length}</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <p className="text-sm text-green-600 font-medium">Percentage</p>
//                   <p className="text-2xl font-bold text-green-700">
//                     {Math.round((selectedCards.length / sampleData.length) * 100)}%
//                   </p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
//                   <p className="text-sm text-purple-600 font-medium">Remaining</p>
//                   <p className="text-2xl font-bold text-purple-700">
//                     {sampleData.length - selectedCards.length}
//                   </p>
//                 </div>
//               </div>

//               {/* Selected Cards Grid */}
//               <h3 className="text-lg font-semibold mb-4 text-gray-800">Aapke Selected Cards:</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {selectedCards.map((card) => (
//                   <div 
//                     key={card.id} 
//                     className="p-4 rounded-xl border-2 border-green-500 bg-green-50 shadow-sm"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <h4 className="font-semibold text-gray-800">{card.title}</h4>
//                       <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                         Selected
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-600">{card.description}</p>
//                     <div className="mt-3 pt-2 border-t border-green-200">
//                       <p className="text-xs text-green-600 font-medium">ID: {card.id}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Additional Info */}
//         {selectedIds.length > 0 && (
//           <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//             <p className="text-sm text-yellow-700">
//               💡 <strong>Tip:</strong> Aap selected cards ko manage karne ke liye wapas home page par ja sakte hain.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Main App Component
// export default function CardSelectionApp() {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const toggleSelect = (id) => {
//     setSelectedIds((prev) => {
//       if (prev.includes(id)) {
//         return prev.filter((x) => x !== id);
//       } else {
//         return [...prev, id];
//       }
//     });
//   };

//   const clearSelection = () => setSelectedIds([]);
//   const selectAll = () => setSelectedIds(sampleData.map((c) => c.id));

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         {/* Navigation Header */}
//         <nav className="bg-white shadow-sm border-b">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col sm:flex-row justify-between h-16 sm:h-14 py-2 sm:py-0">
//               <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
//                 <h1 className="text-xl font-bold text-gray-800">Card Selector App</h1>
//               </div>
//               <div className="flex items-center justify-center space-x-4">
//                 <Link
//                   to="/"
//                   className="text-gray-600 hover:text-blue-600 px-3 py-1 rounded-md text-sm font-medium border border-transparent hover:border-blue-200 transition"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/view-selected"
//                   className="text-gray-600 hover:text-blue-600 px-3 py-1 rounded-md text-sm font-medium border border-transparent hover:border-blue-200 transition flex items-center gap-1"
//                 >
//                   View Selected 
//                   {selectedIds.length > 0 && (
//                     <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                       {selectedIds.length}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route 
//             path="/" 
//             element={
//               <SelectedCards
//                 sampleData={sampleData}
//                 selectedIds={selectedIds}
//                 toggleSelect={toggleSelect}
//                 clearSelection={clearSelection}
//                 selectAll={selectAll}
//               />
//             } 
//           />
//           <Route 
//             path="/view-selected" 
//             element={
//               <ViewSelected
//                 sampleData={sampleData}
//                 selectedIds={selectedIds}
//               />
//             } 
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }



  








