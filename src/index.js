import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import WebFont from 'webfontloader'
import Container from './elements/Container'
import {BrowserRouter, Route, Switch} from 'react-router-dom' 

WebFont.load({
  google: {
    families: ['Manrope:400,500,600,700,800', 'sans-serif']
  }
});

const Index = () => {
  return (
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
    
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
