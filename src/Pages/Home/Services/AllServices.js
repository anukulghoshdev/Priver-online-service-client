import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import banner_img from '../../../assests/banner/4.jpg'
import useTitle from '../../../hooks/useTitle';

const AllServices = () => {
    const [services, setServices] = useState([])

    useTitle('allservices');

    useEffect(() => {
        fetch('https://ass-10-server-plum.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=''>

            <div className='bg-gradient-to-tr from-purple-900 to-green-700 h-96 w-full  relative'>
                <img src={banner_img} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-7xl text-slate-50 font-bold absolute md:left-40'> Services</h2>
                </div>

            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 w-9/12 mx-auto my-12' data-aos="zoom-in-up">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;