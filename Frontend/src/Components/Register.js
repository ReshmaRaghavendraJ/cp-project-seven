import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';

export default function Register() 
{
  const[name,setName]=useState("");
  const[address,setAddress]=useState("");
  const[mobileno,setMobileno]=useState("");
  const[emailid,setEmailid]=useState("");
  const[password,setPassword]=useState("");
  const[image,setImage]=useState("");
  const[location,setLocation]=useState("");
  const[citylist,setCitylist]=useState([]);  //Dropdown list of all cities
  const[selectedcity,setSelectedcity]=useState('');




  useEffect(()=>{
    getallcity();
  },[])



  function clearAll()
  {
    setAddress("");
    setEmailid("");
    setImage("");
    setLocation("");
    setMobileno("");
    setMobileno("");
    setName("");
    setPassword("");
    setSelectedcity("");
  }

  function getallcity() /* Dropdown list of cities */
  {
    axios
    .get("http://localhost:8080/getallcity")
    .then((res)=>{
      setCitylist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }



  function shopregister()   /* Registration of Shop based on cityid and distributor id */
  {
    if(selectedcity==="")
    {
      toast.error("please select city");
      return;
    }
    if(name==="")
    {
      toast.error("please enter name");
      return;
    }
    if(address==="")
    {
      toast.error("please enter address");
      return;
    }
    if(mobileno==="")
      {
        toast.error("Please enter mobileno");
        return;
      }
      if (!/^\+91\d{10}$/.test(mobileno)) {
        toast.error("mobile number should start with +91 and be followed by 10 digits");
        return;
      }
      if(emailid==="")
        {
          toast.error("Please enter emailid");
          return;
        }
        if(password==="")
          {
            toast.error("Please enter password");
            return;
          }
          if (password.length > 0 && password.length < 5) 
          {
            toast.error("Password should be minimum of 5 Characters");
            return;
          }
          if (password.length > 0 && (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password))) 
            {
            toast.warning("Password should contain both letters and numbers");
          }
          if (!/^[A-Z]/.test(password)) {
            toast.error("Password should start with an uppercase letter");
            return;
          }
          if(image==="")
          {
            toast.error("Please enter url");
            return;
          }
          if(location==="")
          {
            toast.error("please enter location url");
            return;
          }
    const obj={selectedcity,name,address,mobileno,emailid,password,image,location};
      axios
            .post(`http://localhost:8080/shopregister/${selectedcity}`,obj)
            .then((res)=>{
                toast.success(res.data);
                clearAll();
            })
            .catch((err)=>{
                toast.error(err.response.data);
            });
  }

  return (
    <>
    <Navbar/>

    <div>
    <h1 style={{color:"white",textAlign:"center",marginTop:"-100px"}}>Medical Order Processing</h1>
    </div>

    <img src="https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s=" alt="img1" style={{marginLeft:"1200px",width:"80px",marginTop:"-40px"}}/>
    <br></br><br></br>

    <div className='regshop'>
    <h1 style={{color:"Black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Shop Registration</h1><br></br>
    <label className='form-label'><h5>Select City:</h5></label>
    <select className='form-select' value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
      <option value={0}>--Choose Options--</option>
      {
          citylist.map((item,index)=>(
            <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
          ))
      }
    </select><br></br>

    <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Shop Name:</h5></Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Address:</h5></Form.Label>
        <Form.Control type="textarea" value={address} style={{height:"100px"}} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Mobileno:</h5></Form.Label>
        <Form.Control type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Image Url:</h5></Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Enter Location Url:</h5></Form.Label>
        <Form.Control type="text" value={location} onChange={(e)=>setLocation(e.target.value)} />
      </Form.Group>
      </Form>
      <div className='button2'>
      <Button variant="success me-3" size="md" onClick={shopregister}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Link to="/" className='btn btn-primary me-3'>Back</Link>
      </div>
    </div><br></br>
    </>
  )
}
