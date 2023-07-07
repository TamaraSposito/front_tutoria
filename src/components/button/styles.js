import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_900};
    color: ${({theme}) => theme.COLORS.BEIGE_IVORY};

    height: 5.6rem;
    border:0;
    border-radius: 5px;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    font-weight: 700;

    &:disabled{
        opacity:0.5;
    }

`;