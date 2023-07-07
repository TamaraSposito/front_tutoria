import styled from "styled-components";

export const Container = styled.header `
    grid-area: header;

    height: 10.5rem;
    width: 100%;
    
    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
    
    
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    /* display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
    "image profile logout"; */

    background-color: ${({theme})=> theme.COLORS.GRAY_900};
    padding: 0 5rem;
`;
export const Image = styled.svg`
    width: 64px;
    height: 64px;
    padding: 0 1rem;
    background: transparent;
`;

export const Profile = styled.div `
    width: 90%;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    gap: .75rem;

    >div{
        display: flex;
        flex-direction: column;
        line-height: 2rem;

        span{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
        }

        strong {
            font-size: 1.8rem;
            color: ${({theme}) => theme.COLORS.TULIP}
         }
    }
`;

export const Logout = styled.button `
    width: 5%;
    padding: 0 1rem;
    
    border: none;
    background: transparent;

     > svg {
         color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
         font-size: 30px;
         cursor: pointer;

         path {
             cursor: pointer;
         }
     }
`;