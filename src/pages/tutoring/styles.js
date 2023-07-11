import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 8.5rem auto;
    grid-template-areas:
    "menu header"
    "menu content";
    
    >main{
        grid-area: content;
        overflow-y: auto;
        padding: 1rem 0;
    }
`;

export const Content = styled.div `
    margin: 0 auto;
    padding: 0 10rem;
    

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
        margin: 3rem 2rem;
        
        >h1{
            color: ${({theme}) => theme.COLORS.GRAY_900};
        }

        >p{
            padding: 2rem 0;
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
        }
    }
        >button:last-child{
            margin-top: 2rem;
        }
    }
    `;