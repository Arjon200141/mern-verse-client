import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const logOut = () =>{
        signOut(auth);
    }

    const signIn = (email , password) =>{
        return signInWithEmailAndPassword(auth , email ,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        signInWithGoogle
    }

    

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node,
}

export default AuthProviders;
