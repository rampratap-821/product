// import React from 'react'
// import Get_Glowing from '../Home/Get_Glowing'
// import Video from '../Home/Video'
// import This_Season from '../Home/Popular_this_sesion'
// import SliderImage from '../Home/SliderImage'
// import PartnerTheShin from '../Home/PartnerTheShin'
// import Our_Product from '../Home/Our_Product'


// const Home = ({card,setCard}) => {

//   return (
//     <div >

// <SliderImage/>  
//  <This_Season/>  
//  <Video /> 
//  <Our_Product card ={card} setCard = {setCard}/> 
//   <Get_Glowing/>
//     <PartnerTheShin/> 


//     </div>

//   )
// }

// export default Home



import React from "react";
import Get_Glowing from "../Home/Get_Glowing";
import Video from "../Home/Video";
import This_Season from "../Home/Popular_this_sesion";
import SliderImage from "../Home/SliderImage";
import Our_Product from "../Home/Our_Product";
import MyOurTeam from "../About/MyOurTeam"
import TeamMembers from "../About/TeamMembers"
import In_The_Spotlite from "../Home/In_The_Spotlite"
import HeroSection from "../OurProduct/HeroSection";
import PartnerTheShin from "../Home/PartnerTheShin"

const Home = ({ card, setCard }) => {
  return (
    <div>



      <SliderImage />
      <This_Season />
      <Video />
      <Our_Product card={card} setCard={setCard} />
      <MyOurTeam />
      <TeamMembers />
      {/* <PartnerTheShin /> */}
      <Get_Glowing />


    </div>
  );
};

export default Home;
