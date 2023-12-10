import "./CertificateStyle.css"

import React from 'react'
import Img1 from "..//asest/certificate1.png"
import Img2 from "..//asest/certificate2.png"
import {NavLink} from "react-router-dom"

const Certificate = () => {
  return (
    <div className="Certificates-Container">
      <h1 className="Certificate "> My Certificate</h1>
      <div className="Certificate-container">
        <div className="Certificate-card">
            <img src={Img1} alt="Certificate1"/>
            <h2 className="Certificate-tittle"> Responsive Web Design</h2>
            <div className="Cer-detail">
                <p>this is the certificate that i received from freecodecamp by completing the task</p>
                <div className="Cer-btns">
                    <NavLink to="https://www.freecodecamp.org/certification/Krishna_002/responsive-web-design" className="btn">View</NavLink>
                    <NavLink to="https://www.freecodecamp.org/certification/Krishna_002/responsive-web-design" className="btn">Source</NavLink>
                </div>
            </div>
        </div>

        <div className="Certificate-card">
            <img src={Img2} alt="Certificate1"/>
            <h2 className="Certificate-tittle">Introduction to Front-End Development</h2>
            <div className="Cer-detail">
                <p>this is the certificate that i received from Coursera by completing the online course and task</p>
                <div className="Cer-btns">
                    <NavLink to="https://coursera.org/share/b3065989c5ed1501333070f43752b2d8" className="btn">View</NavLink>
                    <NavLink to="https://coursera.org/share/b3065989c5ed1501333070f43752b2d8" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate
