import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:'flex',justifyContent:'space-between',gap:'',backgroundColor:'teal',alignItems:'center',marginBottom:'5rem',position:'sticky',top:'0px',width:'screen'}}>
        <h3 style={{backgroundColor:'green',padding:'5px',borderRadius:'2px'}}>Cart App</h3>
        
        <div style={{display:'flex',gap:'2rem'}}>
        <Link style={{textDecoration:'none',color:'black',font:'bold'}} to={'/'}>Home</Link>
        <Link style={{textDecoration:'none',color:'black',font:'bold'}} to={'/cart'}>Cart</Link>
        <span style={{color:'black',font:'bold'}} >items:{items.length}</span>
        </div>
     
    </div>
  )
}

export default Navbar
