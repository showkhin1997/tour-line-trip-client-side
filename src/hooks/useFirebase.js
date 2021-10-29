import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googlProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googlProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }


    return {
        error,
        user,
        logOut,
        signInUsingGoogle,
    }


}

export default useFirebase;