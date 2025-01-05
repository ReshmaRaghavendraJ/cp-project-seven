import React, { useState ,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function Viewsupplier() 
{
  const[supplierslist,setSupplierslist]=useState([]);   //Display list of suppliers

  useEffect(()=>{
    getallsuppliers();
  },[])
  

  function getallsuppliers()   /* Display all Distributors details */
  {
    axios
      .get("http://localhost:8080/getallsuppliers")
      .then((res)=>{
        setSupplierslist(res.data);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }


  return (
    <> 
  <Card className='displaysuppliers'>
      <Card.Header> <h1 style={{color:"black",marginLeft:"450px",fontFamily:"monospace",fontWeight:"bold"}}>List of Suppliers:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
        <tr>
            <th>Suppliers id</th>
            <th>Suppliers Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Emailid</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
   {
    supplierslist.map((item,index)=>(
      <tr key={index}>
        <td>{item.supplierid}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.mobile}</td>
        <td>{item.emailid}</td>
        <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
      </tr>
    ))
   }
        </tbody>
      </table>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
