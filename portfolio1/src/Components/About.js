import "./About.css"

import React from 'react'
import React1 from "..//asest/Heroo.jpg"
import React2 from "..//asest/Herooo.jpg"

const About = () => {
  return (
    <div className="about">
        <div className="Left">
            <h1>Who AM I ?</h1>
            <p>I'M a full time front-end Developer who is doing Freelancing.
                if you want to hire me you can simply contact me by clicking
                contact me button.
            </p>
            <a href="/contact">
                <button className="btn">Contact</button>
            </a>
        </div>
        <div className="Right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React2} className="img" alt="img"/>
                </div>
                <div className="img-stack bottom">
                <img src={React1} className="img" alt="img"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
