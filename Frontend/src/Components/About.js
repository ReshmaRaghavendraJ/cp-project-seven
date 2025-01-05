import React from 'react'
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';



export default function About() 
{
  return (
    <>
    <Navbar/>

    <div>
    <h1 style={{color:"white",textAlign:"center",marginTop:"-100px"}}>Medical Order Processing</h1>
    </div>

    <img src="https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s=" alt="img1" style={{marginLeft:"1200px",width:"80px",marginTop:"-40px"}}/>
    <br></br><br></br>

<div className='backgrd'>
<img src="https://static.vecteezy.com/system/resources/previews/016/774/414/non_2x/heart-rate-pulse-on-transparent-background-free-png.png" alt="heart-icon" style={{width:"100px",marginLeft:"500px"}}/>
   
    <Card style={{ width: "400px" ,height:"200px",marginLeft:"100px",backgroundColor:"lightgray",border:"5px dotted black"}}>
      <Card.Body>
        <Card.Title>Shop</Card.Title>
        <Card.Text>
        A Retail store where medicines and miscellaneous articles (as food, cosmetics, and film) are sold. called also pharmacy.
        </Card.Text>
      </Card.Body>
    </Card>
    <img style={{width:"70px",marginLeft:"1020px",marginTop:"-200px"}} src="https://i.pinimg.com/originals/c5/79/74/c579747cc72e3c378a63aad92cdbeb2e.png" alt="img2"/>

    <Card style={{ width: "400px" ,height:"200px",marginLeft:"300px",marginTop:"-80px",backgroundColor:"black",color:"white",border:"5px dotted white"}}>
      <Card.Body>
        <Card.Title>Supplier</Card.Title>
        <Card.Text>
        Drug Supplier means a licensed retail pharmacy which supplies legend drugs to licensed prescribers for their office administration and/or which supplies legend drugs
         to hospitals and other licensed pharmacies for their dispensing.
        </Card.Text>
      </Card.Body>
    </Card>
    <img style={{width:"70px",height:"30px",marginLeft:"200px",marginTop:"-100px"}} src="https://i0.wp.com/www.processmodel.com/wp-content/uploads/2014/11/306-single-pill.png?fit=672%2C372&ssl=1" alt="img3"/>

    <Card style={{ width: "400px" ,height:"200px",marginLeft:"620px",marginTop:"-400px",backgroundColor:"lightgray",border:"5px dotted black"}}>
      <Card.Body>
        <Card.Title>Distributor</Card.Title>
        <Card.Text>
        Pharmaceutical distributors are the intermediary that ships products from manufacturers to pharmacies and other providers. In addition to hospital and chain pharmacies, more than 22,000 independent pharmacies
         rely on their services on a daily basis.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: "400px" ,height:"200px",marginLeft:"900px",marginTop:"-20px",backgroundColor:"black",color:"white",border:"5px dotted white"}}>
      <Card.Body>
        <Card.Title>Medicine Manufacturer</Card.Title>
        <Card.Text>
        Our company is entirely dedicated to the R&D, production, supply, and trading of pharmaceutical formulations in the shape of tablets, capsules, powders, 
        injectables, and oral solutions, among other solid and liquid forms. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
