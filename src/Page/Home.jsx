import React from 'react'
import Get_Glowing from '../Home/Get_Glowing'
import Video from '../Home/Video'
import This_Season from '../Home/Popular_this_sesion'
import SliderImage from '../Home/SliderImage'
import PartnerTheShin from '../Home/PartnerTheShin'


const Home = () => {
  
  return (
    <div >
<SliderImage/>  
 <This_Season/>  
 <Video />  
 <Get_Glowing/>
    <PartnerTheShin/>
     
     
    </div>

  )
}

export default Home