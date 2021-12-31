import "./Navbar.css"

import React from 'react'

export default function Navbar() {
    return (
        <header className=''>
        <nav className='nav-list '>
            <h1 className="logo">Infinte Images</h1>
            <ul className='list-items ' >
                <li><span></span> Gallary</li>
                <li><span></span>tensor Flow</li>
                <li><span></span>Login</li>
            </ul>
        </nav>            
        </header>
    )
}

