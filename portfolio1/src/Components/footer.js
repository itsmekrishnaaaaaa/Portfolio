import "./footerStyle.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import React from 'react'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="Location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <p>Anamnagar, Kathmandu</p>
                    <p>Nepal</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    +977 9867945547
                    </h4>
                </div>
                <div className="Email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    krishnasap547@gmail.com
                    </h4>
                </div>
                </div>
           
            <div className="Right">
                <h4>About Me</h4>
                <p>This is Krishna Sapkota. Full stack Developer and
                    graphics Designer. You can contact me if you want to give
                    me new project.
                </p>
                <div className="Social">
                <FaFacebook size={20} style={{color:"white", marginRight:"1rem"}}/>
                <FaInstagram size={20} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
