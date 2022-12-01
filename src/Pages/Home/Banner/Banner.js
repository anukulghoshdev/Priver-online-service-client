import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assests/banner/1.jpg'
import img2 from '../../../assests/banner/2.jpg'
import img3 from '../../../assests/banner/3.jpg'
import img4 from '../../../assests/banner/4.jpg'



const Banner = () => {
    
    return (


        <div className='bg-gradient-to-tr from-stone-900 to-slate-500 h-96 w-full  relative'>
                <img src={img1} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-slate-50 font-bold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Research is your own way</h2>
                </div>

            </div>




    );
};

export default Banner;