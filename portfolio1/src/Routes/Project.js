import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImg2 from '../Components/HeroImg2'
import Pricing from '../Components/pricing'
import Certificate from '../Components/Certificate'

const Project = () => {
  return (
    <div>
    <Navbar/> 
    <HeroImg2 heading="Certifications" text="Some of my recent certification"/>
    <Certificate/>
    <Pricing/>
    <Footer/>


    </div>
  )
}

export default Project;
