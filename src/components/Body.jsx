import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import Home from "./Home/Body.jsx";
import Register from "./Register/Body.jsx";
import Login from "./Login/Body.jsx";
import Dashboard from "./Dashboard/Body.jsx";
import Property_Listings from "./Property Listings/Body.jsx";
import Property_Detail from "./Property Detail/Body.jsx";
import Contact from "./Contact/Body.jsx";

const Body = () => {
return (
  <Router>
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property listings" element={<Property_Listings />} />
        <Route path="/property detail" element={<Property_Detail />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
);
};

export default Body;