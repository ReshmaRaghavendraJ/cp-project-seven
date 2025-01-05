import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function Booksupmedicines()
 {
    const[quantity,setQuantity]=useState('');
    const[medicinelist,setMedicinelist]=useState([]);
    const[selectedMedicine,setSelectedMedicine]=useState('');
    const supid=sessionStorage.getItem('supplierid');
    const[distrilist,setDistributorlist]=useState([]);
    const[selectedDistributors,setSelectedDistributors]=useState('');

    useEffect(()=>{
        getallmedicines();
        getalldistributors();
    },[])

    function booksupordermedicine()  /* Book medicines from supplyorder to distributors large amount - Booksupmedicines */
    {
    const obj={selectedMedicine,selectedDistributors,supid,quantity};
    axios
    .post(`http://localhost:8080/booksupordermedicine/${selectedMedicine}/${selectedDistributors}/${supid}`,obj)
    .then((res)=>{
      toast.success(res.data); 
      clearAll();
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
    }

    function getallmedicines()   /* Drop down list of Medicines */
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

    function getalldistributors()   /* Dropdown list of  all Distributors */
    {
      axios
    .get("http://localhost:8080/getalldistributors")
    .then((res)=>{
      setDistributorlist(res.data); 
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
    }

    function clearAll()
    {
        setQuantity("");
        setSelectedMedicine("");
        setSelectedDistributors("");
    }

  return (
    <>
    <Card className='booksupordermedicine'>
      <Card.Header><h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Book Medicines:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label'><h5 style={{color:"black"}}>Select Medicines:</h5></label>
    <select className='form-select' value={selectedMedicine} onChange={(e)=>setSelectedMedicine(e.target.value)}>
        <option value={0}>--Choose Options--</option>
        {
            medicinelist.map((item,index)=>(
                <option key={index} value={item.medicineid}>{item.medicineid}-{item.name}</option>
            ))
        }
    </select><br></br>


    <label className='form-label'><h5 style={{color:"black"}}>Select Distributors:</h5></label>
    <select className='form-select' value={selectedDistributors} onChange={(e)=>setSelectedDistributors(e.target.value)}>
        <option value={0}>--Choose Options--</option>
        {
            distrilist.map((item,index)=>(
                <option key={index} value={item.distributorid}>{item.distributorid}-{item.name}</option>
            ))
        }
    </select><br></br>
    <Form>
      <Form.Group  className="mb-3">
        <Form.Label><h5 style={{color:"black"}}>Enter Quantity:</h5></Form.Label>
        <Form.Control type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
      </Form.Group>
      </Form><br></br>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={booksupordermedicine}>
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
