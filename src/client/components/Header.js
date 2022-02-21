import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
        style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            top: "0px"
        }}
    >
        <Link to="/">Home</Link> |{" "}
        <Link to="/contact-us">Contact Us</Link> |{" "}
        <Link to="/faq">FAQ</Link>
    </nav>
  )
}

export default Header