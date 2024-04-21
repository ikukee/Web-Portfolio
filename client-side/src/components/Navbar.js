import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (<>
    <div class="">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Contact Me</Link></li>
        </ul>
    </div>
    </>)
}
