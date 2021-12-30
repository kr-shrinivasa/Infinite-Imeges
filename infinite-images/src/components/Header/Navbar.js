import "./Navbar.css"

import React from 'react'

export default function Navbar() {
    return (
        <header className=''>
        <nav className='nav-list '>
            <h1 className="logo">Infinte Images</h1>
            <ul className='list-items ' >
                <li>Gallary</li>
                <li>tensor Flow</li>
                <li>Login</li>
            </ul>
        </nav>            
        </header>
    )
}

