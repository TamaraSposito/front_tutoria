import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 8.5rem;
    width: 100%;
    
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme})=> theme.COLORS.GRAY_900};
    padding: 0 2rem;
`;
export const Image = styled.svg`
    width: 64px;
    height: 64px;
    padding: 0 1rem;
    background: transparent;
`;

export const Profile = styled(Link)`
    width: 90%;
    padding: 0 .5rem;

    display: flex;
    align-items: center;
    gap: .75rem;

    >div{
        display: flex;
        flex-direction: column;
        line-height: 2rem;

        span{
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.BEIGE_IVORY};
        }

        strong {
            font-size: 1.6rem;
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
         color: ${({theme}) => theme.COLORS.PINK};
         font-size: 2rem;
         cursor: pointer;

         path {
             cursor: pointer;
         }
     }
`;