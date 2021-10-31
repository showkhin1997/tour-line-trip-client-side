import React from 'react';
import './Offers.css';

const Offers = () => {
    return (
        <div className="mb-5 offer-container" id="offers">
            <h2 className="text-center mb-5 section-title">Last Minute Offers</h2>
            <p className="text-center mt-1 w-50 mx-auto text-muted fst-italic">Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.</p>
            <div className="container mb-5 bg-style mt-5 p-2">
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src="https://i.ibb.co/MnF0kSt/1.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">10% off</small> <br />
                            China Temple
                        </p>
                    </div>
                    <div className="col-6 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/WPNDn23/2.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">30% off</small> <br />
                            India Forest
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/P4nFFfB/3.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">15% off</small> <br />
                            Mexico
                        </p>
                    </div>
                    <div className="col-6 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/v301YMX/4.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">26% off</small> <br />
                            Europe
                        </p>
                    </div>
                    <div className="col-6 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/q1zF4HR/5.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">45% off</small> <br />
                            Egypt
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src="https://i.ibb.co/zXfZDYv/6.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">35% off</small> <br />
                            Alaska
                        </p>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid" src="https://i.ibb.co/7zzfvsq/7.jpg" alt="" />
                        <p className="fw-bold">
                            <small className="text-primary">20% off</small> <br />
                            Africa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;