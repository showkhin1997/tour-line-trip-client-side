import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const OrderConfirm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [selectService, setSelectService] = useState([]);

    const onSubmit = data => {
        data.service = selectService;

        fetch('http://localhost:5000/confirmOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Service is Placed Successfully');
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setSelectService(data))
    }, [])

    return (
        <div className="add-service">
            <h2 className="mb-5 text-center">Place Your Order</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue={user?.displayName} {...register("userName")} />
                <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />
                {/* {errors.email && <span className="error">This field is required</span>} */}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                <label htmlFor="check-in" className="fw-bold">Check-in</label>
                <input type="date" placeholder="Check-in" defaultValue="" {...register("checkIn")} />
                <label htmlFor="check-out" className="fw-bold">Check-out</label>
                <input type="date" placeholder="Check-out" defaultValue="" {...register("checkOut")} />
                <input type="submit" className="logout-button btn" value="Placed Order" />
            </form>
        </div>
    );
};

export default OrderConfirm;