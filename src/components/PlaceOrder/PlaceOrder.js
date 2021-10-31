import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    const handleAddServices = service => {
        const name = service.name;
        const price = service.price;

        const order = { name, price };

        fetch('https://shrouded-refuge-04791.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service is added in My orders');
                }
            })

    }

    useEffect(() => {
        fetch(`https://shrouded-refuge-04791.herokuapp.com/services/${serviceId}`)
            .then(result => result.json())
            .then(data => setService(data))
    }, [])


    return (
        <div className="place-order-container">
            <div className="card mb-3 container border-0">
                <img src={service.img} className="card-img-top w-50 h-50" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{service.name}</h2>
                    <p className="card-text w-75">{service.description}</p>
                    <p className="card-text"><small className="text-muted">Day: {service.day}</small></p>
                    <p className="card-text"><small className="text-muted"> Adress: {service.address}</small></p>
                    <h5 className="mb-3">Price: ${service.price}</h5>
                    <button onClick={() => handleAddServices(service)} className="btn btn logout-button">Add Service</button>
                    <Link to="/home">
                        <button type="button" className="btn btn-light ms-2 fw-bold">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;