import "./Navbar.css"
import  { useState } from 'react'


import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    
    const [isopen, setisopen] = useState(false)
    function handlebars(){
        isopen ?
        setisopen(false):setisopen(true)
        // console.log("clicked")
    }
    return (
        <header className=''>
        <nav className='nav-list '>
            
            <NavLink to={'/'} className='Nav_link' activeClassName='activeRoute'><h1 className="logo">Infinite Images</h1></NavLink>
                <div id="menubtn" >
                    {isopen ? <i class="fa fa-close"onClick={handlebars} ></i>:
                <i class="fa fa-bars" onClick={handlebars}></i> }
                </div>
            
            <ul className={`list-items ${isopen? " list":""} ` } >
                {/* <NavLink to="/about"><span></span>About</NavLink>
                <NavLink to= "/tensor</ul>"><span></span>tensor Flow</NavLink>
                <NavLink to ="/login"><span></span>Login</NavLink> */}
                <NavLink to={'/'} className='Nav_link' activeClassName='activeRoute'><span></span>Home</NavLink>
                <NavLink to={'/about'} className='Nav_link' activeClassName='activeRoute'><span></span>About</NavLink>

                <NavLink to={'/tensor'} className='Nav_link' activeClassName='activeRoute'><span></span>Tensor</NavLink>

                <NavLink to={'/login'} className='Nav_link' activeClassName='activeRoute'><span></span>Login</NavLink>
            </ul>






            
        </nav>            
        </header>
    )
}

