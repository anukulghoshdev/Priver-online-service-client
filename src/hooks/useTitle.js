import React, { useEffect } from 'react';

const useTitle = (title) => {
    return (
        useEffect(()=>{
            document.title = `${title} - Priver`;
        },[title])
    );
};

export default useTitle;