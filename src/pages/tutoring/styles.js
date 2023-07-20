import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 8.5rem auto;
    grid-template-columns: 20rem auto;
    grid-template-areas:
    "menu header"
    "menu content";
    
    >main{
        grid-area: content;
        overflow-y: auto;
        padding: 1rem 0;
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    padding: 0 3rem;

    display:flex;
    flex-direction: column;


    >section{
       margin-bottom: 3rem;
        >p{
            padding: .875rem 0;
            text-align: justify;
            align-items: center;

        >span {
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY};
            padding-left: .5rem;
        }
        >strong {
            font-size: 1.2rem;
            font-weight: 900;
            color: ${({theme}) => theme.COLORS.GRAY};
            padding-right: .5rem;
        }

        >svg{
            height: 1rem;
            color: ${({theme}) => theme.COLORS.GRAY}; 
        }
    }
}
`;