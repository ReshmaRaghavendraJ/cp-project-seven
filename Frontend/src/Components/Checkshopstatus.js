import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Checkshopstatus() 
{
  const shpid=sessionStorage.getItem('shopid');
  const[shoporderlist,setShporderlist]=useState([]);  //Display list of Shoporder status

  useEffect(()=>{
      displayshopstatus();
  },[])


  function displayshopstatus()   /* Display status of Shoporder */
  {
    axios
    .get(`http://localhost:8080/displayshopstatus/${shpid}`)
    .then((res)=>{
      setShporderlist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  return (
    <>
    <Card className='displayshopstatus'>
      <Card.Header><h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>View Status:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
      <thead>
        <tr>
          <th>Shoporderid</th>
          <th>Medicine Name</th>
          <th>Shop Name</th>
          <th>Orderdate</th>
          <th>Quantity</th>
          <th>status</th>
          <th>Supplier Name</th>
        </tr>
      </thead>
      <tbody>
     {
       shoporderlist.map((item,index)=>(
        <tr key={index}>
          <td>{item.shoporderid}</td>
          <td>{item.medicine6?.name}</td>
          <td>{item.shop6?.name}</td>
          <td>{item.orderdate}</td>
          <td>{item.quantity}</td>
          <td>{item.status}</td>
          <td>{item.supplier8?.name}</td>
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
