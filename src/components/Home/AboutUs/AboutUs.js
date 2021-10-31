import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../../../images/aboutus.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container" id="aboutus">
            <h2 className="mb-5 section-title text-center">About Us</h2>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-8">
                        <img src={aboutUsImage} alt="" className="img-fluid about-us-image" />
                    </div>
                    <div className="col-md-6 mt-5 col-sm-4">
                        <h2>What Is TourLineTrip?</h2>
                        <p className="w-75 text-muted text-justified">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These of</p>
                        <button className="btn btn logout-button">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;