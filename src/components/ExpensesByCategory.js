import React from 'react'
import {Header, Title, TitleExpByCat} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'
import TotalSpentBar from './TotalSpentBar'
import useGetMonthExpenses from '../hooks/useGetMonthExpenses'
import useGetMonthExpensesByCategory from '../hooks/useGetMonthExpensesByCategory'
import {CategoryList, CategoryListElement, Category, Value} from '../elements/ListElements'
import CategoryIcon from '../elements/CategoryIcon'
import formatAmount from '../functions/convertToCurrency'

const ExpensesByCategory = () => {
    useGetMonthExpenses()
    const expensesByCategory = useGetMonthExpensesByCategory()

    return ( 
        <>
            <Helmet>
                <title>Expenses By Category</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <TitleExpByCat>Expenses By Category</TitleExpByCat>
            </Header>

            <CategoryList>
                {expensesByCategory.map((element, index) => {
                    return(
                        <CategoryListElement key={index}>
                            <Category> 
                                <CategoryIcon id={element.category}/>
                                {element.category}
                            </Category>
                            <Value>{formatAmount(element.amount)}</Value>
                        </CategoryListElement>
                    )
                })}
            </CategoryList>

            <TotalSpentBar />
        </>
     );
}
 
export default ExpensesByCategory;