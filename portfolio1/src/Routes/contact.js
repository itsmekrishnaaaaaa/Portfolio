import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import HeroImg2 from '../Components/HeroImg2'
import Form from "..//Components/form"


const contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="Contact Me" text="For Contacting me Fill the form"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default contact
