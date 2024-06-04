// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MultiStepForm from './MultiStepForm';
import AboutUs from './AboutUs';
import HomePage from './HomePage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/create-home" element={<MultiStepForm />} />
            </Routes>
        </Router>
    );
};

export default App;
