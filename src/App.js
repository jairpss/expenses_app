import React from 'react'
import Helmet from 'react-helmet'
import {Header, Title, HeaderContainer, BtnContainer} from './elements/Header'
import Button from './elements/Button'
import BtnLogout from './elements/BtnLogout'
import ExpenseForm from './components/ExpenseForm'
import TotalSpentBar from './components/TotalSpentBar'

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Add Expense</title>
      </Helmet>

      <Header>
        <HeaderContainer>
          <Title>Add Expense</Title>
          <BtnContainer>
            <Button to="/categories">Categories</Button>
            <Button to="/list">Expenses List</Button>
            <BtnLogout />
          </BtnContainer>
        </HeaderContainer>
      </Header>

      <ExpenseForm />

      <TotalSpentBar />
    </>
   );
}
 
export default App;