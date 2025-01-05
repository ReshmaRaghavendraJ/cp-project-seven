import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

export default function Updateshoppswd() 
{
  const[password,setPassword]=useState('');
  const shop=sessionStorage.getItem('shopid');   // Get an item using session storage

  useEffect(()=>{
    getshopdetails();
  },[])

  function getshopdetails()  /*  Assign values for Update Operations */
  {
    axios
    .get(`http://localhost:8080/getshopdetails/${shop}`)
    .then((res)=>{
        setPassword(res.data.password); 
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  
  function updateshoppswd()         /* Update Shop Password Details */
  {
    const obj={password};
    axios
    .put(`http://localhost:8080/updateshoppswd/${shop}`,obj)
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

  return (
    <>
  <Card className="updateshoppswd">
      <Card.Header>  <h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Update Password:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Password:</h5></Form.Label>
        <Form.Control type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      </Form><br></br>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={updateshoppswd}>
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
