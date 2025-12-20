import React from 'react'
import AboutTitle from '../About/AboutTitle'
import ProductAvaileble from '../About/ProductAvaileble'
import OurStory from '../About/OurStory'
import OurValues from '../About/OurValues'
import OurValues2 from '../About/OurValues2'
import WhyChooseUs from '../About/WhyChooseUs'
import WhyChooseUs2 from '../About/WhyChooseUs2'
import MyOurTeam from '../About/MyOurTeam'
import Experience from '../About/Experience'
import TeamMembers from '../About/TeamMembers'

const About = () => {
  return (
    <div >
      <AboutTitle/>
      <ProductAvaileble/>
      {/* <OurStory/> */}
      <OurValues/>
      {/* <OurValues2/> */}
      <WhyChooseUs/>
      <WhyChooseUs2/>
      <MyOurTeam/>
      <TeamMembers/>
      <Experience/>
    </div>
  )
}

export default About