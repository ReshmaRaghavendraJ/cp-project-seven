import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Checksupstatus() 
{
    const[supplyorderlist,setSupplyorderlist]=useState([]);  //Display list of supply order details
    const supid=sessionStorage.getItem('supplierid');

    useEffect(()=>{
        displaysupplystatus();
    },[])

    function displaysupplystatus()   /* Display Supplyorder status */
    {
    axios
    .get(`http://localhost:8080/displaysupplystatus/${supid}`)
    .then((res)=>{
      setSupplyorderlist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
    }

  return (
    <>
     <Card className='displaysupplystatus'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>View Status:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
      <thead>
        <tr>
          <th>Supplyorderid</th>
          <th>Medicine Name</th>
          <th>Orderdate</th>
          <th>Quantity</th>
          <th>status</th>
          <th>Supplier Name</th>
        </tr>
      </thead>
      <tbody>
     {
       supplyorderlist.map((item,index)=>(
        <tr key={index}>
          <td>{item.supplyorderid}</td>
          <td>{item.medicine13?.name}</td>
          <td>{item.orderdate}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
          <td>{item.supplier18?.name}</td>
        </tr>
       ))
     }
      </tbody>
    </table><br></br>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
