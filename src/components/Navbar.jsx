import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const toggleClass = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>GAMER</p>
          <i className="fas fa-gamepad"></i>
        </div>
        <div className="searchbar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a game" />
        </div>
        <div className={isActive ? 'account active' : 'account'}>
          <i className="fas fa-bell"></i>
          <i className="fas fa-plus"></i>
          <i className="fas fa-cog"></i>
          <p>AF</p>
        </div>
        <i className="fas fa-bars" id="menu-btn" onClick={toggleClass}></i>
      </div>
    </>
  )
}
