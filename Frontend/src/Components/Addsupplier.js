import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

export default function Addsupplier() 
{
  const[selectedcity,setSelectedcity]=useState('');
  const[citylist,setCitylist]=useState([]);    //Dropdown list of city list
  const[name,setName]=useState('');
  const[address,setAddress]=useState('');
  const[emailid,setEmailid]=useState('');
  const[mobile,setMobile]=useState('');
  const[password,setPassword]=useState('');
  const[image,setImage]=useState('');
  const[selecteddistributor,setSelecteddistributor]=useState('');
  const[distributorlist,setDistributorlist]=useState([]);

  useEffect(()=>{
    getallcity();
  },[])


  useEffect(() => {
    if (selectedcity) {
        getdistributoroncity();
    }
}, [selectedcity]);

  function addsupplierdetails()
  {
    const obj={selectedcity,selecteddistributor,name,address,emailid,mobile,password,image};
    axios
          .post(`http://localhost:8080/addsupplierdetails/${selectedcity}/${selecteddistributor}`,obj)
          .then((res)=>{
              toast.success(res.data);
              clearAll();
          })
          .catch((err)=>{
              toast.error(err.response.data);
          });
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

  function getdistributoroncity()  /* Drop down list of Distributor id  based on city id*/
  {
    axios
      .get(`http://localhost:8080/getdistributoroncity/${selectedcity}`)
      .then((res)=>{
        setDistributorlist(res.data);
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
  setPassword("");
  setSelectedcity("");
  setSelecteddistributor("");
}

  return (
    <>
    <Card className="addsupplier">
      <Card.Header> <h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Add Supplier Details</h1></Card.Header>
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

    <label className='form-label'><h5 style={{color:"black"}}>Select Distributors:</h5></label>
    <select className='form-select' value={selecteddistributor} onChange={(e)=>setSelecteddistributor(e.target.value)}>
      <option value={0}>--Choose Options--</option>
      {
          distributorlist.map((item,index)=>(
            <option key={index} value={item.distributorid}>{item.distributorid}-{item.name}</option>
          ))
      }
    </select><br></br>
    
        <Form>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Supplier Name:</h5></Form.Label>
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
      <Button variant="success me-3" size="md" onClick={addsupplierdetails}>
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
