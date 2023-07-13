import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
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
    margin:0 auto;
    padding: 0 3rem;

    display:flex;
    flex-direction: column;


    >section{

        >button{
        width: 50%;
    }
}
    `;