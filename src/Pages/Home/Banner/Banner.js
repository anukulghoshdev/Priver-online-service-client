import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

import img1 from '../../../assests/banner/1.jpg'
import img2 from '../../../assests/banner/2.jpg'
import img3 from '../../../assests/banner/3.jpg'
import img4 from '../../../assests/banner/4.jpg'



const Banner = () => {
    //style={{ background: `url(${bg})`}}
    return (

        // <div className='bg-gradient-to-tr from-stone-900 to-slate-500 h-96 w-full  relative border-2 border-indigo-900'>
        //     <img src={img1} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

        //     <div className='p-24'>
        //         <h2 className='text-4xl md:text-5xl lg:text-6xl text-slate-50 font-bold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Research is your own way</h2>
        //     </div>

        // </div>


        <div className='flex items-center justify-center h-[85vh]  bg-fixed  bg-center bg-cover relative'  style={{ backgroundImage: `url(${img2})`, }}>

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]'/>

            <div className='p-5 text-white z-[2]  hero-text'>
                <h2 className= 'text-3xl md:text-5xl lg:text-6xl font-bold'>Research is your own way</h2>
                <p className='py-5 text-xl'></p>
                <button className='px-8 py-2 border text-white rounded-md font-bold hover:bg-yellow-50 hover:text-stone-900 duration-200 '>Book Now</button>
            </div>
        </div>




    );
};

export default Banner;