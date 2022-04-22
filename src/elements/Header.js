import styled from 'styled-components'

const Header = styled.div`
width: 100%;
padding: 3.5rem; /* 40px */
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 60rem){ /* 950px */
    padding: 40px 32px; /* 40px */
}

@media(max-width: 560px){ /* 950px */
    padding: 40px 20px; /* 40px */
}
`;

const Title = styled.h1`
font-weight: 800;
text-transform: uppercase;
font-size: 2.5rem; /* 40px */


@media(max-width: 700px){ 
    font-size: 32px;
    /* margin-bottom: 15px; */
}

@media(max-width: 440px){ 
    font-size: 24px; 
    /* margin-bottom: 15px; */
}

@media(max-width: 367px){ 
    font-size: 20px; 
    /* margin-bottom: 15px; */
}

`;

const TitleExpByCat = styled.h1`
font-weight: 800;
text-transform: uppercase;
font-size: 2.5rem; /* 40px */


@media(max-width: 700px){ 
    font-size: 32px;
    /* margin-bottom: 15px; */
}

@media(max-width: 532px){ 
    font-size: 28px; 
    /* margin-bottom: 15px; */
}

@media(max-width: 477px){ 
    font-size: 26px; 
    /* margin-bottom: 15px; */
}

@media(max-width: 452px){ 
    font-size: 24px; 
    /* margin-bottom: 15px; */
}

@media(max-width: 425px){ 
    font-size: 20px; 
    /* margin-bottom: 15px; */
}

@media(max-width: 370px){ 
    font-size: 18px; 
    /* margin-bottom: 15px; */
}
`;

const HeaderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

@media(max-width: 60rem){ /* 950px */
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
        display: flex;
        margin-bottom: 1.25rem; /* 20px */
        justify-content: end;
    }
}
`;

const BtnContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 500px){ 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 15px;
}
`;

export {Header, Title, TitleExpByCat, HeaderContainer, BtnContainer}