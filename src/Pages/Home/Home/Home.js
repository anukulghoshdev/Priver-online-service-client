import React from 'react';
import Banner from '../Banner/Banner';
import ServiceAction from '../ServiceAction/ServiceAction';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <ServiceFeatures></ServiceFeatures>
            <ServiceAction></ServiceAction>
        </div>
    );
};

export default Home;