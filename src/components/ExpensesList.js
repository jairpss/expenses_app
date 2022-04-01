import React from 'react'
import {Header, Title} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'
import TotalSpentBar from './TotalSpentBar'
import useGetExpenses from './../hooks/useGetExpenses'
import { 
    List,
    ListElement,
    CategoryList,
    CategoryListElement,
    Category,
    Description,
    Value,
    Dates,
    BtnContainer,
    BtnAction,
    BtnLoadMore,
    BtnMainContainer,
    SubtitleContainer,
    Subtitle 
} from './../elements/ListElements'
import CategoryIcon from './../elements/CategoryIcon'
import formatAmount from './../functions/convertToCurrency'
import {ReactComponent as EditIcon} from './../images/editar.svg'
import {ReactComponent as DeleteIcon} from './../images/borrar.svg'
import {Link} from 'react-router-dom'
import Button from './../elements/Button'
import {format, fromUnixTime} from 'date-fns'


const ExpensesList = () => {
    const [expenses] = useGetExpenses()
    
    const dateFormat = (date) => {
        return format(fromUnixTime(date), "MMMM dd',' yyyy")
    }

    const sameDate = (expenses, index, expense) => {
        if(index !== 0) {
            const currentDate = dateFormat(expense.date)
            const previousDate = dateFormat(expenses[index -1].date)

            if(currentDate === previousDate) {
                return true
            } else {
                return false
            }
        }
    }

    return ( 
        <>
            <Helmet>
                <title>Expenses List</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Expenses List</Title>
            </Header>
            <List>
                {expenses.map((expense, index) => {
                    return (
                        <div key={expense.id}>
                            {!sameDate(expenses, index, expense) && <Dates>{dateFormat(expense.date)}</Dates>}
                        
                            <ListElement key={expense.id}>
                                <Category>
                                    <CategoryIcon id={expense.category}/>
                                    {expense.category}
                                </Category>
                                <Description>
                                    {expense.description}
                                </Description>
                                <Value>{formatAmount(expense.amount)}</Value>

                                <BtnContainer>
                                    <BtnAction as={Link} to={`/edit/${expense.id}`}>
                                        <EditIcon />
                                    </BtnAction>
                                    <BtnAction>
                                        <DeleteIcon />
                                    </BtnAction>
                                </BtnContainer>
                            </ListElement>
                        </div>
                    )
                })}

                <BtnMainContainer>
                    <BtnLoadMore>Load More</BtnLoadMore>
                </BtnMainContainer>

                {expenses.length === 0 &&
                    <SubtitleContainer>
                        <Subtitle>You don't have any expense :(</Subtitle>
                        <Button as={Link} to={'/'}>Add Expense</Button>
                    </SubtitleContainer>
                }
            </List>
            <TotalSpentBar />
        </>
     );
}
 
export default ExpensesList;