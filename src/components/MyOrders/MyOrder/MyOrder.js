import React from 'react';

const MyOrder = ({ service, handleDeleteService, handleConfirmOrder }) => {
    const { name, price, _id } = service;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <button onClick={() => handleDeleteService(_id)} type="button" className="btn btn">DELETE</button>
        </tr>


    );
};

export default MyOrder;