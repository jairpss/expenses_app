import React from 'react'
import {Header, Title} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'


const ExpensesList = () => {

    return ( 
        <>
            <Helmet>
                <title>Expenses List</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Expenses List</Title>
            </Header>
        </>
     );
}
 
export default ExpensesList;