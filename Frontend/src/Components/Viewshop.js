import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Viewshop() 
{
  const[shoplist,setShoplist]=useState([]);   //Display all shop details 

  useEffect(()=>{
    getallshops();
  },[])

  function getallshops()   /* Display All Shop Details */
  {
    axios
    .get("http://localhost:8080/getallshops")
    .then((res)=>{
      setShoplist(res.data);
      debugger;
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  return (
    <>
    <Card className='displayshop'>
      <Card.Header> <h1 style={{marginLeft:"500px",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Shops Details :</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Shop id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobileno</th>
            <th>Emailid</th>
            <th>Password</th>
            <th>Image</th>
            <th>Status</th>
            <th>Location</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
   {
    shoplist.map((item,index)=>(
      <tr key={index}>
        <td>{item.shopid}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.mobileno}</td>
        <td>{item.emailid}</td>
        <td>{item.password}</td>
        <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
        <td>{item.status}</td>
        <td>
          <a href={item.location} target="_blank"  rel="noopener noreferrer"> 
          <img src="https://media.istockphoto.com/id/1493681761/vector/orange-colored-map-location-pin.jpg?s=612x612&w=0&k=20&c=pzksh7tO6k6mXns2YUUuDxA6cVFfE1mQPoNHqSHPbfI=" alt="map" style={{ width: '50px' }} />
          </a>
          </td>
        <td>{item.city4?.city}</td>
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
