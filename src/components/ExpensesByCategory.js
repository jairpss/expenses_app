import React from 'react'
import {Header, Title, HeaderContainer, BtnContainer} from '../elements/Header'
import Helmet from 'react-helmet'

const ExpensesByCategory = () => {
    return ( 
        <>
            <Helmet>
                <title>Expenses By Category</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>Expenses By Category</Title>
                </HeaderContainer>
            </Header>
        </>
     );
}
 
export default ExpensesByCategory;