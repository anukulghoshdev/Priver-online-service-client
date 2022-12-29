import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { SetAuthToken } from '../../getJwt/getJwt';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Login Successful');

                SetAuthToken(user);

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    useTitle('login');


    return (
        <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
            <div className="hidden md:block content text-3xl text-center md:text-left" data-aos="fade-right">
                <h1 className="text-5xl text-slate-900 font-bold">Priver</h1>
                <p>Connect with your best researchers to find the world .</p>
            </div>
            <div className="container mx-auto flex flex-col items-center" data-aos="fade-left">

                <form onSubmit={handleSubmit} className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <input type="email" name='email' placeholder="Email " className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <input type="password" name='password' placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    {
                        error ? <p className='text-red-600 font-bold'>{error.slice(22, -2)}</p> : ''
                    }
                    <button className="w-full bg-slate-900 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
                    <Link to='#' className="text-blue-400 text-center my-2">Forgot Pasword?</Link>
                    <hr />
                    <Link to='/signup'>
                        <button type="submit" className="w-full bg-amber-100 mt-8 mb-4  text-slate-400 p-3 rounded-lg font-semibold text-lg">Create New Account</button>
                    </Link>
                </form>

                <p className="text-center text-sm my-4">
                    <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
                </p>
            </div>
        </div>
    );
};

export default Login;