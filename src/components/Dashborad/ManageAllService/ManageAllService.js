import React from 'react';

const ManageAllService = ({ confirmOrder }) => {
    // console.log(confirmOrder)
    const { userName, email, phone, checkIn, checkOut } = confirmOrder;
    return (
        <tr>
            <td>{userName}</td>
            <td className="text-break">{email}</td>
            <td className="text-break">{phone}</td>
            <td>{checkIn}</td>
            <td>{checkOut}</td>
        </tr>
    );
};

export default ManageAllService;