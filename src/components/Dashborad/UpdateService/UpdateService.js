import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './UpdateService.css';

const UpdateService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://shrouded-refuge-04791.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);

    // update product handaler
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateService = { name: updateName, country: service.country, description: service.description, img: service.img, price: service.price, day: service.day, address: service.address };
        setService(updateService);
    }
    const handleCountryChange = e => {
        const updateCountry = e.target.value;
        const updateService = { name: service.name, country: updateCountry, description: service.description, img: service.img, price: service.price, day: service.day, address: service.address };
        setService(updateService);
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updateService = { name: service.name, country: service.country, description: updateDescription, img: service.img, price: service.price, day: service.day, address: service.address };
        setService(updateService);
    }
    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updateService = { name: service.name, country: service.country, description: service.description, img: updateImg, price: service.price, day: service.day, address: service.address };
        setService(updateService);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateService = { name: service.name, country: service.country, description: service.description, img: service.img, price: updatePrice, day: service.day, address: service.address };
        setService(updateService);
    }
    const handleDayChange = e => {
        const updateDay = e.target.value;
        const updateService = { name: service.name, country: service.country, description: service.description, img: service.img, price: service.price, day: updateDay, address: service.address };
        setService(updateService);
    }
    const handleAddressChange = e => {
        const updateAddress = e.target.value;
        const updateService = { name: service.name, country: service.country, description: service.description, img: service.img, price: service.price, day: service.day, address: updateAddress };
        setService(updateService);
    }

    const handleUpdateProduct = e => {
        const url = `https://shrouded-refuge-04791.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successfully');
                    setService({});
                }
            })


        e.preventDefault();
    }

    return (
        <div className="update-service-container mb-5">
            <h1 className="mb-5 text-center section-title">Update Service</h1>

            <Form className="container w-100 mx-auto" onSubmit={handleUpdateProduct}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="text" placeholder="Update name" value={service.name || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Country</Form.Label>
                    <Form.Control onChange={handleCountryChange} type="text" placeholder="Update Name" value={service.country || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleDescriptionChange} type="text" placeholder="Update Description" value={service.description || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control onChange={handleImgChange} type="text" placeholder="Update Image url" value={service.img || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={handlePriceChange} type="text" placeholder="Update Price" value={service.price || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Day</Form.Label>
                    <Form.Control onChange={handleDayChange} type="text" placeholder="Update Day" value={service.day || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleAddressChange} type="text" placeholder="Update Address" value={service.address || ''} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Service
                </Button>
                <Link to="/dashboard">
                    <button type="button" class="btn btn-light">Back to Dashboard</button>
                </Link>
            </Form>
        </div>
    );
};

export default UpdateService;