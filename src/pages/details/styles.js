import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";
    
    >main{
        grid-area: content;
        overflow-y: auto;
        padding: 1rem 0;

    }
`;

export const Content = styled.div `
    margin:0 auto;

    display:flex;
    flex-direction: column;

    >button:first-child{
        align-self: flex-end;
        padding: 0 6rem;
    }

    >div{
        background-color: white;
        border-radius: 20px;
        box-shadow: 2px 3px 3px gray;
        padding: 2.5rem 3.6rem 3.6rem 3.6rem;
        margin: 5.5rem 2rem;
        
        >h1{
            font-size: 3.6rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GRAY_900};
        }

        >strong {
            font-size: 1.4rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY};
            margin-top: 2rem;
        }
    
        >span {
            font-size: 1.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.GRAY};
            margin-top: 2rem;
        }

        >button:last-child{
            margin-top: 2rem;
        }
    }
    `;