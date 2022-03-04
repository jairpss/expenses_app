import React from 'react'
import {Header, Title, HeaderContainer} from '../elements/Header'
import Button from '../elements/Button'
import Helmet from 'react-helmet'
import {Form, Input, BigInput, ButtonContainer} from '../elements/FormElements'
import ImgLogin from './../images/icon-signup.png' 

const Signup = () => {
    return ( 
        <>
            <Helmet>
                <title>Sign Up</title> 
            </Helmet>

            <Header>
                    <HeaderContainer>
                       <Title>Create Account</Title> 
                       <div>
                           <Button to="/login">LOGIN</Button>
                       </div>
                    </HeaderContainer>
            </Header>
            <Form>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input type="email" name="email" placeholder="Email"/>
                <Input type="password" name="password" placeholder="Password"/>
                <Input type="password" name="passwor2" placeholder="Confirm Password"/>
                <ButtonContainer>
                    <Button as="button" type="submit" primary>Create Account</Button>
                </ButtonContainer>
            </Form>
        </>
     );
}
 
export default Signup;