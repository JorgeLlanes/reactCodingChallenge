import React from 'react'
import { Link } from "react-router-dom";
import "../Nav.css"



function Nav() {
  return (
    <div>
      <nav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/products">Products</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Nav
