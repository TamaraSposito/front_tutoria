import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    color: ${({theme}) => theme.COLORS.GRAY};
    
    margin-top: 1.6rem;
    height: 5.6rem;

    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};
    padding: 0 .7rem;

    >label{
        width: 10%;
        align-items: center;
        padding: 0 .7rem;
        
        >select{
            width: 80%;
            padding: 0 .7rem;
            border:none;
            background: none;
        
            color: ${({theme}) => theme.COLORS.GRAY};
        }
    }

        >svg{
            margin-left: 1rem;
        }

`;