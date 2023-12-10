import "./pricing.css"

import React from 'react'

const pricing = () => {
  return (
    <div className="pricing">
      <div className="Card-container">
        <div className="card">
            <h3>-Basic-</h3>
            <span className="bar"></span>
            <p className="btc"> $100</p>
            <p>-1 Week-</p>
            <p>-3 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <a href="/contact" className="btn">
                    PURCHASE NOW
            </a>
        </div>

        <div className="card">
            <h3>-Premium-</h3>
            <span className="bar"></span>
            <p className="btc"> $200</p>
            <p>- 2 Week-</p>
            <p>-5 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <a href="/contact" className="btn">
                    PURCHASE NOW
            </a>
        </div>

        <div className="card">
            <h3>-Business-</h3>
            <span className="bar"></span>
            <p className="btc"> $300</p>
            <p>-3 Week-</p>
            <p>-7 Pages-</p>
            <p>-Featured-</p>
            <p>-Responsive Design-</p>
            <a href="/contact" className="btn">
                    PURCHASE NOW
            </a>
        </div>
      </div>
    </div>
  )
}

export default pricing
