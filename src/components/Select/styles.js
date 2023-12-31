import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    color: ${({theme}) => theme.COLORS.GRAY};
    
    margin-top: 1.6rem;
    height: 4rem;

    border-radius: 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};
    padding: 0 .7rem;

    >select{
        width: 95%;
        padding: 0 .4rem;
        border: none;
        background: none;

        color: ${({theme}) => theme.COLORS.GRAY};
    }
    >svg{
        margin-left: 1.5rem;
        width: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK};
         
    }
`;