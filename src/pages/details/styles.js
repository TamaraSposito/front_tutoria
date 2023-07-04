import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";
    
`;

export const Content = styled.div `
    width: 100%;
    padding-bottom: 5.4rem;

    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};

    strong {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY};
        margin-top: 2rem;
    }
    
    span {
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GRAY};
            margin-top: 2rem;
    }
`;