// AboutUs.js in React

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Import Header component

const AboutUs = () => {
    const [aboutData, setAboutData] = useState({});

    useEffect(() => {
        axios.get('/api/about-us/')
            .then(response => {
                setAboutData(response.data);
            })
            .catch(error => {
                console.error('Error fetching about us data:', error);
            });
    }, []);

    return (
        <div>
            <Header /> {/* Render the Header component */}
            <div className="container"> {/* Display fetched data */}
                <h1>{aboutData.title}</h1>
                <p>{aboutData.description}</p>
            </div>
        </div>
    );
};

export default AboutUs;
