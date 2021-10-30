import React, { useEffect, useState } from 'react';
import EditServices from '../EditServices/EditServices';
import ManageAllService from '../ManageAllService/ManageAllService';
import './ManageAllServices.css';

const ManageAllServices = () => {
    const [confirmOrders, setConfirmOrders] = useState([]);
    const [services, setServices] = useState([]);

    // For confirm orders and users
    useEffect(() => {
        fetch('http://localhost:5000/confirmOrder')
            .then(res => res.json())
            .then(data => setConfirmOrders(data))
    }, []);

    // Manage services
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // handle Delete service
    const handleDeleteService = id => {
        const procced = window.confirm('Are you want to delete the Service?');
        if (procced) {
            const url = `http://localhost:5000/services/${id}`;
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
        <div className="dashboard-container container mb-5">
            <h2 className="text-center mb-4">Manage All Services</h2>

            {/* show all users */}
            <div>
                <h5 className="mt-5 mb-2 text-center">Manage All Users</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Check-in</th>
                            <th scope="col">Check-out</th>
                            <th scope="col">Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            confirmOrders.map(confirmOrder => <ManageAllService
                                key={confirmOrder._id}
                                confirmOrder={confirmOrder}
                            ></ManageAllService>)
                        }
                    </tbody>
                </table>
            </div>

            {/* All services */}
            <h5 className="mt-5 mb-3 text-center">Edit Services</h5>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Day</th>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => <EditServices
                                key={service._id}
                                service={service}
                                handleDeleteService={handleDeleteService}
                            ></EditServices>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllServices;