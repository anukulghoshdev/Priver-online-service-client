import React from 'react';
import Banner from '../Banner/Banner';
import ServiceAction from '../ServiceAction/ServiceAction';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>All home page components here</h2>
            
            <Banner></Banner>
            <Services></Services>
            <ServiceFeatures></ServiceFeatures>
            <ServiceAction></ServiceAction>
        </div>
    );
};

export default Home;