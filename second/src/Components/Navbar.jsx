import React from 'react'
import { NavLink } from 'react-router'
import '../App.css'

const Navbar = () => {
  return (
    <div className='Nav'> 
    <NavLink to={'/'}>Home</NavLink>

    <NavLink to = {'/product'}>product</NavLink>
    <NavLink to={'/Addproduct'} >Addproduct</NavLink>


    <NavLink  to ={'/login'}>Login</NavLink>



      
    </div>
  )
}

export default Navbar
