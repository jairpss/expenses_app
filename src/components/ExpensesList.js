import React from 'react'
import {Header, Title} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'
import TotalSpentBar from './TotalSpentBar'
import useGetExpenses from './../hooks/useGetExpenses'

const ExpensesList = () => {
    const [expenses] = useGetExpenses()
    console.log(expenses)

    return ( 
        <>
            <Helmet>
                <title>Expenses List</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Expenses List</Title>
            </Header>

            <TotalSpentBar />
        </>
     );
}
 
export default ExpensesList;