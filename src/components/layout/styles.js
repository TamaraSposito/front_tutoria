import styled from "styled-components";

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