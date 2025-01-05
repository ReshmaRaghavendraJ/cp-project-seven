import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Addcity()
 {
    // const location = useLocation();
    const[city,setCity]=useState('');
    const[citylist,setCitylist]=useState([]);
    const[hideform,setHideform]=useState(false);

    function addcity()     /* Add city */
    {
      const obj={city};
      axios
            .post("http://localhost:8080/addcity",obj)
            .then((res)=>{
                toast.success(res.data);
                setHideform(false);
                clearAll();
            })
            .catch((err)=>{
                toast.error(err.response.data);
            });
    }

    function clearAll()
    {
      setCity("");
    }

    function getallcity()    /* Display all city list */
    {
      axios
      .get("http://localhost:8080/getallcity")
      .then((res)=>{
        setCitylist(res.data);
        setHideform(true);
      })
      .catch((err)=>{
          toast.error(err.response.data);
      });
    }
    
  return (
    <>
    <Card className='addcityform'>
      <Card.Header><h1 style={{textAlign:"center",color:"black",fontFamily:"monospace",fontWeight:"bold"}}>Add City</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label><h5 style={{color:"black"}}>Enter City Name:</h5></Form.Label>
        <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
      </Form.Group>
      </Form>
      <div className='buttons'>
      <Button variant="success me-3" size="md" onClick={addcity}>
       Submit
      </Button>
      <Button variant="secondary me-3" size="md" onClick={clearAll}>
       Cancel
      </Button>
      <Button variant="warning me-3" size="md" onClick={getallcity}>
       Display
      </Button>
      </div>
        </Card.Text>
      </Card.Body>
    </Card>

    {hideform && (
    <Card className='displaycity'>
      <Card.Header as="h5"><h1 style={{fontFamily:"monospace",fontWeight:"bold",color:"black",textAlign:"center"}}>List of Cities:</h1></Card.Header>
      <Card.Body>
        <Card.Text>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>City id</th>
            <th>City Name</th>
          </tr>
        </thead>
        <tbody>
   {
    citylist.map((item,index)=>(
      <tr key={index}>
        <td>{item.cityid}</td>
        <td>{item.city}</td>
      </tr>
    ))
   }
        </tbody>
      </table>
        </Card.Text>
      </Card.Body>
    </Card>
    )}
    </>
  )
}
