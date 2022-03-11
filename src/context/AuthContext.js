//In this file we create a global state for the active user
import React, {useState, useContext, useEffect} from 'react'
import {auth} from './../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

//We create the context 
const AuthContext = React.createContext()

//Hook to access the context 
const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    //create state to know when finish to load the verification 
    const [loading, setLoading] = useState(true)

    //Effect to execute the verification one time
    useEffect(() => {
        //Verificate if there is a user
        const cancelSubscription = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return cancelSubscription
    }, [])

    return ( 
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
     );
}
 
export  {AuthProvider, AuthContext, useAuth}