import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import logo from '../../../assests/logo.png'
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, userlogOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const [open, setOpen] = useState(false)


    const handleLogout = () => {
        userlogOut()
            .then(() => {
                toast.error('User logged out');
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div className='bg-[#F3F3E3] md:py-3 text-zinc-800 ' data-aos="fade-down">

            <div data-aos="fade-up" className={`bg-slate-900 block w-full md:hidden absolute duration-300 ease-out ${open ? 'top-20' : 'top-[-384px]'}`}>


                <nav className={`text-black font-bold flex flex-col justify-center  `}>
                    <Link className="mr-5 text-zinc-200 font-bold hover:text-gray-400 py-2">Home</Link >
                    <Link className="mr-5 text-zinc-200 font-bold hover:text-gray-400 py-2">My Reviews</Link >
                    <Link className="mr-5 text-zinc-200 font-bold hover:text-gray-400 py-2">Add Service</Link >
                    <Link className="mr-5 text-zinc-200 font-bold hover:text-gray-400 py-2">Blogs</Link >

                </nav>



                <button className="inline-flex items-center bg-gray-800 border-0 text-slate-50 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base font-semibold my-4  ">Signin
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <br />
                <button className="inline-flex items-center bg-gray-800 border-0 text-slate-50 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base font-semibold my-4  ">Login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <br />



            </div>





            <header className="text-gray-600 body-font  relative">



                <div onClick={() => setOpen(!open)} className=" text-3xl block md:hidden absolute top-1/3 left-[90%] ">
                    {
                        open ? <HiX className='cursor-pointer' /> : <FaBars className='cursor-pointer' />
                    }
                </div>

                <div className={`container mx-auto w-full md:flex flex-wrap p-5 flex-col md:flex-row items-center  `}>

                    <Link to='/' className="flex title-font font-medium items-center text-gray-900  md:mb-0 ">
                        <img src={logo} className='w-10 h-10' alt="" />
                        <span className="ml-3 text-xl font-bold text-zinc-800">Priver</span>
                    </Link >

                    <nav className={`md:ml-auto md:mr-auto  md:flex flex-wrap items-center text-base justify-center hidden `}>
                        <Link to="/" className="mr-5 font-bold hover:text-gray-900 ">Home</Link >
                        <Link to='/myreviews' className="mr-5 font-bold hover:text-gray-900">My Reviews</Link >
                        <Link to='/addServices' className="mr-5 font-bold hover:text-gray-900">Add Service</Link >
                        <Link className="mr-5 font-bold hover:text-gray-900">Blogs</Link >
                    </nav>








                    {
                        user?.uid ?
                            <button onClick={handleLogout} className="md:inline-flex items-center font-semibold text-black border border-1 py-1 px-3 focus:outline-orange-300 hover:bg-orange-200 rounded text-base mt-4 md:mt-0 hidden ">Log Out
                                <HiOutlineLogout className='w-4 h-4 ml-2'></HiOutlineLogout>
                            </button> :
                            <>
                                <Link to='/signup'>
                                    <button className="md:inline-flex items-center font-semibold text-slate-50 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hidden mr-2">Signin
                                        <FaSignInAlt className='w-4 h-4 ml-2'></FaSignInAlt>
                                    </button>

                                </Link>

                                <Link to='/login'>
                                    <button className="md:inline-flex items-center font-semibold text-black border border-1 py-1 px-3 focus:outline-orange-300 hover:bg-orange-200 rounded text-base mt-4 md:mt-0 hidden ">Login
                                        <HiOutlineLogin className='w-4 h-4 ml-2'></HiOutlineLogin>
                                    </button>
                                </Link>
                            </>

                    }






                </div>
            </header>
        </div>
    );
};

export default Header;