import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Login() 
{
    const users=["Admin","Shop","Supplier","Distributor"];
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const location = useLocation();
    const[login,setLogin]=useState({});
    const[emailid,setEmailid]=useState('');

    function logincheck()
    {
        if(user==="Admin" || user==="admin")
        {
        axios
        .get(`http://localhost:8080/adminlogincheck/${emailid}/${password}`)
        .then((res)=>{
            setLogin(res.data);
            navigate("/Admindashboard");
            clearAll();
        })
        .catch((err)=>{
            toast.error(err.response.data);
        });
        }

        else if(user==="Distributor" || user==="distributor")
        {
            axios
            .get(`http://localhost:8080/dislogincheck/${emailid}/${password}`)
            .then((res)=>{
                setLogin(res.data);
                const userid=res.data.distributorid;
                navigate("/Distributordashboard");
                sessionStorage.setItem('distriid',userid);  //Setting distributorid using Session Storage
                clearAll();
            })
            .catch((err)=>{
                toast.error(err.response.data);
            });
        }
        else if(user==="Supplier" || user==="supplier")
        {
            axios
            .get(`http://localhost:8080/supplierlogincheck/${emailid}/${password}`)
            .then((res)=>{
                setLogin(res.data);
                const userid=res.data.supplierid;
                navigate("/Supplierdashboard");
                sessionStorage.setItem('supplierid',userid);  //Setting Supplierid using Session Storage
                clearAll();
            })
            .catch((err)=>{
                toast.error(err.response.data);
            });
        }
        else if(user==="Shop" || user==="shop")
        {
            axios
            .get(`http://localhost:8080/shoplogincheck/${emailid}/${password}`)
            .then((res)=>{
                setLogin(res.data);
                const userid=res.data.shopid;
                navigate("/Shopdashboard");
                sessionStorage.setItem('shopid',userid);  //Setting shopid using Session Storage
                clearAll();
            })
            .catch((err)=>{
                toast.error(err.response.data);
            });
        }
    }

    function clearAll()
    {
        setPassword("");
        setEmailid("");
    }

  return (
    <>
    <Nav className='nav-bar' variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Register" active={location.pathname === "/Register"}>Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/Login" active={location.pathname === "/Login"}>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}  to="/About" active={location.pathname === "/About"}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Contact" active={location.pathname === "/Contact"}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>

    <div>
    <h1 style={{color:"white",textAlign:"center",marginTop:"-100px"}}>Medical Order Processing</h1>
    </div>

    <img src="https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s=" alt="img1" style={{marginLeft:"1200px",width:"80px",marginTop:"-40px"}}/>
    <br></br><br></br>
    
    
    <div className='forms'>
    <h1 style={{color:"Black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Login Page</h1>
    <img src="https://cdn-icons-png.freepik.com/512/7084/7084424.png" alt="img5"  width="80px" style={{marginLeft:"600px"}}/><br></br>
        <label className='form-label'><h5 style={{width:"600px",marginLeft:"350px"}}>Select Usertypes:</h5></label>
        <select className='form-select' value={user} onChange={(e)=>setUser(e.target.value)} style={{width:"600px",marginLeft:"350px"}}>
            <option value={0}>--Select Options--</option>
        {
            users.map((item,index)=>
                (
                    <option key={index} value={item}>{item}</option>
                )
            )
        }
        </select><br></br>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{width:"600px",marginLeft:"350px"}}>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} style={{width:"600px",marginLeft:"350px"}} placeholder='@gmail.com'/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{width:"600px",marginLeft:"350px"}}>Enter Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"600px",marginLeft:"350px"}} placeholder='*****'/>
      </Form.Group>
    </Form>
 
    <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={logincheck}>
       Submit
      </Button>
      <Link to="/" className='btn btn-primary me-3'>Back</Link>
      </div>
    </div>
    </>
  )
}
