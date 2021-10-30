import React from 'react';

const ManageAllService = ({ confirmOrder }) => {
    // console.log(confirmOrder)
    const { userName, email, phone, checkIn, checkOut } = confirmOrder;
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{checkIn}</td>
            <td>{checkOut}</td>
        </tr>
    );
};

export default ManageAllService;