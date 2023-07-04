import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    color: ${({theme}) => theme.COLORS.GRAY};
    
    border-radius: .5rem;
    margin-top: 1.6rem;

    >label{
        display: flex;
        align-items: center;
        padding: 0 .7rem;
    
    >select{
        width: 100%;
        height: 5.6rem;
        padding: 0 .7rem;
        border:0;
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.GRAY};
        }

        >svg{
            margin-left: 1rem;
        }
    }
`;
