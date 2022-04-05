import React from 'react'
import {Header, Title, HeaderContainer, BtnContainer} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'
import TotalSpentBar from './TotalSpentBar'
import ExpenseForm from './ExpenseForm'
import {useParams} from 'react-router-dom'
import useGetExp from '../hooks/useGetExp'

const EditExpense = () => {
    const {id} = useParams()
    const [expense] = useGetExp(id)

    return ( 
        <>
            <Helmet>
                <title>Edit Expense</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Edit Expense</Title>
            </Header>
            <ExpenseForm />
            <TotalSpentBar />
        </>
     );
}
 
export default EditExpense;