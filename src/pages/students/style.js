import styled from 'styled-components'
export const Content = styled.div`
    margin: 0 auto;
    padding: 0 3rem;

    display:flex;
    flex-direction: column;

    `;

export const Small = styled.p`
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.GRAY};
    padding-left: 3rem;
    padding-top: .5rem;
`; 