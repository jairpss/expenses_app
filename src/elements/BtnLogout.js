import React from 'react'
import {ReactComponent as LogoutIcon} from '../images/log-out.svg'
import Button from './Button'
import {auth} from './../firebase/firebaseConfig'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const BtnLogout = () => {
    const navigate = useNavigate()

    const logOut = async() => {
        try {
            await signOut(auth)
            navigate('/login')
        } catch(error){
            console.log(error)
        }
    }

    return ( 
        <Button bigIcon as ='button' onClick={logOut}>
            <LogoutIcon />
        </Button>
     );
}
 
export default BtnLogout;
