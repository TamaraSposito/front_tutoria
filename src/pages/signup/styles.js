import styled from "styled-components";
import backgroundImg from "../../assets/background.png"
import paperStarSVG from "../../assets/star.svg"


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    
`;

export const Form = styled.form`
    padding: 0 8.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_900};


    > h1 {
        font-size: 3rem;
        color: ${({theme}) => theme.COLORS.LILAC};
    }

    > h2 {
        font-size: 1.5rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        color: ${({theme}) => theme.COLORS.YELLOW};

    }

    > p {
        font-size: .9rem;
        color: ${({theme}) => theme.COLORS.GRAY_PEWTER};
    }

    > a {
        margin-top: 6.5rem;
        color: ${({theme}) => theme.COLORS.TULIP};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(.8);
`;

export const PaperStar = styled.div`
    background: url(${paperStarSVG}) no-repeat center center;
    background-size: 6rem;
    width: 6rem;
    padding: 4rem 0;
`;