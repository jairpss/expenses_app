import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import WebFont from 'webfontloader'
import Container from './elements/Container'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './components/Login'
import Signup from './components/Signup'
import EditExpense from './components/EditExpense'
import ExpensesList from './components/ExpensesList'
import ExpensesByCategory from './components/ExpensesByCategory'
import {Helmet} from "react-helmet"
import favicon from './images/monedas.png'
import {AuthProvider} from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import {TotalSpentProvider} from './context/TotalMonthSpentContext'

WebFont.load({
  google: {
    families: ['Manrope:400,500,600,700,800,900', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <TotalSpentProvider>
          <BrowserRouter>
            <Container>
              <Routes>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>

                  <Route path="/categories" element={
                    <PrivateRoute>
                        <ExpensesByCategory />
                    </PrivateRoute>
                  }/>

                  <Route path="/list" element={
                    <PrivateRoute>
                        <ExpensesList />
                    </PrivateRoute>
                  }/>

                  <Route path="/edit/:id" element={
                    <PrivateRoute>
                        <EditExpense />
                    </PrivateRoute>
                  }/>

                  <Route path="/" element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                  }/>
              </Routes>
            </Container>
          </BrowserRouter>
        </TotalSpentProvider>
      </AuthProvider>
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
