import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Supplierdashboard() 
{
  const location=useLocation();
  
  return (
    <>
    <Nav className='nav-bar' variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/Supplierdashboard/Updatesupprofile" active={location.pathname==="/Updatesupprofile"}>Update Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Supplierdashboard/Updatesuppswd" active={location.pathname==="/Updatesuppswd"}>Update Password</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Supplierdashboard/Booksupmedicines" active={location.pathname==="/Booksupmedicines"}>Book Medicines</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Supplierdashboard/Checksuporderlist" active={location.pathname==="/Checksuporderlist"}>Check Orderlist & Approval</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Supplierdashboard/Checksupstatus" active={location.pathname==="/Checksupstatus"}>Check Status</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav.Item>
    </Nav>

    <div>
    <h1 style={{color:"lightblue",textAlign:"center",marginTop:"-100px"}}>Welcome to Supplier Dashboard !</h1>
    </div>
 <Outlet/>
 </>
  )
}
