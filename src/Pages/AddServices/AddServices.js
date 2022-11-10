import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.service_name.value;
        const ratting = form.ratting.value
        const price = form.price.value;
        const image_url = form.image_url.value;
        const description = form.description.value;

        console.log(name, ratting, price, description);

        const service = {
            serviceName: name,
            ratting,
            price: price,
            image_url,
            description
        }
        fetch('https://ass-10-server-plum.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    toast.success('Service added successfully');
                    form.reset();
                }
                
            })
            .catch(error => console.log(error));

    }

    useTitle('Add-services');
    return (
        <div>
            <h3 className='text-4xl text-slate-900 font-bold text-center my-5'>Add Your Services</h3>
            <form className="w-full max-w-lg mx-auto my-10 p-10 md:p-0" onSubmit={handleAddService}>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Service Name
                        </label>
                        <input name='service_name' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Service name" required />
                    </div>



                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Ratting
                        </label>
                        <input name='ratting' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" required />
                    </div>


                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Price
                        </label>
                        <input name='price' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Price" required />
                    </div>
                </div>


                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Image url
                        </label>
                        <input name='image_url' className='Image' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" required />

                    </div>
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Description" required></textarea>

                <button className='btn btn-ghost' type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;