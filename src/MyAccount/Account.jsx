import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold py-5'>My Account</h1>
            <h1>From your account dashboard, you can easily check & view your recent orders,
                manage your shipping and billing addresses and edit your password and account details.</h1>

            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3    py-10 '>

                <div className='py-5'>
                    <div className=' shadow-lg  px-4 bg-pink-50 border border-gray-200 py-2'>
                        <h1 className='flex items-center gap-4 text-xl font-bold  rounded-xl py-2 px-4 hover:bg-blue-600'> <MdDashboard></MdDashboard> <Link>DashBoard</Link></h1>
                    </div>

                    

                </div>

                <div className='lg:col-span-2 md:col-span-2 bg-red-600'>
                    <h1>  Dashboad</h1>
                </div>





            </div>
        </div>
    )
}

export default Account
