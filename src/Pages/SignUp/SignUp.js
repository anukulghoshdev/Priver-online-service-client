import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const SignUp = () => {
    const {  createUser, updateUserProfile, signInGoogle } = useContext(AuthContext); 
    const navigate = useNavigate();


    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        photoURL: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })





    // update user profile(name)
    const handleUdateProfile = (username, photoURL) => {
        const profile = {
            displayName: username,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { toast.success('profile updated') })
            .then(error => toast.error(error.message))
    }

    // sign in with goolgle
    const handleGoogleLogin=()=>{
        signInGoogle(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate('/');
            toast.success('Login with google successfully');

        })
        .catch(error=>{
            // console.log(error);
            toast.error(error.message)
        })
    }



    const handleSubmit = (e) => {
        const form = e.target;
        e.preventDefault();
        const { username, email, photoURL, password } = userInfo
        // console.log(username, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUdateProfile(username, photoURL);
                navigate('/');
                toast.success('Registration successful');
            })
            .catch((error)=>{
                toast.error(error.message);
            })
    }


    const handleUsernameChange = (e) => {
        setUserInfo({ ...userInfo, username: e.target.value });
    }
    const handlePhotoURL = (e) => {
        setUserInfo({ ...userInfo, photoURL: e.target.value });
    }
    const handleEmailChange = (e) => {
        const email = e.target.value;
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError({ ...error, email: 'provide a valid email' })
            setUserInfo({ ...userInfo, email: '' });
        }
        else {
            setError({ ...error, email: '' })
            setUserInfo({ ...userInfo, email: e.target.value });
        }
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            setUserInfo({ ...userInfo, password: '' });
            setError({ ...error, password: "Password must be 6 characters" })
        }
        else {

            setError({ ...error, password: "" });
            setUserInfo({ ...userInfo, password: e.target.value });
        }
    }


    useTitle('Signup');






    return (

        <div className="h-screen  flex justify-center items-center w-full my-6 bg-gray-200  mt-0">
            <form className='' data-aos="zoom-in" onSubmit={handleSubmit}>
                <div className="bg-white px-10 py-8 rounded-2xl w-screen shadow-xl max-w-sm">
                    <div className="space-y-4 shadow-xl border-3 border-slate-900 ">
                        <h1 className="text-center  font-bold text-4xl mb-9 ">Sign Up</h1>
                        <div>
                            <input onChange={handleUsernameChange} name='username' value={userInfo.username} type="text" placeholder="Username" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500 bg-indigo-50 outline-none w-full" required />
                        </div>

                        <div>
                            <input onChange={handleEmailChange} name='email' type="email" placeholder="Email or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500 bg-indigo-50 outline-none w-full" required />
                        </div>
                        {error.email && <p className='text-red-700'>{error.email}</p>}

                        <div>
                            <input onChange={handlePhotoURL} name='photoURL' value={userInfo.photoURL} type="text" placeholder="Photo URL" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500 bg-indigo-50 outline-none w-full" />
                        </div>

                        <div>
                            <input onChange={handlePasswordChange} name='password' type="password" placeholder="Password" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500 bg-indigo-50 outline-none w-full" required />
                        </div>
                        {error.password && <p className='text-red-700'>{error.password}</p>}
                    </div>
                    <button className="my-4 w-full bg-stone-800 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Sign Up</button>

                    <button type='button' onClick={handleGoogleLogin}
                        className='flex break-inside bg-white text-black  rounded-xl px-6 py-3 mb-4 w-full dark:bg-red-400 dark:text-white'>
                        <div className='m-auto'>
                            <div className='flex items-center justify-start flex-1 space-x-4'>
                                <svg width='25' height='25' viewBox='0 0 24 24'>
                                    <path fill='currentColor'
                                        d='M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z' />
                                </svg>
                                <span className='font-medium mb-[-2px]'>Continue with Google</span>
                            </div>
                        </div>
                    </button>


                    <button type='button'
                        className='flex break-inside bg-slate-900 text-white border-2 border-transparent rounded-xl px-6 py-3 mb-4 w-full'>
                        <div className='m-auto'>
                            <div className='flex items-center justify-start flex-1 space-x-4'>
                                <svg width='25' height='25' viewBox='0 0 24 24'>
                                    <path fill='currentColor'
                                        d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                                </svg>
                                <span className='font-medium'>Continue with Github</span>
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;