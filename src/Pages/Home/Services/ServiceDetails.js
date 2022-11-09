import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, serviceName, price, ratting, image_url, description } = useLoaderData();
    return (
        <div className='flex flex-col md:flex-row'>

            <div className='border-2 border-black md:basis-4/6 mx-auto'>
                <div className='w-10/12 mx-auto'>
                    {/* <h3 className='text-3xl text-slate-300 font-semibold '>Service section </h3> */}
                    <h3 className='text-6xl text-slate-900 font-semibold text-center mt-20'>{serviceName}</h3>
                    <img src={image_url} alt="" className='w-3/5 mx-auto my-20 rounded-xl' />
                    <p className='text-justify mb-20' >{description}</p>
                </div>
            </div>

            <div className='text-3xl text-slate-300 font-semibold border-2 border-black md:basis-2/6'>
                <h2>Review Section</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;