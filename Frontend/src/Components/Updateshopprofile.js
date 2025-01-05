import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default function Updateshopprofile() 
{
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[mobileno,setMobileno]=useState('');
  const[emailid,setEmailid]=useState('');
  const[image,setImage]=useState('');
  const[location,setLocation]=useState('');
  const shop=sessionStorage.getItem('shopid');   // Get an item using session storage

  useEffect(()=>{
    getshopdetails();
  },[])

  function updateshopprofile()         /* Update Shop Profile Details */
  {
    const obj={name,address,mobileno,emailid,image,location};
    axios
    .put(`http://localhost:8080/updateshopprofile/${shop}`,obj)
    .then((res)=>{
      toast.success(res.data);
      clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function getshopdetails()  /*  Assign values for Update Operations */
  {
    axios
    .get(`http://localhost:8080/getshopdetails/${shop}`)
    .then((res)=>{
        setName(res.data.name);
        setAddress(res.data.address);
        setMobileno(res.data.mobileno);
        setEmailid(res.data.emailid);
        setImage(res.data.image);
        setLocation(res.data.location);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function clearAll()
  {
    setAddress("");
    setEmailid("");
    setImage("");
    setLocation("");
    setMobileno("");
    setName("");
  }

  return (
    <>
<Card className='updateshoppro'>
<Card.Header><h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Update Profile</h1></Card.Header>
<Card.Body>
<Card.Text>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Shop Name:</h5></Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Address:</h5></Form.Label>
        <Form.Control type="textarea" value={address} style={{height:"100px"}} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Mobileno:,</h5></Form.Label>
        <Form.Control type="text" value={mobileno} onChange={(e)=>setMobileno(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Upload Image:</h5></Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Location Url:</h5></Form.Label>
        <Form.Control type="text" value={location} onChange={(e)=>setLocation(e.target.value)} />
      </Form.Group>
      </Form>
      </Card.Text>
      <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={updateshopprofile}>
       Update
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      </div>
      </Card.Body>
    </Card><br></br>
    </>
  )
}
