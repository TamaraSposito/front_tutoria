import styled from "styled-components";

export const Container = styled.div`
    grid-area: menu;

    width: 20rem;
    height: 100%;

    background-color:  ${({theme}) => theme.COLORS.GRAY_900};
    padding: 2.5rem 3.6rem;
    margin: 0;

    >div{
        text-align: center;
        height: 8.5rem;
        >h1{
            font-size: 3rem;
            color: ${({theme}) => theme.COLORS.LILAC};
        }
    }

    >menu{
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        >a{
            display: flex;
            align-items: center;

            text-decoration: none;
            padding-bottom: 3rem;
            color: ${({theme}) => theme.COLORS.CYAN};
            gap: .7rem;

            >svg{
                font-size: 1.6rem;
                color: ${({theme}) => theme.COLORS.PINK};
                opacity: .8;
            }
        }
        >a:hover{
                color: ${({theme}) => theme.COLORS.TULIP};
            }

}
`