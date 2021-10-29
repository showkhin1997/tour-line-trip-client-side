import React from 'react';

const Service = ({ service }) => {
    const { name, country, description, img, price } = service;
    return (
        <div className="col p-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>Country: {country}</small>
                    <p className="card-text">{description}</p>
                    <p>Price: ${price}</p>
                    <button className="btn btn logout-button">Booking Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;