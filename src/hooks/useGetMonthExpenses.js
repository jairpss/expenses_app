import { useState, useEffect } from 'react'
import {db} from './../firebase/firebaseConfig'
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns'
import {useAuth} from './../context/AuthContext'
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore'

const useGetMonthExpenses = () => {
    const [expenses, setExpenses] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        const startMonth = getUnixTime(startOfMonth(new Date()))
        const endMonth = getUnixTime(endOfMonth(new Date()))

        if(user){
            const querry = query(
                collection(db, 'expenses'),
                orderBy('date', 'desc'),
                where('date', '>=', startMonth),
                where('date', '<=', endMonth),
                where('uidUser', '==', user.uid)
            )

            const unsubscribe = onSnapshot(querry, (snapshot) => {
                setExpenses(snapshot.docs.map((document) => {
                    return {...document.data(), id: document.id}
                }))
            }, (error) => {console.log(error)})
            return unsubscribe
        }

    }, [user])

    return [expenses]
}
 
export default useGetMonthExpenses;