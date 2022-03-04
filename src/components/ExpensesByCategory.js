import React from 'react'
import {Header, Title, HeaderContainer, BtnContainer} from '../elements/Header'
import Helmet from 'react-helmet'
import BackBtn from '../elements/BackBtn'

const ExpensesByCategory = () => {
    return ( 
        <>
            <Helmet>
                <title>Expenses By Category</title>
            </Helmet>

            <Header>
                    <BackBtn />
                    <Title>Expenses By Category</Title>
            </Header>
        </>
     );
}
 
export default ExpensesByCategory;