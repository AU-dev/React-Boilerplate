import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav
        style={{
            position: "relative",
            borderTop: "solid 1px",
            paddingTop: "1rem",
            bottom: "0px"
        }}
    >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/contact-us">Contact Us</Link> |{" "}
        <Link to="/faq">FAQ</Link>
    </nav>
  )
}

export default Footer