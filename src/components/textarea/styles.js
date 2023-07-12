import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    color: ${({theme}) => theme.COLORS.GRAY};

    border: 1px solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};
    border-radius: 2rem;
    margin-top: 1.6rem;
    
    >textarea{
        width: 100%;
        height: 10rem;
        padding: 1rem 1.7rem;
        border: 0;

        background: transparent;
        color: ${({theme}) => theme.COLORS.GRAY_900};

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY};
         }
        }
`;