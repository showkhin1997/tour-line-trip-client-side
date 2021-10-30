import React from 'react';
import { Link } from 'react-router-dom';

const EditServices = ({ service, handleDeleteService }) => {
    const { name, country, price, day, address, _id } = service;
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{country}</td>
            <td>{day}</td>
            <td>{address}</td>
            <td>{price}</td>
            <Link to={`/services/updateservice/${_id}`}>
                <button className="btn btn ms-3 text-primary">Edit</button>
            </Link>
            <button onClick={() => handleDeleteService(_id)} className="ms-2 btn btn text-danger">Delete</button>
        </tr>
    );
};

export default EditServices;