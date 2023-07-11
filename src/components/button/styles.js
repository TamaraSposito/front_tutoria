import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_900};
    color: ${({theme}) => theme.COLORS.BEIGE_IVORY};

    height: 5.6rem;
    border: .2rem solid;
    border-color: ${({theme}) => theme.COLORS.LILAC};
    border-radius: 10rem;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    font-weight: 700;

    &:disabled{
        opacity:0.8;
    }

`;