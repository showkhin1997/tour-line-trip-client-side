import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(result => result.json())
            .then(data => setService(data))
    }, [])


    return (
        <div className="place-order-container">
            <div class="card mb-3 container border-0">
                <img src={service.img} class="card-img-top w-50 h-50" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">{service.name}</h2>
                    <p class="card-text w-75">{service.description}</p>
                    <p class="card-text"><small class="text-muted">Day: {service.day}</small></p>
                    <p class="card-text"><small class="text-muted"> Adress: {service.address}</small></p>
                    <h5 className="mb-3">Price: ${service.price}</h5>
                    <button className="btn btn logout-button">Place Order</button>
                    <Link to="/home">
                        <button type="button" class="btn btn-light ms-2 fw-bold">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;