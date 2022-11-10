import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const { _id, serviceName, price, ratting, image_url, description } = useLoaderData();

    useTitle('Details');
    const {user} = useContext(AuthContext)
    return (
        <div className='flex flex-col lg:flex-row'>

            <div className=' md:basis-4/6 mx-auto'>
                <div className='w-10/12 mx-auto'>
                    {/* <h3 className='text-3xl text-slate-300 font-semibold '>Service section </h3> */}
                    <h3 className='text-6xl text-slate-900 font-semibold text-center mt-20'>{serviceName}</h3>
                    <img src={image_url} alt="" className='w-3/5 mx-auto my-20 rounded-xl' />
                    <p className='text-justify mb-20 leading-loose text-slate-900 font-medium' >{description}</p>
                </div>
            </div>

            <div className='text-3xl text-slate-300 font-semibold border-2 border-l-slate-300 md:basis-2/6'>
                <Reviews service_id={_id} serviceName={serviceName} serviceImage_url={image_url}></Reviews>
            </div>
        </div>
    );
};

export default ServiceDetails;