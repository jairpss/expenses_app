import React from 'react'
import {Navigate} from 'react-router-dom' 
import {useAuth} from './../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user} = useAuth()

    if(user){
        return children
    } else {
        return <Navigate replace to="/login"/>
    }
    
}
 
export default ProtectedRoute
