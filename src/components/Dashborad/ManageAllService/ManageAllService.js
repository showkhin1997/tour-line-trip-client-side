import React, { useState } from 'react';


const ManageAllService = ({ confirmOrder }) => {
    const [isApproved, setIsApproved] = useState(false);

    let handleApproved = e => {
        setIsApproved(e);
    }

    const { userName, email, phone, checkIn, checkOut } = confirmOrder;
    return (
        <tr>
            <td>{userName}</td>
            <td className="text-break">{email}</td>
            <td className="text-break">{phone}</td>
            <td>{checkIn}</td>
            <td>{checkOut}</td>
            <td>{confirmOrder.service[0].name}</td>
            <td>{confirmOrder.service[0].price}</td>
            <button className="btn btn" onClick={() => handleApproved(true)}>{!isApproved ? 'Procced' : 'Approved'}</button>
        </tr>
    );
};

export default ManageAllService;