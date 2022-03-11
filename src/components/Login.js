import React, {useState} from 'react'
import {Header, Title, HeaderContainer} from '../elements/Header'
import Button from '../elements/Button'
import Helmet from 'react-helmet'
import {Form, Input, ButtonContainer} from '../elements/FormElements'
import ImgLogin from './../images/login-icon.png' 
import {useNavigate} from 'react-router-dom'
import {auth} from './../firebase/firebaseConfig'
import Alert from './../elements/Alert'
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({})

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    //function for the Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertState(false)
        setAlert({})

        //Test if email address is validate
        const regExp = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if(!regExp.test(email)) {
            setAlertState(true)
            setAlert({
                type: 'error',
                message: 'Please provide a valid email address.'
            })
            return
        }
        if(email === '' || password === '') {
            setAlertState(true)
            setAlert({
                type: 'error',
                message: 'Please fill all the fields.'
            })
            return
        }

        //registering users into firebase
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            setAlertState(true)
            let message
            switch(error.code){
                case 'auth/wrong-password':
                    message = 'Password is incorrect.'
                    break;
                case 'auth/user-not-found':
                    message = 'There is not account related with this email address.'
                break;
                default:
                    message = 'There was an error trying login.'
                break;
            }
            setAlert({type: 'error', message: message});
        }
    }

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
            <Form onSubmit={handleSubmit}>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input type="email" name="email" placeholder="Email" value={email} onChange={handleChange}/>
                <Input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}/>
                <ButtonContainer>
                    <Button as="button" type="submit" primary>LOGIN</Button>
                </ButtonContainer>
            </Form>

            <Alert 
                type={alert.type}
                message={alert.message}
                alertState={alertState}
                setAlertState={setAlertState}
            />
        </>
     );
}
 
export default Login;