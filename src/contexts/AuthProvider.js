import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const Auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(Auth.currentUser, profile)
    }


    const userlogOut = () => {
        return signOut(Auth)
    }



    // signin google
    const signInGoogle = (provider) => {
        return signInWithPopup(Auth, provider)
    }


    // const signInGitHub = (githubProvider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, githubProvider)
    // }



    const logIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        userlogOut,
        signInGoogle,
        logIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;