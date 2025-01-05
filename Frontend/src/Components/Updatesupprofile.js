import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';

export default function Updatesupprofile() 
{
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[emailid,setEmailid]=useState('');
  const[image,setImage]=useState('');
  const[mobile,setMobile]=useState('');
  const supid=sessionStorage.getItem('supplierid');  //Get an item of session storage of supplierid

  useEffect(()=>{
    getsupplierdetails();
  },[])

  function Updatesupprofile()   /* Update Supplier Profile Details */
  {
    const obj={name,address,mobile,emailid,image};
    axios
    .put(`http://localhost:8080/Updatesupprofile/${supid}`,obj)
    .then((res)=>{
        toast.success(res.data);
        clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getsupplierdetails()   /* Assign values of Supplier Details */
  {
    axios
    .get(`http://localhost:8080/getsupplierdetails/${supid}`)
    .then((res)=>{
        setName(res.data.name);
        setAddress(res.data.address);
        setMobile(res.data.mobile);
        setEmailid(res.data.emailid);
        setImage(res.data.image);
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
    setMobile("");
    setName("");
  }

  return (
    <>
     <Card className='updatesupprofile'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Update Suppliers Profile</h1></Card.Header>
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
        <Form.Label><h5 style={{color:"black"}}>Enter Mobileno:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Upload Image:</h5></Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={Updatesupprofile}>
       Update
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      </div>
      </Card.Body>
    </Card>
    </>
  )
}
