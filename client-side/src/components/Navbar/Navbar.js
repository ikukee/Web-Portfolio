import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
export const Navbar = () => {
  return (<>
    <div id="navbar">
        <ul>
            <li onClick={(e)=>window.location.href="/"}>Home</li>
            <li onClick={(e)=>window.location.href="/projects"}>Projects</li>
            <li onClick={(e)=>window.location.href="/contact-me"}>Contact Me</li>
        </ul>
    </div>
    </>)
}
