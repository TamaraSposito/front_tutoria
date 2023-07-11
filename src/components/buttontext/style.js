import styled from 'styled-components';

export const Container = styled.button`
    background:none;
    border: none;

    color: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY : theme.COLORS.CYAN};

    font-size: 1.3rem;
    font-weight: 900;


    &:hover{
        color: ${({theme}) => theme.COLORS.TULIP};
        opacity:0.5;
    }

`;