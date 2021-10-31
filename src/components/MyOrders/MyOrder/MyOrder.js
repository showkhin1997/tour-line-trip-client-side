import React from 'react';

const MyOrder = ({ service, handleDeleteService }) => {
    const { name, price, _id } = service;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <button onClick={() => handleDeleteService(_id)} type="button" className="btn btn">REMOVE</button>
        </tr>


    );
};

export default MyOrder;