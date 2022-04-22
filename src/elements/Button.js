import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled(Link)`
    background: ${(props) => props.primary ? '#005CE6' : '#1A1B25'};
    width: ${(props) => props.withIcon ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; 
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 2rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
 
    svg {
        height: ${(props) => props.bigIcon ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
    @media(max-width: 500px){ 
        width:100% ;
        margin: 5px 0;
        justify-content:center;

    }
`;

const LoginButton = styled(Link)`
    background: #005CE6;
    width: auto;  
    border: none;
    border-radius: 0.625rem; 
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; 
    padding: 2.2rem 5rem; 
    font-size: 1.5rem; 
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;

    @media(max-width: 60rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
        margin-bottom: 15px;
    }
    @media(max-width: 40rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
        margin-bottom: 10px;
    }
`;

const SignUpButton = styled(Link)`
    background: #005CE6;
    width: auto;  
    border: none;
    border-radius: 0.625rem; 
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; 
    padding: 2.2rem 3.6rem; 
    font-size: 1.5rem; 
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;

    @media(max-width: 60rem){ 
        text-align: center;
        padding: 2.4rem 4rem;
    }
    @media(max-width: 40rem){ 
        text-align: center;
        padding: 2.4rem 4rem;
    }
`;

const SignLogBtn = styled(Link)`
    background: #1A1B25;
    width: auto;  
    border: none;
    border-radius: 0.625rem; 
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; 
    padding: 2.2rem 4.5rem; 
    font-size: 1.5rem; 
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    

    @media(max-width: 60rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
        display: none;
    }
    @media(max-width: 40rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
    }
`;

const SignLogBtnMobile = styled(Link)`
    background: #1A1B25;
    width: auto;  
    border: none;
    border-radius: 0.625rem; 
    color: #fff;
    font-family: 'Manrope', sans-serif;
    height: 3.75rem; 
    padding: 2.2rem 4.5rem; 
    font-size: 1.5rem; 
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    display: none;

    @media(max-width: 60rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
        display: block;
    }
    @media(max-width: 40rem){ 
        text-align: center;
        padding: 2.4rem 8rem;
    }
`;

export { Button, LoginButton, SignUpButton, SignLogBtn, SignLogBtnMobile}