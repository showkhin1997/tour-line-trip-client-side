import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="login-container" id="login">
            <h2 className="text-center mt-5">Please Login</h2>
            <button className="btn btn-primary mt-5 ms-5" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;