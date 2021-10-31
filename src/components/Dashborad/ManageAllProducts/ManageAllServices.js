import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EditServices from '../EditServices/EditServices';
import ManageAllService from '../ManageAllService/ManageAllService';
import './ManageAllServices.css';

const ManageAllServices = () => {
    const [confirmOrders, setConfirmOrders] = useState([]);
    const [services, setServices] = useState([]);
    const [users, setUsers] = useState([]);


    // For confirm orders and users
    useEffect(() => {
        fetch('https://shrouded-refuge-04791.herokuapp.com/confirmOrder')
            .then(res => res.json())
            .then(data => setConfirmOrders(data))
    }, []);

    // Manage services
    useEffect(() => {
        fetch('https://shrouded-refuge-04791.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // handle Delete service
    const handleDeleteService = id => {
        const procced = window.confirm('Are you  you want to delete the Service?');
        if (procced) {
            const url = `https://shrouded-refuge-04791.herokuapp.com/services/${id}`;
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

    // handle delete users
    const handleDeleteUsers = id => {
        const procced = window.confirm('Are you  want to delete the User?');
        if (procced) {
            const url = `https://shrouded-refuge-04791.herokuapp.com/confirmOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('User is Deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <div className="dashboard-container container mb-5">
            <h2 className="text-center mb-4 section-title text-break">DASHBOARD</h2>

            {/* show all users */}
            <div className="container">
                <h5 className="mt-5 mb-2 text-center">Manage All Users</h5>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            confirmOrders.map(confirmOrder => <ManageAllService
                                key={confirmOrder._id}
                                confirmOrder={confirmOrder}
                                handleDeleteUsers={handleDeleteUsers}
                            ></ManageAllService>)
                        }
                    </tbody>
                </Table>
            </div>

            {/* All services */}
            <h5 className="mt-5 mb-3 text-center">Edit Services</h5>
            <div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Country</th>
                            <th>Day</th>
                            <th>Address</th>
                            <th>Price</th>
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
                </Table>
            </div>
        </div>
    );
};

export default ManageAllServices;