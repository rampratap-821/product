import React from 'react'
import { Link } from 'react-router-dom'

const Navbar3 = () => {
  return (
    <>
      <div className='flex justify-center gap-5 shadow-lg py-4 relative px-5'>
        {/* Each nav item with fixed border behavior */}
        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Makeup</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Skin</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Hair</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Appliance</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Bath & Body</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Natural</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Mom & Baby</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Health & Wellness</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

        <div className='group relative pb-1'>
          <ul>
            <li>
              <Link className='block py-1'>Men</Link>
            </li>
          </ul>
          <div className='absolute bottom-0 left-0 w-full h-0 group-hover:h-1 bg-pink-500 transition-all duration-200'></div>
        </div>

      </div>
      <hr />
    </>
  )
}

export default Navbar3