import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Shopdashboard() 
{
  const location=useLocation();


  return (
    <>
    <Nav className='nav-bar' variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/Shopdashboard/Updateshopprofile" active={location.pathname==="/Updateshopprofile"}>Update Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Shopdashboard/Updateshoppswd" active={location.pathname==="/Updateshoppswd"}>Update Password</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Shopdashboard/Bookmedicines" active={location.pathname==="/Bookmedicines"}>Book Medicines</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Shopdashboard/Checkshopstatus" active={location.pathname==="/Checkshopstatus"}>Check Status</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav.Item>
    </Nav>

    <div>
    <h1 style={{color:"lightblue",textAlign:"center",marginTop:"-100px"}}>Welcome to Shop Dashboard !</h1>
    </div>
    <Outlet/>
    </>

  )
}
