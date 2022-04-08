import React from 'react'
import {Header, Title, HeaderContainer, BtnContainer} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'
import TotalSpentBar from './TotalSpentBar'
import useGetMonthExpenses from '../hooks/useGetMonthExpenses'
import useGetMonthExpensesByCategory from '../hooks/useGetMonthExpensesByCategory'

const ExpensesByCategory = () => {
    useGetMonthExpenses()
    useGetMonthExpensesByCategory()

    return ( 
        <>
            <Helmet>
                <title>Expenses By Category</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Expenses By Category</Title>
            </Header>

            <TotalSpentBar />
        </>
     );
}
 
export default ExpensesByCategory;