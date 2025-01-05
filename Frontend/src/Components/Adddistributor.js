import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

export default function Adddistributor() 
{
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[emailid,setEmailid]=useState('');
  const[mobile,setMobile]=useState('');
  const[password,setPassword]=useState('');
  const[image,setImage]=useState('');
  const[selectedcity,setSelectedcity]=useState('');
  const[citylist,setCitylist]=useState([]);    //Dropdown list of city list

function clearAll()
{
  setAddress("");
  setEmailid("");
  setImage("");
  setMobile("");
  setName("");
  setPassword("");
  setSelectedcity("");
}


useEffect(()=>{
  getallcity();
})

function getallcity()     /* Dropdown list of all city list */
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

function adddistributordetails()   /* Add Distributor details */
{
  const obj={selectedcity,name,address,emailid,mobile,password,image};
    axios
          .post(`http://localhost:8080/adddistributordetails/${selectedcity}`,obj)
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
  <Card className='adddistributor'>
      <Card.Header><h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Add Distributor Details</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label'><h5 style={{color:"black"}}>Select City:</h5></label>
    <select className='form-select' value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)}>
      <option value={0}>--Choose Options--</option>
      {
          citylist.map((item,index)=>(
            <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
          ))
      }
    </select><br></br>
    <Form>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Distributor Name:</h5></Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Address:</h5></Form.Label>
        <Form.Control type="textarea" value={address} style={{height:"100px"}} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Emailid:</h5></Form.Label>
        <Form.Control type="text" value={emailid} onChange={(e)=>setEmailid(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Mobileno:</h5></Form.Label>
        <Form.Control type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Password:</h5></Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Upload image:</h5></Form.Label>
        <Form.Control type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
    </Form><br></br>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={adddistributordetails}>
       Submit
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
