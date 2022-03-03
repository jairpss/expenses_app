import React from 'react'
import Helmet from 'react-helmet'
import {Header, Title, HeaderContainer, BtnContainer} from './elements/Header'
import Button from './elements/Button'

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
            <Button to="/">X</Button>
          </BtnContainer>
        </HeaderContainer>
      </Header>
    </>
   );
}
 
export default App;