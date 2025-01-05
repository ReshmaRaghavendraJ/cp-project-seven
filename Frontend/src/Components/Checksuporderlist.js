import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function Checksuporderlist()
 {
  const suplid=sessionStorage.getItem('supplierid');
  const[shoporderlist,setShoporderlist]=useState([]);
  const [approvedOrders, setApprovedOrders] = useState([]);  //whichever medicines are approved 
  const [suppliedOrders, setSuppliedOrders] = useState([]);  //whichever medicines are supplied


  useEffect(()=>{
    const storedApprovedOrders = JSON.parse(localStorage.getItem('approvedOrders')) || [];
    const storedSuppliedOrders = JSON.parse(localStorage.getItem('suppliedOrders')) || [];
    setApprovedOrders(storedApprovedOrders);
    setSuppliedOrders(storedSuppliedOrders);
    getshoporders();
  },[])

  function getshoporders()  /* Display  Shoporder details of particular supplierid */
  {
    axios
    .get(`http://localhost:8080/getshoporders/${suplid}`)
    .then((res)=>{
      setShoporderlist(res.data);
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  function updateshoporderstatus(shpordrid)  /* Update status after book medicine from shoporder to supplier */
  {
    axios
    .put(`http://localhost:8080/updateshoporderstatus/${shpordrid}`)
    .then((res)=>{
      toast.success(res.data);
      const newApprovedOrders = [...approvedOrders, shpordrid];
      setApprovedOrders(newApprovedOrders);
      localStorage.setItem('approvedOrders', JSON.stringify(newApprovedOrders)); 
        getshoporders(); // Refresh order list
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function updatesupplied(shoporderid)   /* Update status of shoporder to "supplied" */
  {
    axios
    .put(`http://localhost:8080/updatesupplied/${shoporderid}`)
    .then((res)=>{
      toast.success(res.data);
      const newSuppliedOrders = [...suppliedOrders, shoporderid];
      setSuppliedOrders(newSuppliedOrders);
      localStorage.setItem('suppliedOrders', JSON.stringify(newSuppliedOrders));
        getshoporders(); // Refresh order list
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  return (
    <>
     <Card className='supplyorderdetails'>
      <Card.Header> <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Check Orderlist & Approve</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Shporderid</th>
            <th>Medicine Name</th>
            <th>Orderdate</th>
            <th>Quantity</th>
            <th>Status</th> 
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            shoporderlist.map((item,index)=>(
              <tr key={index}>
                <td>{item.shoporderid}</td>
                <td>{item.medicine6.name}</td>
                <td>{item.orderdate}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td> 
                {!approvedOrders.includes(item.shoporderid) && !suppliedOrders.includes(item.shoporderid) ? (
                  <Button variant="success me-3" size="md"  onClick={()=>updateshoporderstatus(item.shoporderid)}>
                   Approve
                   </Button>
                ): suppliedOrders.includes(item.shoporderid) ? null : (
                <Button variant="success me-3" size="md" onClick={()=>updatesupplied(item.shoporderid)}>Supplied</Button>
                )}
                   </td>
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
