import styled from 'styled-components'
import theme from './../theme'



const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Form = styled.form`
    padding: 0 3.5rem; /* 40px */
 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    input {
        width: 100%;
        text-align: center;
        padding: 1.5rem 1.5rem;
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        background-color: #FAFAFA;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }

        @media(max-width: 60rem){ 
            
        }
        @media(max-width: 40rem){ 
            
        }
    }
 
    @media(max-width: 40rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Input = styled.input` 
    font-size: 2rem; /* 40px */
    /* text-transform: uppercase; */
    font-family: 'Manrope', sans-serif;
    /* border: 2px solid ${theme.grisClaro}; */
    border: none;
    outline: none;
    border-radius: 10px;
    margin-bottom: 10px;
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.8rem; /* 24px */
        margin-bottom: 12px;
    }
    @media(max-width: 40rem){ /* 950px */
        margin-bottom: 12px;
        font-size: 1.6rem; /* 24px */
    }
`;
 
const BigInput = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;

    @media(max-width: 500px){ 
        font-size: 3.8rem; 
    }
    @media(max-width: 440px){ 
        font-size: 3.2rem; 
    }
`;
 
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */

    @media(max-width: 500px){ /* 950px */
        flex-direction: column;
    }
`;

const ButtonContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */

    @media(max-width: 812px){ /* 950px */
        flex-direction: column;
    }
`;


export {FilterContainer, Form, Input, BigInput, ButtonContainer, ButtonContainerLogin}