import React, {useState, useEffect, useContext} from 'react'
import useGetMonthExpenses from '../hooks/useGetMonthExpenses'

const TotalSpentContext = React.createContext()

const useMonthTotal = () => useContext(TotalSpentContext)

const TotalSpentProvider = ({children}) => {
    const [total, setTotal] = useState(0)
    const expenses = useGetMonthExpenses()

    useEffect(() => {
        let acc = 0
        expenses.forEach((expense) => {
            acc += expense.amount
        })
        setTotal(acc)
    }, [expenses])

    return (
        <TotalSpentContext.Provider value={{total: total}}>
            {children}
        </TotalSpentContext.Provider>
    )
}

export {TotalSpentProvider, useMonthTotal}