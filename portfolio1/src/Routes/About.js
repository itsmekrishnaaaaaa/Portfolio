import React from 'react' 
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImg2 from '../Components/HeroImg2'
import Aboutme from '../Components/About'

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="About me" text="I'm a front End Developer" />
    <Aboutme/>
    <Footer/>
    </div>
  )
}

export default About
