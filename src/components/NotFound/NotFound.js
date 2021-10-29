import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img className="mx-auto w-75" src={notFound} alt="" />
            <Link to="/home">
                <button type="button" class="btn btn-primary ms-3">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;