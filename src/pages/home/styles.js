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
export const Content = styled.div`
    margin:0 auto;
    padding: 0 3rem;

    >h1{
      margin: 2.5rem 0;

    }
    >h3{
      font-size: 1.6rem;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.GRAY_900};
      padding-bottom: .8rem;
      padding-top: .8rem;
  }

  >p{
      padding-bottom: 1.4rem;
      text-align: justify;
      align-items: center;
  }
`;