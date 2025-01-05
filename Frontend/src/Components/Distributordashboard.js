import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Distributordashboard()
 {
  const location=useLocation();

  return (
    <>
    <Nav className='nav-bar' variant="tabs">
    <Nav.Item>
        <Nav.Link as={Link} to="/Distributordashboard/Addmedicine" active={location.pathname==="/Addmedicine"}>Add Medicines</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Distributordashboard/Updatedisprofile" active={location.pathname==="/Updatedisprofile"}>Update Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Distributordashboard/Updatedispswd" active={location.pathname==="/Updatedispswd"}>Update Password</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Distributordashboard/Checkdisorderlist" active={location.pathname==="/Checkdisorderlist"}>Check Orderlist & Approval</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav.Item>
    </Nav>

    <div>
    <h1 style={{color:"lightblue",textAlign:"center",marginTop:"-100px"}}>Welcome to Distributor Dashboard !</h1>
    </div>
    <Outlet/>
    </>
  )
}
