import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  PiListDashesBold, 
  PiUserCircle, 
  PiMapPin, 
  PiLockKey 
} from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { 
  FaEdit, 
  FaEye, 
  FaHeart, 
  FaHome, 
  FaLock, 
  FaSave, 
  FaTruck,
  FaTrash,
  FaPlus,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { 
  FaArrowRotateRight, 
  FaLocationDot, 
  FaRotateRight,
  FaUser,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";

const MyAccount = () => {
  const [show, setShow] = useState(1)
  const [editMode, setEditMode] = useState(false)
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", name: "Ram Singh", address: "100 Main Street, Moradabad, Uttar Pradesh, India", phone: "+91 9876543210", isDefault: true },
    { id: 2, type: "Office", name: "Ram Singh", address: "Tech Park, Sector 62, Noida, Uttar Pradesh, India", phone: "+91 9876543211", isDefault: false }
  ])
  const [accountDetails, setAccountDetails] = useState({
    firstName: "Ram",
    lastName: "Singh",
    email: "ram.singh@example.com",
    displayName: "ram_singh",
    phone: "+91 9876543210"
  })
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: ""
  })

  // Sample order data
  const orders = [
    { id: 1, date: "2024-01-15", status: "Completed", total: "$45.99", items: 3 },
    { id: 2, date: "2024-01-10", status: "Processing", total: "$89.99", items: 2 },
    { id: 3, date: "2024-01-05", status: "Shipped", total: "$129.99", items: 5 }
  ]

  const handleAddressEdit = (id) => {
    console.log("Edit address:", id)
  }

  const handleAddressDelete = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id))
  }

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })))
  }

  const handleAccountSave = () => {
    console.log("Saving account details:", accountDetails)
    setEditMode(false)
  }

  const handlePasswordUpdate = () => {
    console.log("Updating password:", password)
    setPassword({ current: "", new: "", confirm: "" })
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#fff5f7] via-white to-[#fff5f7] py-8 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8 animate-fadeIn'>
          <h1 className='text-3xl md:text-4xl font-bold text-pink-700'>
            My Account
          </h1>
          <p className='text-black mt-3 max-w-3xl font-medium'>
            From your account dashboard, you can easily check & view your recent orders,
            manage your shipping and billing addresses and edit your password and account details.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 animate-slideIn'>
          {/* Sidebar */}
          <div className='lg:w-1/4'>
            <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
              <div className='flex items-center gap-3 mb-6 pb-6 border-b border-[#ffebee]'>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center'>
                  <PiUserCircle className='text-2xl text-white' />
                </div>
                <div>
                  <h3 className='font-bold text-black'>Ram Singh</h3>
                  <p className='text-black text-sm font-medium'>Premium Member</p>
                </div>
              </div>

              <nav className='space-y-1'>
                {[
                  { id: 1, icon: <PiListDashesBold className="text-black" />, label: "Dashboard" },
                  { id: 2, icon: <MdBorderColor className="text-black" />, label: "Orders" },
                  { id: 3, icon: <FaHome className="text-black" />, label: "Addresses" },
                  { id: 4, icon: <ImProfile className="text-black" />, label: "Account Details" },
                  { id: 5, icon: <PiLockKey className="text-black" />, label: "Change Password" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setShow(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                      show === item.id 
                        ? 'bg-pink-700 text-white shadow-lg transform scale-[1.02]' 
                        : 'text-black hover:bg-[#fff5f7] hover:shadow-md'
                    }`}
                  >
                    <span className={`text-lg ${show === item.id ? 'text-white' : 'text-black'}`}>
                      {React.cloneElement(item.icon, { className: show === item.id ? 'text-white' : 'text-black' })}
                    </span>
                    <span className='font-semibold'>{item.label}</span>
                  </button>
                ))}
                
                <button className='w-full flex items-center gap-3 p-3 rounded-xl text-black hover:bg-red-50 hover:text-red-600 transition-all duration-300 mt-4 hover:shadow-md'>
                  <span className='text-lg text-black'><IoMdLogOut className="text-pink-700" /></span>
                  <span className='font-semibold'>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:w-3/4'>
            {/* Dashboard */}
            {show === 1 && (
              <div className='animate-fadeIn'>
                <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
                  <h2 className='text-2xl font-bold text-black mb-6'>Dashboard</h2>
                  
                  {/* Stats */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    <div className='bg-white rounded-2xl p-6 border border-[#ffebee] hover:shadow-xl transition-all duration-300 hover:border-[#ff7a8a]'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-black text-sm font-medium'>Total Orders</p>
                          <h3 className='text-3xl font-bold text-black mt-2'>12</h3>
                        </div>
                        <div className='w-14 h-14 rounded-full  flex items-center justify-center '>
                          <MdBorderColor className='text-2xl text-black' />
                        </div>
                      </div>
                    </div>
                    
                    <div className='bg-white rounded-2xl p-6 border border-[#ffebee] hover:shadow-xl transition-all duration-300 hover:border-[#ff7a8a]'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-black text-sm font-medium'>Wishlist Items</p>
                          <h3 className='text-3xl font-bold text-black mt-2'>8</h3>
                        </div>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center '>
                          <FaHeart className='text-2xl text-black' />
                        </div>
                      </div>
                    </div>
                    
                    <div className='bg-white rounded-2xl p-6 border border-[#ffebee] hover:shadow-xl transition-all duration-300 hover:border-[#ff7a8a]'>
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-black text-sm font-medium'>Saved Addresses</p>
                          <h3 className='text-3xl font-bold text-black mt-2'>2</h3>
                        </div>
                        <div className='w-14 h-14 rounded-full  flex items-center justify-center '>
                          <FaLocationDot className='text-2xl text-black' />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div>
                    <div className='flex justify-between items-center mb-6'>
                      <h3 className='text-xl font-bold text-black'>Recent Orders</h3>
                      <Link to="/orders" className='font-semibold text-black hover:text-[#ff7a8a] transition-colors flex items-center gap-1'>
                        View All 
                        <span className='text-lg'>→</span>
                      </Link>
                    </div>
                    
                    <div className='space-y-4'>
                      {orders.map((order) => (
                        <div key={order.id} className='border border-[#ffebee] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white'>
                          <div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
                            <div>
                              <h4 className='font-bold text-black text-lg'>Order #{order.id}</h4>
                              <div className='flex items-center gap-2 text-black text-sm mt-1'>
                                <span>📅 {order.date}</span>
                                <span className='w-1 h-1 bg-black rounded-full'></span>
                                <span>{order.items} items</span>
                              </div>
                            </div>
                            <div className='flex flex-col items-end mt-2 md:mt-0'>
                              <span className='text-xl font-bold text-black'>{order.total}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                order.status === 'Completed' 
                                  ? 'bg-green-100 text-black' 
                                  : order.status === 'Processing'
                                  ? 'bg-yellow-100 text-black'
                                  : 'bg-blue-100 text-black'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className='flex gap-4'>
                            <button className='flex items-center gap-2 text-black hover:text-black transition-colors font-medium'>
                              <FaEye className='text-black' />
                              <span className='text-sm'>View Order</span>
                            </button>
                            <button className='flex items-center gap-2 text-black hover:text-black transition-colors font-medium'>
                              <FaTruck className='text-black' />
                              <span className='text-sm'>Track Order</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders */}
            {show === 2 && (
              <div className='animate-fadeIn'>
                <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
                  <h2 className='text-2xl font-bold text-black mb-6'>Order History</h2>
                  
                  <div className='overflow-x-auto'>
                    <table className='w-full'>
                      <thead>
                        <tr className='border-b border-[#ffebee]'>
                          <th className='text-left py-4 px-4 text-black font-semibold'>Order</th>
                          <th className='text-left py-4 px-4 text-black font-semibold'>Date</th>
                          <th className='text-left py-4 px-4 text-black font-semibold'>Status</th>
                          <th className='text-left py-4 px-4 text-black font-semibold'>Total</th>
                          <th className='text-left py-4 px-4 text-black font-semibold'>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.id} className='border-b border-[#ffebee] hover:bg-[#fff5f7] transition-colors'>
                            <td className='py-4 px-4 font-medium text-black'>#{order.id}</td>
                            <td className='py-4 px-4 text-black'>{order.date}</td>
                            <td className='py-4 px-4'>
                              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                                order.status === 'Completed' 
                                  ? 'bg-green-100 text-black' 
                                  : order.status === 'Processing'
                                  ? 'bg-yellow-100 text-black'
                                  : 'bg-blue-100 text-black'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className='py-4 px-4 font-bold text-black'>{order.total}</td>
                            <td className='py-4 px-4'>
                              <div className='flex gap-3'>
                                <button className='p-2 text-black hover:text-black transition-colors hover:bg-[#fff5f7] rounded-lg' title='View Order'>
                                  <FaEye className='text-black' />
                                </button>
                                <button className='p-2 text-black hover:text-black transition-colors hover:bg-[#fff5f7] rounded-lg' title='Track Order'>
                                  <FaTruck className='text-black' />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Addresses */}
            {show === 3 && (
              <div className='animate-fadeIn'>
                <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
                  <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-black'>Addresses</h2>
                    <button className='flex items-center gap-2 px-2 py-3 bg-black text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-[1.02]'>
                      <FaPlus className='text-white' />
                      Add New Address
                    </button>
                  </div>
                  
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {addresses.map((address) => (
                      <div key={address.id} className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl bg-white ${
                        address.isDefault ? 'border-black shadow-lg' : 'border-[#ffebee]'
                      }`}>
                        <div className='flex justify-between items-start mb-4'>
                          <div className='flex items-center gap-3'>
                            <div className={`p-2.5 rounded-xl ${
                              address.isDefault ? 'bg-black' : 'bg-black'
                            }`}>
                              <FaHome className='text-white' />
                            </div>
                            <div>
                              <h3 className='font-bold text-black'>{address.type}</h3>
                              {address.isDefault && (
                                <span className='px-3 py-1 bg-black text-white text-xs rounded-full mt-1 font-semibold'>
                                  Default
                                </span>
                              )}
                            </div>
                          </div>
                          <div className='flex gap-2'>
                            <button 
                              onClick={() => handleAddressEdit(address.id)}
                              className='p-2.5 text-black hover:text-black transition-colors hover:bg-[#fff5f7] rounded-lg'
                              title='Edit Address'
                            >
                              <FaEdit className='text-black' />
                            </button>
                            <button 
                              onClick={() => handleAddressDelete(address.id)}
                              className='p-2.5 text-black hover:text-red-600 transition-colors hover:bg-red-50 rounded-lg'
                              title='Delete Address'
                            >
                              <FaTrash className='text-black' />
                            </button>
                          </div>
                        </div>
                        
                        <div className='space-y-3'>
                          <div className='flex items-center gap-3 text-black'>
                            <FaUser className='text-black' />
                            <span className='font-medium'>{address.name}</span>
                          </div>
                          <div className='flex items-start gap-3 text-black'>
                            <FaLocationDot className='text-black mt-1' />
                            <span>{address.address}</span>
                          </div>
                          <div className='flex items-center gap-3 text-black'>
                            <FaPhone className='text-black' />
                            <span className='font-medium'>{address.phone}</span>
                          </div>
                        </div>
                        
                        {!address.isDefault && (
                          <button 
                            onClick={() => handleSetDefault(address.id)}
                            className='mt-5 text-sm text-black hover:text-black font-semibold flex items-center gap-1'
                          >
                            Set as Default
                            <span>→</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Account Details */}
            {show === 4 && (
              <div className='animate-fadeIn'>
                <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
                  <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-black'>Account Details</h2>
                    <button 
                      onClick={() => setEditMode(!editMode)}
                      className='flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-[1.02]'
                    >
                      <FaEdit className='text-white' />
                      {editMode ? 'Cancel Edit' : 'Edit Details'}
                    </button>
                  </div>
                  
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-black mb-2 font-medium'>First Name</label>
                      <div className='relative'>
                        <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="text"
                          value={accountDetails.firstName}
                          onChange={(e) => setAccountDetails({...accountDetails, firstName: e.target.value})}
                          disabled={!editMode}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:opacity-70 text-black font-medium"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className='block text-black mb-2 font-medium'>Last Name</label>
                      <div className='relative'>
                        <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="text"
                          value={accountDetails.lastName}
                          onChange={(e) => setAccountDetails({...accountDetails, lastName: e.target.value})}
                          disabled={!editMode}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:opacity-70 text-black font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className='md:col-span-2'>
                      <label className='block text-black mb-2 font-medium'>Email Address</label>
                      <div className='relative'>
                        <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="email"
                          value={accountDetails.email}
                          onChange={(e) => setAccountDetails({...accountDetails, email: e.target.value})}
                          disabled={!editMode}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:opacity-70 text-black font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className='md:col-span-2'>
                      <label className='block text-black mb-2 font-medium'>Display Name</label>
                      <div className='relative'>
                        <PiUserCircle className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg' />
                        <input
                          type="text"
                          value={accountDetails.displayName}
                          onChange={(e) => setAccountDetails({...accountDetails, displayName: e.target.value})}
                          disabled={!editMode}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all disabled:opacity-70 text-black font-medium"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {editMode && (
                    <button 
                      onClick={handleAccountSave}
                      className='mt-7 flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-[1.02]'
                    >
                      <FaSave className='text-white' />
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Change Password */}
            {show === 5 && (
              <div className='animate-fadeIn'>
                <div className='bg-white rounded-2xl shadow-xl border border-[#ffebee] p-6'>
                  <h2 className='text-2xl font-bold text-black mb-6'>Change Password</h2>
                  
                  <div className='space-y-6 max-w-2xl'>
                    <div>
                      <label className='block text-black mb-2 font-medium'>Current Password</label>
                      <div className='relative'>
                        <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="password"
                          value={password.current}
                          onChange={(e) => setPassword({...password, current: e.target.value})}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-black font-medium"
                          placeholder="Enter current password"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className='block text-black mb-2 font-medium'>New Password</label>
                      <div className='relative'>
                        <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="password"
                          value={password.new}
                          onChange={(e) => setPassword({...password, new: e.target.value})}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-black font-medium"
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className='block text-black mb-2 font-medium'>Confirm New Password</label>
                      <div className='relative'>
                        <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black' />
                        <input
                          type="password"
                          value={password.confirm}
                          onChange={(e) => setPassword({...password, confirm: e.target.value})}
                          className="w-full py-3.5 pl-10 pr-4 bg-white border border-black rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-black font-medium"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    
                    <div className='flex gap-4'>
                      <button 
                        onClick={handlePasswordUpdate}
                        className='flex items-center gap-2 px-6 py-3.5 bg-black text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-[1.02]'
                      >
                        <FaSave className='text-white' />
                        Update Password
                      </button>
                      <button 
                        onClick={() => setPassword({ current: "", new: "", confirm: "" })}
                        className='px-6 py-3.5 border border-black text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 font-semibold'
                      >
                        Cancel
                      </button>
                    </div>
                    
                    <div className='mt-6 p-5 bg-white border border-black rounded-xl'>
                      <p className='text-black text-sm font-medium'>
                        <strong className='text-black'>Password requirements:</strong> At least 8 characters, including uppercase, lowercase, numbers, and special characters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

export default MyAccount