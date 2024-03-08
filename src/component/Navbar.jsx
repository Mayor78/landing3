import React from 'react'
import "../style/navbar.css"

const Navbar = () => {
  return (
    <>
  <nav>
    <div className="navfirst">
        <img className='logo' src="../main image/logomy1.png" alt="" />
    </div>
    <div className="navsecond">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Project</a>
    </div>
    <div className="navthird">
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-envelope"></i>
    <i class="fa-solid fa-phone"></i>
    </div>
  </nav>
  </>
  )
}

export default Navbar