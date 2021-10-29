import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
    }


    return (
        <div>
            <h2 className="text-center mt-5">Please Login</h2>
            <button className="btn btn-primary mt-5 ms-5" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;