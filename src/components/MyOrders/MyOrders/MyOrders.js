import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-refuge-04791.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDeleteService = id => {
        const procced = window.confirm('Are you sure you want to remove the Service?');
        if (procced) {
            const url = `https://shrouded-refuge-04791.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }
    }


    return (
        <div className="my-orders-container">
            <h2 className="text-center mb-4 section-title">Please Confirm Your Service</h2>
            <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <MyOrder
                            key={service._id}
                            service={service}
                            handleDeleteService={handleDeleteService}
                        >
                        </MyOrder>)
                    }
                </tbody>
            </Table>
            <Link to="/orderconfirm">
                <button className="btn btn logout-button ms-4 mt-5">Order Confirm</button>
            </Link>
        </div>
    );
};

export default MyOrders;