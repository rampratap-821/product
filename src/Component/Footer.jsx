import React from 'react'
import google from '../assets/Icons/google.png'
import appstore from '../assets/Icons/Appstoe.png'
import Lottie from "lottie-react";
import perfume from "../assets/Images/perfume.json";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsTelephoneXFill } from "react-icons/bs";




const Footer = () => {
  return (
    <div className='w-[100%]  text-white bg-black sm:py-[70px] py-[35px] px-[25px] '>
      <div className='max-w-[1170px] mx-auto'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5'>

          <div>
            <div><MdOutlineForwardToInbox className='text-white animate-bounce'></MdOutlineForwardToInbox> GET SPECIAL DISCOUNT ON YOUR INBOX</div>
            <div className='  py-5 sm:grid-cols-2 grid-cols-[70%_auto]' >
              <input type='text' placeholder='Your Email' className='bg-black font-bold border-b-[2px] border-white mx-2  focus:outline-none focus:ring-0 w-1/2 ' />
              <div className='border border-white p-2 text-center'>SEND</div>
            </div>
          </div>

          <div >
            <div><FaMobileScreenButton className='text-white animate-bounce'></FaMobileScreenButton>EXPERIENCE THE NYKAA MOBILE APP</div>
            <img src={appstore} className='sm:w-[100px] w-[75px] py-4  ' />
            <img src={appstore} className='sm:w-[100px] w-[75px]   ' />

          </div>

          <div>
            <div><BsTelephoneXFill className='text-white animate-bounce'></BsTelephoneXFill>FOR ANY HELP, YOU MAY BE CALL US ATT</div>
            <h1>1800-267-4444</h1>
            <h1>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</h1>
          </div>

          <div>
          <Lottie animationData={perfume} loop={true} className="w-[150px] lg:mx-auto  " />
          </div>


        </div>


      </div>
    </div>
  )
}

export default Footer