import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled(Link)`
    background: ${(props) => props.primary ? '#005CE6' : '#1A1B25'};
    width: ${(props) => props.withIcon ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
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
`;

export default Button