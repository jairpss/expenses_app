import React, { useState, useEffect } from 'react'
import {db} from './../firebase/firebaseConfig'
import {useAuth} from './../context/AuthContext'
import { collection, onSnapShot, query, orderBy, where, limit } from 'firebase/firestore'

const useGetExpenses = () => {
    const {user} = useAuth()
    const [expenses, setExpenses] = useState([])
    const [lastExpense, setLastExpense] = useState(null)
    const [moreToLoad, setMoreToLoad] = useState(false)

    useEffect(() => {
        const query = query(
            collection(db, 'expenses'),
            where('uidUser', '==', user.uid),
            orderBy('date', 'desc'),
            limit(10)
        );

        const unsubscribe = onSnapShot(query, (snapshot) => {
            if(snapshot.docs.length > 0){
                setLastExpense(snapshot.docs[snapshot.docs.length -1])
                setMoreToLoad(true)
            } else {
                setMoreToLoad(false)
            }

            setExpenses(snapshot.docs.map((expense) => {
                return {...expense.data(), id: expense.id}
            }))
        })
        return unsubscribe
    }, [user])

    return [expenses, moreToLoad];
}
 
export default useGetExpenses;