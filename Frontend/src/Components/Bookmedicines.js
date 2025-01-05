import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default function Bookmedicines()
 {
  const[medicinelist,setMedicinelist]=useState([]);  //Drop down list of all Medicineid
  const[selectedmedicine,setSelectedMedicine]=useState('');
  const[quantity,setQuantity]=useState('');
  const shpid=sessionStorage.getItem('shopid');
  const[supplierlist,setSupplierlist]=useState([]);  //Drop down list of Supplier list
  const[selectedsupplier,setSelectedsupplier]=useState('');


  useEffect(()=>{
    getallmedicines();
    getallsuppliers();
  },[])


  function getallmedicines()   /* Dropdown all Medicine */
  {
    axios
    .get("http://localhost:8080/getallmedicines")
    .then((res)=>{
      setMedicinelist(res.data); 
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function getallsuppliers()  /* Dropdown list of Supplier list */
  {
    axios
    .get("http://localhost:8080/getallsuppliers")
    .then((res)=>{
      setSupplierlist(res.data); 
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function bookmedicines()
  {
    const obj={selectedmedicine,selectedsupplier,shpid,quantity};
    axios
    .post(`http://localhost:8080/bookmedicines/${selectedmedicine}/${selectedsupplier}/${shpid}`,obj)
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
    setQuantity("");
    setSelectedMedicine("");
    setSelectedsupplier("");
  }

  return (
    <>
     <Card className='bookmedicine'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Book Medicines:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <label className='form-label'><h5 style={{color:"black"}}>Select Medicine:</h5></label>
      <select className='form-select' value={selectedmedicine} onChange={(e)=>setSelectedMedicine(e.target.value)}>
        <option value={0}>--Choose Options--</option>
        {
          medicinelist.map((item)=>(
            <option key={item.medicineid} value={item.medicineid}>{item.medicineid}-{item.name}</option>
          ))
        }
      </select><br></br>

      <label className='form-label'><h5 style={{color:"black"}}>Select Supplier:</h5></label>
      <select className='form-select' value={selectedsupplier} onChange={(e)=>setSelectedsupplier(e.target.value)}>
        <option value={0}>--Choose Options--</option>
        {
          supplierlist && supplierlist.map((item)=>(
            <option key={item.supplierid} value={item.supplierid}>{item.supplierid}-{item.name}</option>
          ))
        }
      </select><br></br>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Medicine Quantity:</h5></Form.Label>
        <Form.Control type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      </Form.Group>
      </Form><br></br>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={bookmedicines}>
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
