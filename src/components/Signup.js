import React, {useState} from 'react'
import {Header, Title, HeaderContainer} from '../elements/Header'
import Button from '../elements/Button'
import Helmet from 'react-helmet'
import {Form, Input, ButtonContainer} from '../elements/FormElements'
import ImgLogin from './../images/icon-signup.png' 

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    //function to detect change in each input 
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)
                break;
        }
    }

    //function for the Form
    const handleSubmit = (e) => {
        e.preventDefault();

        //Test if email address is validate
        const regExp = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if(!regExp.test(email)) {
            console.log('email invalid')
            return
        }
        if(email === '' || password === '' || password2 === '') {
            console.log('fill all the fields')
            return
        }
        if(password !== password2){
            console.log('password does not match')
            return
        }
    }

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
            <Form onSubmit={handleSubmit}>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
                <Input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}/>
                <Input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={handleChange}/>
                <ButtonContainer>
                    <Button as="button" type="submit" primary>Create Account</Button>
                </ButtonContainer>
            </Form>
        </>
     );
}
 
export default Signup;