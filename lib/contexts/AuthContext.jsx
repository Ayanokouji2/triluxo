"use client"


import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setIsLoading(false)
        })

        return () => unsubscribe();
    }, [])


    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true)
            await signInWithPopup(auth, new GoogleAuthProvider())
        } catch (error) {
            setError(error?.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleLogout = async () => {
        try {
            setIsLoading(true)
            await signOut(auth)
        } catch (error) {
            setError(error?.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, error, handleGoogleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);