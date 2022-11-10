import React from 'react';
import { Link } from 'react-router-dom';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';


const ServicesCard = ({ service }) => {
    const { _id, serviceName, ratting, price, image_url, description } = service;
    return (
        <div className="max-w-sm rounded overflow-hidden rounded-t-lg shadow-xl border-2 ">
            <img className="w-full h-64 rounded-t-lg " src={image_url} alt="Sunset in the mountains" />
            <div className="px-6 py-4 border-2 ">
                <div className="font-bold text-xl mb-2">{serviceName}</div>
                <p className="text-gray-700 text-base">
                    {description.slice(0, 101) + '...'}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className="px-6 pt-4 pb-2 border-2 ">
                    <Link to={`/services/${_id}`}>
                        <button className='btn btn-ghost'>View Detail</button>
                    </Link>
                </div>
                <div>
                    <h2 className='text-xl text-zinc-600 font-bold mr-5'>At ${price}</h2>
                </div>

            </div>
        </div>
    );
};

export default ServicesCard;