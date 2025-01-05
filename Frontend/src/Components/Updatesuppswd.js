import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function Updatesuppswd() 
{
  const[password,setPassword]=useState('');
  const supid=sessionStorage.getItem('supplierid');  //Get an item of session storage of supplierid

  useEffect(()=>{
    getsupplierdetails();
  },[])

  function updatesuppswd()   /* Update Supplier Password */
  {
    const obj={password};
    axios
    .put(`http://localhost:8080/updatesuppswd/${supid}`,obj)
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
    setPassword("");
  }

  function getsupplierdetails()   /* Assign values of Supplier Details for Update Operation */
  {
    axios
    .get(`http://localhost:8080/getsupplierdetails/${supid}`)
    .then((res)=>{
        setPassword(res.data.password);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  return (
    <>
   <Card className='updatesupppswd'>
      <Card.Header><h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Update Suppliers Password:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Password:</h5></Form.Label>
        <Form.Control type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={updatesuppswd}>
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
