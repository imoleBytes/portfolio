import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            {/* <ul className='flex '>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul> */}

            <ul className='flex '>
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
