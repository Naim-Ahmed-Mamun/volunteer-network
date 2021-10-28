import initializeAuthentication from "../components/shared/Login/firevase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
       return signInWithPopup(auth,googleProvider)
    };

    // on auth state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            else {
             setUser({})
            }
            setIsLoading(false)
          }); 
    },[])

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return {
        user,
        signInUsingGoogle,
        setUser,
        logout,
        isLoading
    }
}

export default useFirebase;