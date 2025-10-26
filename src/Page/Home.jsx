import React from 'react'
import Get_Glowing from '../Home/Get_Glowing'
import Ram from '../Home/image'
import Video from '../Home/Video'
import In_The_Spotlit from '../Home/In_The_Spotlite'
import NykaaFashion from '../Home/NykaFashion'
import New_Nykaa from '../Home/New_Nykaa'
import This_Season from '../Home/Popular_this_sesion'
import GiftingCorner from '../Home/The_Gigting_Corner'
import Logo from '../Home/Logo'


const Home = () => {
  return (
    <div >
      <Get_Glowing />
      <Ram />
      <In_The_Spotlit />
       <Video />
      <NykaaFashion />
      {/* <New_Nykaa/> */}
      <This_Season/>
      {/* <GiftingCorner/> */}
        {/* <Logo/>  */}
    </div>

  )
}

export default Home