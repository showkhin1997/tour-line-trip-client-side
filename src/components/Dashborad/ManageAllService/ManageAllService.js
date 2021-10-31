import React, { useState } from 'react';


const ManageAllService = ({ confirmOrder, handleDeleteUsers }) => {
    const [isApproved, setIsApproved] = useState(false);

    let handleApproved = e => {
        setIsApproved(e);
    }

    const { userName, email, phone, checkIn, checkOut, _id } = confirmOrder;

    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{checkIn}</td>
            <td>{checkOut}</td>
            <td>{confirmOrder.service[0]?.name}</td>
            <td>{confirmOrder.service[0]?.price}</td>
            <button className="btn btn text-success" onClick={() => handleApproved(true)}>{!isApproved ? 'Procced' : 'Approved'}</button>

            <button onClick={() => handleDeleteUsers(_id)} type="button" className="btn btn text-danger">Delete</button>
        </tr>
    );
};

export default ManageAllService;