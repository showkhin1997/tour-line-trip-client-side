import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers/Offers';
import Services from '../Services/Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="banner-text-style">
                <h1 className="banner-text">
                    <span className="me-3 word-wrap welcome-text-banner">WELCOME</span>
                    <span className="tour-text-banner word-wrap">Tour</span>
                    <span className="line-text-banner word-wrap">Line</span>
                    <span className="trip-text-banner word-wrap">Trip</span>
                </h1>
            </div>
            <Banner></Banner>
            <Services></Services>
            <Offers></Offers>
        </div>
    );
};

export default Home;