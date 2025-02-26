import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import HomePage from "./HomePage/Body.jsx";

    const Body = () => {
    return (
        <Router>
        <Routes>
            <Route path="/homepage" element={<HomePage />} />
        </Routes>
        </Router>
    );
    };

    export default Body;