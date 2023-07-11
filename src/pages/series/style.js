import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
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

    >div{
        background-color: white;
        border-radius: 20px;
        box-shadow: 2px 3px 3px gray;
        padding: 2.5rem 3.6rem 3.6rem 3.6rem;
        margin: 3rem 2rem;
        
        >button:last-child{
            margin-top: 2rem;
        }
    }
    `;