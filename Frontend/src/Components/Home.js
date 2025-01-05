import React from 'react'
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';


export default function Home()
 {
  return (
    <>
     <Navbar/>

    <div>
    <h1 style={{color:"white",textAlign:"center",marginTop:"-100px"}}>Medical Order Processing</h1>
    </div>

    <img src="https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s=" alt="img1" style={{marginLeft:"1200px",width:"80px",marginTop:"-40px"}}/>
    <br></br><br></br>
    
    <div className='carosel'><br></br>
    <Carousel data-bs-theme="dark"> 
      <Carousel.Item>
          <img
          className="d-block w-200" style={{height:"450px",marginLeft:"150px",width:"1050px"}}
          src="https://t3.ftcdn.net/jpg/07/70/35/10/360_F_770351061_58lpypQiYyr0mqBsXCCUjMIokW1pXvLd.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <img
          className="d-block w-200" style={{height:"450px",marginLeft:"150px",width:"1050px"}}
          src="https://t4.ftcdn.net/jpg/07/70/80/29/360_F_770802901_oPfdxFWUiS7ydaSZ2nsBEWLrsItZ9JV1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
          <img
          className="d-block w-200" style={{height:"450px",marginLeft:"150px",width:"1050px"}}
          src="https://media.istockphoto.com/id/156347267/photo/prescription.webp?a=1&s=612x612&w=0&k=20&c=8AzrGsiDF9wy78N-Ga0u7f5m_2wH37lWDRs9RelxOQ8="
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel><br></br><br></br>

    <Card style={{ width: "300px",height:"400px",marginLeft:"50px"}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGljaW5lfGVufDB8fDB8fHww" height="150px"/>
      <Card.Body style={{backgroundColor:"lightgray"}}>
        <Card.Title style={{color:"blue",fontStyle:"italic",textAlign:"center"}}>Tablets</Card.Title>
        <Card.Text>
        Tablets are prepared either by moulding or by compression. The excipients can include diluents, 
        binders or granulating agents, glidants (flow aids) and lubricants to ensure efficient tabletting
        </Card.Text>
      </Card.Body>
    </Card><br></br>

    <Card style={{ width: "300px",height:"400px",marginLeft:"380px",marginTop:"-425px"}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/125930642/photo/medical-series-injection.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Bq8ymbusLIKF-RALjOgCmG7v8Kcq-2d5qXY3DZMpO4=" height="150px"/>
      <Card.Body style={{backgroundColor:"lightgray"}}>
        <Card.Title style={{color:"Green",fontStyle:"italic",textAlign:"center"}}>Injections</Card.Title>
        <Card.Text>
        An injection is the act of administering a liquid, especially a drug, into a
         person's body using a needle and a syringe. An injection is considered a form 
         of parenteral drug administration
        </Card.Text>
      </Card.Body>
    </Card><br></br>

    <Card style={{ width: "300px",height:"400px",marginLeft:"700px",marginTop:"-425px"}}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/woman-squeezing-out-ointment-tube-600nw-2284017421.jpg" height="150px"/>
      <Card.Body style={{backgroundColor:"lightgray"}}>
        <Card.Title style={{color:"yellow",fontStyle:"italic",textAlign:"center"}}>Ointments</Card.Title>
        <Card.Text>
        Semisolid dosage forms include ointments and creams. Ointments are preparations for 
        external use, intended for application to the skin. Typically, they have an oily or 
        greasy consistency and can appear “stiff” as they are applied to the skin. 
        </Card.Text>
      </Card.Body>
    </Card><br></br>

    <Card style={{ width: "300px",height:"400px",marginLeft:"1020px",marginTop:"-425px"}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1217537333/photo/close-up-view-of-human-hand-and-antiseptic-spray-bottle-on-dark-background-sanitation-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=85eQe0czVKUkzCOpJdZ1j61-psbsYRJt1uFUu9vTkUo=" height="150px" />
      <Card.Body style={{backgroundColor:"lightgray"}}>
        <Card.Title style={{color:"purple",fontStyle:"italic",textAlign:"center"}}>Sprays</Card.Title>
        <Card.Text>
        Medicine sprays are a liquid or solid formulation that is converted into a mist or 
        spray that can be inhaled or sprayed into the nose. The mist or spray can be used 
        to deliver medicine locally or systemically.
        </Card.Text>
      </Card.Body>
    </Card><br></br>

    </div>
    </>
  )
}
