import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="mb-4 banner-text-style">
                <span className="me-3 word-wrap welcome-text-banner">WELCOME</span>
                <span className="tour-text-banner word-wrap">Tour</span>
                <span className="line-text-banner word-wrap">Line</span>
                <span className="trip-text-banner word-wrap">Trip</span>
            </h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;