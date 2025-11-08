import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <div className='py-10 '>
            <div className='text-center'>
                <h1 className='text-6xl py-10' >🛒👜</h1>
                <h1  className='text-6xl font-bold'>Ready to Experience the Difference?</h1>
                <p className='py-5 text-xl'>Join thousands of satisfied customers who trust us for their daily
                     grocery needs.</p>
                 <div className='py-7'>
                    <span className='border-2xl border-pink-700 bg-pink-700 rounded-2xl py-4 px-4 mx-8 font-bold  hover:bg-pink-900'><Link> 🛒 Start Shopping</Link></span>
                    <span className='border-2xl border-green-700 bg-pink-700  hover:bg-pink-900 rounded-2xl py-4 px-4 font-bold'><Link> 📞 Start Contact</Link></span>
                 </div>
            </div>

        </div>
  )
}

export default Experience
