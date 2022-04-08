import { useState, useEffect } from 'react'
import useGetMonthExpenses from './useGetMonthExpenses'

const useGetMonthExpensesByCategory = () => {
    const [expensesByCategory, setExpensesByCategory] = useState([])
    const expenses = useGetMonthExpenses()
    
    useEffect(() => {
        const expensesSum = expenses.reduce((resObject, currentObject) => {
            const currentCategory = currentObject.category
            const currentAmount = currentObject.amount
   
            resObject[currentCategory] += currentAmount
   
            return resObject
        }, {
           'food': 0,
           'bills': 0,
           'fun': 0,
           'home': 0,
           'transport': 0,
           'clothing': 0,
           'health': 0,
           'shopping': 0, 
       })
       
       setExpensesByCategory(Object.keys(expensesSum).map((element) => {
           return {category: element, amount: expensesSum[element]}
       }))
    }, [expenses, setExpensesByCategory])

    return expensesByCategory
}
 
export default useGetMonthExpensesByCategory
