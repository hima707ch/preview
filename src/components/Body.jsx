import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx";
import Footer from "./Global/Footer.jsx";
import HomePage from "./HomePage/Body.jsx";

const Body = () => {
return (
    <Header />
      <Router>
        <Routes>
            <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    <Footer />
);
};

export default Body;