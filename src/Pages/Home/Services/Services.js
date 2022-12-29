import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';


import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import LoaderSpinner from '../../LoaderSpinner/LoaderSpinner';

const Services = () => {
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://ass-10-server-plum.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoader(false);
                setServices(data)
            })

    }, [])

    if (loader) {
        return <LoaderSpinner />
    }

    return (
        <div className='bg-[#F8F8F8] py-8'>
            <div className='text-center  my-12'>
                <p className="text-lg font-semibold text-[#6C6C6C] tracking-wide">QUALITY & EFFICIENCE</p>
                <h2 className="text-5xl font-bold my-4 tracking-wide">My Research Services</h2>

                <p className=' w-1/3 mx-auto text-slate-800 font-medium'>When you don’t have a team of research experts in-house, We will be here with our services is here to manage everything for you.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 w-9/12 mx-auto my-12' data-aos="zoom-in">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='text-center my-12'>
                <Link to='/allservices'>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-900 hover:bg-slate-700 dark:text-white">See All</button>
                </Link>
            </div>

        </div>
    );
};

export default Services;