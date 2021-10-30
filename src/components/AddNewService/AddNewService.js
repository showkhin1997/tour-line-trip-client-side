import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('The service added Successfully!');
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h2 className="mb-5 text-center">Please add new Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name" />
                <input {...register("country")} placeholder="Country" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image url" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="number" {...register("day")} placeholder="Day" />
                <input {...register("address")} placeholder="Address" />
                <input type="submit" className="logout-button btn" />
            </form>
        </div>
    );
};

export default AddNewService;