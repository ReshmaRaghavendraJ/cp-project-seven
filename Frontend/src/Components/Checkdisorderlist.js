import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default function Checkdisorderlist()
 {
  const[supplyorderlist,setSupplyorderlist]=useState([]);  // Display supply order list
  const disid=sessionStorage.getItem('distriid');
  const [approvedOrders, setApprovedOrders] = useState([]);  //whichever medicines are approved 
  const [suppliedOrders, setSuppliedOrders] = useState([]);  //whichever medicines are supplied


useEffect(()=>{
  const storedApprovedOrders = JSON.parse(localStorage.getItem('approvedOrders')) || [];
  const storedSuppliedOrders = JSON.parse(localStorage.getItem('suppliedOrders')) || [];
  setApprovedOrders(storedApprovedOrders);
  setSuppliedOrders(storedSuppliedOrders);
  getsupplyorders();
},[])

 function getsupplyorders()  /* Display all particular supply order details of particular distributorid */
 {
  axios
  .get(`http://localhost:8080/getsupplyorders/${disid}`)
  .then((res)=>{
    setSupplyorderlist(res.data);
  })
  .catch((err)=>{
      toast.error(err.response.data);
  });
 }

 function updatesupplyorderstatus(supplyorderid)   /* Update status after book medicine from supplyorder to Distributors */
  {
    axios
    .put(`http://localhost:8080/updatesupplyorderstatus/${supplyorderid}`)
    .then((res)=>{
      toast.success(res.data);
      const newApprovedOrders = [...approvedOrders, supplyorderid];
      setApprovedOrders(newApprovedOrders);
      localStorage.setItem('approvedOrders', JSON.stringify(newApprovedOrders)); 
        getsupplyorders(); // Refresh order list
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }

  function updatesupliedstatus(supplyorderid)   /* Update status of supplyorder  to "supplied" */
  {
    axios
    .put(`http://localhost:8080/updatesupliedstatus/${supplyorderid}`)
    .then((res)=>{
      toast.success(res.data);
      const newSuppliedOrders = [...suppliedOrders, supplyorderid];
      setSuppliedOrders(newSuppliedOrders);
      localStorage.setItem('suppliedOrders', JSON.stringify(newSuppliedOrders));
        getsupplyorders(); // Refresh order list
    })
    .catch((err)=>{
        toast.error(err.response.data);
    });
  }


  return (
    <>
    <div className='supplyorderdetails'>
      <h1 style={{color:"black",textAlign:"center",fontFamily:"monospace",fontWeight:"bold"}}>Check Orderlist & Approve</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Supplyorderid</th>
            <th>Medicine Name</th>
            <th>Orderdate</th>
            <th>Quantity</th>
            <th>Status</th> 
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            supplyorderlist.map((item,index)=>(
              <tr key={index}>
                <td>{item.supplyorderid}</td>
                <td>{item.medicine13.name}</td>
                <td>{item.orderdate}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td> 
                {!approvedOrders.includes(item.supplyorderid) && !suppliedOrders.includes(item.supplyorderid) ? (
                  <Button variant="success me-3" size="md" onClick={()=>updatesupplyorderstatus(item.supplyorderid)}>
                   Approve
                   </Button>
                ): suppliedOrders.includes(item.supplyorderid) ? null : (
                  <Button variant="success me-3" size="md" onClick={()=>updatesupliedstatus(item.supplyorderid)}>Supplied</Button>
                )}
                   </td>
              </tr>
            ))  
          }
        </tbody>
        </table><br></br>
    </div>
    </>
  )
}
