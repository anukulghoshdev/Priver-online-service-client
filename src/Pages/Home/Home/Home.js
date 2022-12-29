import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import ServiceAction from '../ServiceAction/ServiceAction';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import Services from '../Services/Services';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ResearchSummary from '../ResearchSummary/ResearchSummary';
import OurResearchTeam from '../OurResearchTeam/OurResearchTeam';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <ServiceFeatures></ServiceFeatures>
            <ResearchSummary></ResearchSummary>
            <OurResearchTeam></OurResearchTeam>
            <ServiceAction></ServiceAction>
        </div>
    );
};

export default Home;