import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Admindashboard() 
{
  const location=useLocation();
  
  return (
    <>
    <Nav className='nav-bar' variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/Admindashboard/Addcity" active={location.pathname==="/Addcity"}>Add City</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Admindashboard/Manufcomp" active={location.pathname==="/Manufcomp"}>Medicine Manuf. Company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Admindashboard/Adddistributor" active={location.pathname==="/Adddistributor"}>Add Distributor</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Admindashboard/Addsupplier" active={location.pathname==="/Addsupplier"}>Add Supplier</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Admindashboard/Viewshop" active={location.pathname==="/Viewshop"}>View Shop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/Admindashboard/Viewdistributor" active={location.pathname==="/Viewdistributor"}>View Distributor</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/Admindashboard/Viewsupplier" active={location.pathname==="/Viewsupplier"}>View Supplier</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
      </Nav.Item>
    </Nav>

    <div>
    <h1 style={{color:"lightblue",textAlign:"center",marginTop:"-100px"}}>Welcome to Admin Dashboard !</h1>
    
    </div>
    <Outlet/>
    </>
  )
}
