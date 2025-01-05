import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Updatedispswd() 
{
  const[password,setPassword]=useState('');
  const disid=sessionStorage.getItem('distriid'); //get an item of distributor id using session storage for update operation

  useEffect(()=>{
    getdistributors();
  },[])


  function getdistributors()   /* Assign value of Distribuotrs details for Update Operation */
  {
    axios
    .get(`http://localhost:8080/getdistributors/${disid}`)
    .then((res)=>{
        setPassword(res.data.password);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function updatedistripswd()
  {
    const obj={password};
    axios
    .put(`http://localhost:8080/updatedistripswd/${disid}`,obj)
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
   <Card className='updatedispswd'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Update Distributor Password</h1></Card.Header>
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
      <Button variant="success me-3" size="md" onClick={updatedistripswd}>
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
