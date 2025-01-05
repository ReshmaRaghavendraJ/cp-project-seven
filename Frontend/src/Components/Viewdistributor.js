import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Viewdistributor()
 {
  const[distributorlist,setDistributorlist]=useState([]);

  useEffect(()=>{
    getalldistributors();
  },[])


  function getalldistributors()   /* Display all Distributors details */
  {
    axios
      .get("http://localhost:8080/getalldistributors")
      .then((res)=>{
        setDistributorlist(res.data);
        debugger;
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }


  return (
    <>
     <Card className='displaydistributor'>
      <Card.Header>   <h1 style={{color:"black",marginLeft:"450px",fontFamily:"monospace",fontWeight:"bold"}}>List of Distributors:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
        <tr>
            <th>Distributor id</th>
            <th>Distributor Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Emailid</th>
            <th>Image</th>
            <th>City</th>
            <th>Supplier Name</th>
          </tr>
        </thead>
        <tbody>
   {
    distributorlist.map((item,index)=>(
      <tr key={index}>
        <td>{item.distributorid}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.mobile}</td>
        <td>{item.emailid}</td>
        <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
        <td>{item.city2?.city}</td>
        <td>{item.supplier14?.name}</td>
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
