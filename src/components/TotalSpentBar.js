import React from 'react';
import styled from 'styled-components'
import theme from './../theme'
import convertToCurrency from './../functions/convertToCurrency'
import {useMonthTotal} from './../context/TotalMonthSpentContext'

const TotalBar = styled.div`
    background: ${theme.verde};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #1A1B25;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 500px) { 
        flex-direction: column;
        font-size: 14px;
    }
`;

const TotalSpentBar = () => {
    const {total} = useMonthTotal()

    return ( 
        <TotalBar>
            <p>Total spent in the month:</p>
            <p>{convertToCurrency(total)}</p>
        </TotalBar>
     );
}
 
export default TotalSpentBar;