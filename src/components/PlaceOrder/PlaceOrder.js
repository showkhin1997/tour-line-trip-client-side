import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
            <h1>{service.name}</h1>
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default PlaceOrder;