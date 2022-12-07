import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';
import banner_img from '../../../assests/banner/4.jpg'
import useTitle from '../../../hooks/useTitle';

const AllServices = () => {
    const [services, setServices] = useState([])

    useTitle('allservices');

    const [isAsc, setIsAsc] = useState('asc');

    const searchRef = useRef();

    const [search, setSearch] = useState('');





    // select option dropdown diye sort kora hoise
    const options = [
        { value: 'asc', text: 'low to high' },
        { value: 'desc', text: 'high to low' },
    ]


    const handleChange = (e) => {
        console.log(e.target.value);
        setIsAsc(e.target.value);
    }




    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }



    useEffect(() => {
        fetch(`https://ass-10-server-plum.vercel.app/allservices?search=${search}&order=${isAsc === 'asc' ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])



    return (
        <div className=''>

            <div className='bg-gradient-to-tr from-purple-900 to-green-700 h-96 w-full  relative'>
                <img src={banner_img} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-7xl text-slate-50 font-bold absolute md:left-40'> Services</h2>
                </div>
            </div>


            <div className='w-[65%] mx-auto  flex flex-col md:flex-row justify-between items-center my-6'>

                <div className='my-5 '>
                    <p className='ml-12'>Sort by price: </p>
                    <select value={isAsc} onChange={handleChange} className="select select-bordered w-52 border-2 border-zinc-800 ">
                        {
                            options.map (option => <option key={option.value} value={option.value} >{option.text}</option>)
                        }
                    </select>
                </div>

                <div className='ml-9 md:ml-7 lg:ml-0'>
                    <input ref={searchRef} type="text" placeholder="Search Services" className="input input-bordered" />
                    <button onClick={handleSearch} className='btn'>Search</button>
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