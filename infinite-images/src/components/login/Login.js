import React from 'react'
import "./login.css"
import { NavLink } from "react-router-dom"


export default function Login() {
    return (
<div className='login'>
                 <h2>Sign-Up or Login</h2>  
                <form className='content'>
                    <label htmlFor="idnum">Email </label>
                    <input id="idnum" type="email" placeholder='example@gmail.com, ' required/>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" placeholder='Password'minLength={6} required/>
                   
                   <NavLink to={'/'} className='Nav_link' activeClassName='activeRoute'><button className="btn">Login </button></NavLink>
                </form>

                </div>
    )
}
