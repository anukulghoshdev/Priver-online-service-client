import React from 'react';

const LoaderSpinner = () => {
    return (

        <div className='flex justify-center py-20'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-900"></div>
        </div>

    );
};

export default LoaderSpinner;