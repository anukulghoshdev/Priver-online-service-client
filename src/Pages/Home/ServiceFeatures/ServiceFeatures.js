import React from 'react';
import { Link } from 'react-router-dom';

const ServiceFeatures = () => {
    return (
        <section className="text-gray-600 body-font  bg-[#F8F8F8]" >
            <div className="container px-5 py-24 mx-auto" data-aos="zoom-in-up">
                <div className="text-center mb-20">
                    <p className="text-xl font-bold text-[#6C6C6C] " >QUALITY & EFFICIENCE</p>
                    <h1 className="text-3xl title-font  mb-4 md:text-5xl font-bold text-black  mx-auto my-6">Experts in Business Research</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Collect data from your customer base to insure customer retention, satisfaction, and loyalty. Assess the targeted markets and customers to develop</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md md:grid-cols-2  lg:grid-cols-3 gap-3  mx-auto  w-full">


                    <div className="shadow-xl w-full flex flex-col text-center items-center py-6 bg-white">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">Analysis & Strategy</h2>
                            <p className="leading-relaxed text-base">Data require different types of analyses. especially of psychological research and surveys.</p>
                            <Link className="mt-3 text-slate-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="shadow-xl w-full flex flex-col text-center items-center py-6 bg-white">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">Market Research</h2>
                            <p className="leading-relaxed text-base">Data require different types of analyses. especially of psychological research and surveys.</p>
                            <Link className="mt-3 text-slate-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="shadow-xl w-full flex flex-col text-center items-center py-6 bg-white">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font mb-3 font-bold">Survey Actions</h2>
                            <p className="leading-relaxed text-base">Data require different types of analyses. especially of psychological research and surveys.</p>
                            <Link className="mt-3 text-slate-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>





























                    {/* <div className="border-2 py-10 px-0 md:w-1/3 flex flex-col text-center items-center mx-2">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold">Market Research</h2>
                            <p className="leading-relaxed text-base">Assess your target markets and customers to develop and maintain a competitive advantage.</p>
                            <Link className="mt-3 text-slate-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>


                    <div className="border-2 py-10 px-0 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold">Survey Actions</h2>
                            <p className="leading-relaxed text-base">Consulting and training on how to move from data to action in three weeks</p>
                            <Link className="mt-3 text-slate-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div> */}

                </div>
                <button className="flex mx-auto mt-16 text-white  bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-slate-800 rounded text-lg">GET MORE</button>
            </div>
        </section>
    );
};

export default ServiceFeatures;