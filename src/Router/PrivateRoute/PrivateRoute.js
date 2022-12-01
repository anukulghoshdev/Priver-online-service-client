import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import LoaderSpinner from '../../Pages/LoaderSpinner/LoaderSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;