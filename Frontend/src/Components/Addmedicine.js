import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

export default function Addmedicine() 
{
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[form,setForm]=useState('');
    const[manufaclist,setManufaclist]=useState([]);  //Drop down list of all Manufacturing companyid
    const[selectedcompany,setSelectedCompany]=useState('');
    const disid=sessionStorage.getItem('distriid');

    useEffect(()=>{
        getmedicinecompany();
      },[])

      function clearAll()
      {
        setName("");
        setPrice("");
        setSelectedCompany("");
      }

      
  function getmedicinecompany()   /* Display all Manufacturing company id */
  {
    axios
    .get("http://localhost:8080/getmedicinecompany")
    .then((res)=>{
        setManufaclist(res.data); 
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function addmedicines()       /* Add Medicines based on manufacture companyid */
  {
      const obj={selectedcompany,name,price,form};
    axios
    .post(`http://localhost:8080/addmedicines/${selectedcompany}/${disid}`,obj)
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
    <Card className='addmedicine'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Add Medicine Details:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <label className='form-label'><h5 style={{color:"black"}}>Select Manufacturing Companyid:</h5></label>
      <select className='form-select' value={selectedcompany} onChange={(e)=>setSelectedCompany(e.target.value)}>
        <option value={0}>--Choose Options--</option>
        {
          manufaclist.map((item,index)=>(
            <option key={index} value={item.manfucid}>{item.manfucid}-{item.manufcompanyname}</option>
          ))
        }
      </select><br></br>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Medicine Name:</h5></Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Price:</h5></Form.Label>
        <Form.Control type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Form:</h5></Form.Label>
        <Form.Control type="text" value={form} onChange={(e)=>setForm(e.target.value)} />
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={addmedicines}>
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
