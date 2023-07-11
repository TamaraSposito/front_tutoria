import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    color: ${({theme}) => theme.COLORS.GRAY};

    border: 1px solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};
    border-radius: .5rem;
    margin-top: 1.6rem;
    
    >textarea{
        width: 100%;
        height: 15rem;
        padding: .5rem;
        border: 0;
        
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.GRAY_900};

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY};
                     }
        }

        >svg{
            margin-left: 1rem;
        }

`;
