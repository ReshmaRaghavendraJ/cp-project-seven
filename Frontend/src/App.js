import React from 'react'
import Home from './Components/Home'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Contact from './Components/Contact';
import About from './Components/About'
import Login from './Components/Login'
import Register from './Components/Register'
import Admindashboard from './Components/Admindashboard'
import 'react-toastify/dist/ReactToastify.css';
import Addcity from './Components/Addcity';
import Manufcomp from './Components/Manufcomp';
import Adddistributor from './Components/Adddistributor';
import Addsupplier from './Components/Addsupplier';
import Viewshop from './Components/Viewshop';
import Viewdistributor from './Components/Viewdistributor';
import Viewsupplier from './Components/Viewsupplier';
import Shopdashboard from './Components/Shopdashboard'; 
import Updateshopprofile from './Components/Updateshopprofile';
import Updateshoppswd from './Components/Updateshoppswd';
import Bookmedicines from './Components/Bookmedicines';
import Checkshopstatus from './Components/Checkshopstatus';
import Distributordashboard from './Components/Distributordashboard';
import Updatedisprofile from './Components/Updatedisprofile';
import Updatedispswd from './Components/Updatedispswd';
import Checkdisorderlist from  './Components/Checkdisorderlist';
import Supplierdashboard from './Components/Supplierdashboard';
import Updatesupprofile from './Components/Updatesupprofile';
import Updatesuppswd from './Components/Updatesuppswd';
import Checksuporderlist from './Components/Checksuporderlist';
import Addmedicine from './Components/Addmedicine';
import Booksupmedicines from './Components/Booksupmedicines';
import Checksupstatus from './Components/Checksupstatus';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>

       <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>

      
      <Route path="Admindashboard" element={<Admindashboard/>}>
      <Route path="Addcity" element={<Addcity/>}/>
      <Route path="Manufcomp" element={<Manufcomp/>}/>
        <Route path="Adddistributor" element={<Adddistributor/>}/>
        <Route path="Addsupplier" element={<Addsupplier/>}/>
        <Route path="Viewshop" element={<Viewshop/>}/>
        <Route path="Viewdistributor" element={<Viewdistributor/>}/>
        <Route path="Viewsupplier" element={<Viewsupplier/>}/>
      </Route>

      <Route path="Shopdashboard" element={<Shopdashboard/>}>
      <Route path="Updateshopprofile" element={<Updateshopprofile/>}/>
        <Route path="Updateshoppswd" element={<Updateshoppswd/>}/>
        <Route path="Bookmedicines" element={<Bookmedicines/>}/>
        <Route path="Checkshopstatus" element={<Checkshopstatus/>}/>
      </Route>

      <Route path="Distributordashboard" element={<Distributordashboard/>}>
      <Route path="Updatedisprofile" element={<Updatedisprofile/>}/>
        <Route path="Updatedispswd" element={<Updatedispswd/>}/>
        <Route path="Checkdisorderlist" element={<Checkdisorderlist/>}/>
        <Route path="Addmedicine" element={<Addmedicine/>}/>
      </Route>

      <Route path="Supplierdashboard" element={<Supplierdashboard/>}>
      <Route path="Updatesupprofile" element={<Updatesupprofile/>}/>
        <Route path="Updatesuppswd" element={<Updatesuppswd/>}/>
        <Route path="Checksuporderlist" element={<Checksuporderlist/>}/>
        <Route path="Booksupmedicines" element={<Booksupmedicines/>}/>
        <Route path="Checksupstatus" element={<Checksupstatus/>}/>
      </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}
