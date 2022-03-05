import React from 'react'
import {Header, Title, HeaderContainer} from '../elements/Header'
import Button from '../elements/Button'
import Helmet from 'react-helmet'
import {Form, Input, ButtonContainer} from '../elements/FormElements'
import ImgLogin from './../images/login-icon.png' 

const Login = () => {
    return ( 
        <>
            <Helmet>
                <title>Login</title> 
            </Helmet>

            <Header>
                    <HeaderContainer>
                       <Title>Login</Title> 
                       <div>
                           <Button to="/signup">SING UP</Button>
                       </div>
                    </HeaderContainer>
            </Header>
            <Form>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input type="email" name="email" placeholder="Email"/>
                <Input type="password" name="password" placeholder="Password"/>
                <ButtonContainer>
                    <Button as="button" type="submit" primary>LOGIN</Button>
                </ButtonContainer>
            </Form>
        </>
     );
}
 
export default Login;