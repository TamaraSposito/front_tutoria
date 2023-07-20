import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    grid-area: menu;

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 8.5rem auto 8.5rem;
    grid-template-areas:
    "brand"
    "menu"
    "newRegister";

    background-color:  ${({theme}) => theme.COLORS.GRAY_900};
`;

export const Brand = styled.div`
    grid-area: brand;
    height: 8.5rem;
    margin: 2.6rem auto ;
    
    >h1{
        font-size: 2rem;
        color: ${({theme}) => theme.COLORS.LILAC};
        text-align: center;
    };

`

export const Menu = styled.div` 
    grid-area: menu;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 3rem auto;

    >a{
        display: flex;
        align-items: center;

        text-decoration: none;
        padding-bottom: 3rem;
        color: ${({theme}) => theme.COLORS.CYAN};
        gap: .7rem;

        >svg{
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.PINK};
            opacity: .8;
            }
    
    &:hover{
        color: ${({theme}) => theme.COLORS.TULIP};
        }
    }
`;
export const NewRegister = styled(Link)`
    grid-area: newRegister;

    background-color: ${({theme}) => theme.COLORS.YELLOW};
    color: ${({theme}) => theme.COLORS.GRAY_900};
    font-weight: 700;

    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
`;