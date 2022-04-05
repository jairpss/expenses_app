import { useState, useEffect } from 'react'
import {db} from './../firebase/firebaseConfig'
import {useNavigate} from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'

const useGetExp = (id) => {
    const navigate = useNavigate()
    const [expense, setExpense] = useState('')

    useEffect(() => {
        const getExpense = async() => {
            const document = await getDoc(doc(db, 'expenses', id))
            
            if(document.exists){
                setExpense(document)
            } else {
                navigate('/list')
            }
        }

        getExpense()
    }, [navigate, id])


    return [expense];
}
 
export default useGetExp;