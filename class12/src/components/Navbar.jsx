import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Course'>Course</NavLink>

        
        
    </div>
  )
}

export default Navbar