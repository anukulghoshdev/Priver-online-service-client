import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import ServiceAction from '../ServiceAction/ServiceAction';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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