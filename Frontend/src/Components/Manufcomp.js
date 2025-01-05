import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function Manufcomp()
 {
  const[manufcompanyname,setManufcompanyname]=useState();
  const[citylist,setCitylist]=useState([]);  //Dropdown list
  const[selectedcity,setSelectedcity]=useState('');
  const[manufcomplist,setManufcomplist]=useState([]); //Display list of medicine manufacturing company list
  const[hideform,setHideform]=useState(false);

  useEffect(()=>{
    getallcity();
  })
  
  function clearAll()
  {
    setManufcompanyname("");
    setSelectedcity("");
  }

  function getallcity()     /* Dropdown list of all city list */
  {
    axios
      .get("http://localhost:8080/getallcity")
      .then((res)=>{
        setCitylist(res.data);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  function addmanyfacturecompany()   /* add Medicine manufacturing company based on city */
  {
    const obj={selectedcity,manufcompanyname};
    axios
          .post(`http://localhost:8080/addmanyfacturecompany/${selectedcity}`,obj)
          .then((res)=>{
              toast.success(res.data);
              setHideform(false);
              clearAll();
          })
          .catch((err)=>{
              toast.error(err.response.data);
          });
  }

  function getmedicinecompany()
  {
    axios
      .get("http://localhost:8080/getmedicinecompany")
      .then((res)=>{
        setManufcomplist(res.data);
        setHideform(true);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
  }

  return (
    <>
     <Card className='manufcomp'>
      <Card.Header><h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Add Medicine Manufacturing Company</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <label className='form-label'><h5 style={{color:"black"}}>Select City:</h5></label>
    <select className='form-select' value={selectedcity} onChange={(e)=>setSelectedcity(e.target.value)} >
    <option value={0}>--Choose Options--</option>
    {
      citylist.map((item,index)=>(
        <option key={index} value={item.cityid}>{item.cityid}-{item.city}</option>
      ))
    }
    </select><br></br>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter Manufacturing Company Name:</h5></Form.Label>
        <Form.Control type="text" value={manufcompanyname} onChange={(e)=>setManufcompanyname(e.target.value)}/>
      </Form.Group>
      </Form>
        </Card.Text>
        <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={addmanyfacturecompany}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="warning me-3" size="md" onClick={getmedicinecompany}>
       Display
      </Button>
      </div>
      </Card.Body>
    </Card><br></br>


    {hideform && (
    <Card className='displaymanufcomp'>
      <Card.Header><h1  style={{color:"black",fontFamily:"monospace",fontWeight:"bold",textAlign:"center"}}>List of Manufacturing Companies</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
       <thead>
        <tr>
          <th>Manufacturing Company id</th>
          <th>Manufacturing Company Name</th>
          <th>City Name</th>
        </tr>
       </thead>
       <tbody>
        {
        manufcomplist.map((item,index)=>(
          <tr key={index}>
            <td>{item.manfucid}</td>
            <td>{item.manufcompanyname}</td>
            <td>{item.city1.city}</td>
          </tr>
        ))}
        </tbody>
      </table>
        </Card.Text>
      </Card.Body>
    </Card>
    )}
    </>
  )
}
