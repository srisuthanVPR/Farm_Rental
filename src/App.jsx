import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Siign from './Pages/Siign';
import Siignup from './Pages/Siignup';
import Admin from './Pages/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ManageEquipment from './Pages/Admin/ManageEquipment';
import ManageUsers from './Pages/Admin/ManageUsers';
import UserDaashboard from './Pages/User/UserDaashboard';
import Addequipment from './Pages/Addequipment';
import Myequipment from './Pages/Myequipment';
import Rentalrequest from './Pages/Rentalrequest';
import 'antd/dist/reset.css';
const App = () => {
  return (
    <Router>
      <Header />
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/siign' element={<Siign />} />
        <Route path='/siignup' element={<Siignup />} />  
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/manage-equipment' element={<ManageEquipment />} />
        <Route path='/admin/manage-users' element={<ManageUsers />} />
        <Route path='/user/dashboard' element={<UserDaashboard />} />
        <Route path='/add-equipment' element={<Addequipment />} />
        <Route path='/my-equipment' element={<Myequipment />} />
        <Route path='/rental-requests' element={<Rentalrequest />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
