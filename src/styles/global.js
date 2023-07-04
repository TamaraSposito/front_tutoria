import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
        /*10px/16px = 0.625 * 100 = 62.5% === 1rem = 10px */
    }
    body {
        background-color: ${({theme}) => theme.COLORS.BEIGE};
        color: ${({theme}) => theme.COLORS.GRAY_900};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }
    a {
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: filter .2s;
    }
    button:hover, a:hover {
        filter: brightness(.9);
    }
`;