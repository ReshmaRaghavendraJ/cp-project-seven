import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Updatedisprofile()
 {
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[emailid,setEmailid]=useState('');
  const[mobile,setMobile]=useState('');
  const[image,setImage]=useState('');
  const disid=sessionStorage.getItem('distriid'); //get an item of distributor id using session storage for update operation

  useEffect(()=>{
    getdistributors();
  },[])

  function getdistributors()   /* Assign values of Distribuotrs details for Update Operation */
  {
    axios
    .get(`http://localhost:8080/getdistributors/${disid}`)
    .then((res)=>{
        setAddress(res.data.address);
        setEmailid(res.data.emailid);
        setImage(res.data.image);
        setMobile(res.data.mobile);
        setName(res.data.name);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function updatedisprofile()
  {
    const obj={name,address,emailid,image,mobile};
    axios
    .put(`http://localhost:8080/updatedisprofile/${disid}`,obj)
    .then((res)=>{
        toast.success(res.data);
        clearAll();
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
    <Card className='updatedisprofile'>
      <Card.Header><h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Update Distributor Profile</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Name:</h5></Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Address:</h5></Form.Label>
        <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Image:</h5></Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Mbile no:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={updatedisprofile}>
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
