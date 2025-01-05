import React from 'react'
import Navbar from './Navbar';

export default function Contact() 
{

  return (
   <>
    <Navbar/>
    <div>
    <h1 style={{color:"white",textAlign:"center",marginTop:"-100px"}}>Medical Order Processing</h1>
    </div>

    <img src="https://media.istockphoto.com/id/1165451954/vector/caduceus.jpg?s=612x612&w=0&k=20&c=7yYfhCYQipajSuuVeDlTvrUSTYMErSfzIsxg_60mY-s=" alt="img1" style={{marginLeft:"1200px",width:"80px",marginTop:"-40px"}}/>
    <br></br><br></br>

    <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700405293.jpg" alt="picc" style={{marginTop:"-5px"}}/>
    <div className='info'>
      <h4>Information</h4>
      <ul>
        <li>Tablet</li>
        <li>Suspendion/Syrup</li>
        <li>Cream/Ointment</li>
        <li>Nasal Drops/Sprays</li>
        <li>Inhaler</li>
        <li>Injections</li>
        <li>Eye and Ear Drops</li>
        <li>Capsule</li>
        <li>Gel</li>
        <li>Infusion</li>
        <li>Lotion</li>
      </ul>
      </div>
      <div className='contact'>
      <h4>Address</h4>
    <p><img src="https://img.freepik.com/premium-vector/red-pin-location_1256222-948.jpg" alt="address" width="50px"/>  Front of IOB Bank, behind Bramarambha choutry, II stage, <br></br>Sriramapura, Madhuvana Layout, Mysuru, Karnataka 570023</p> <br></br>
    <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiemGjMhG0UQ97EwPKJuOHwqW1h6IEWK6lMRzPrKAJq3isM2O7g7orFAT64QUk8JOZc94&usqp=CAU" alt="telephone" width="30px"/>  +91 6546444644</p><br></br>
    <p><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="emailid"  width="30px"/>  medcalorder@gmail.com</p>
    <img src="https://the16vaccine.org/wp-content/uploads/2023/05/pharmacist-gives-bag-with-antibiotic-drugs-according-recipe-hands-patient-pharmacy-vector-concept_53562-7866-1200x900-1.jpg" alt="pharmacy" style={{marginLeft:"500px",width:"300px",border:"1px solid black",borderRadius:"50%",marginTop:"-330px"}}/>
    </div>
    </>
  )
}


