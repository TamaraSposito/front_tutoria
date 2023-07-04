import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 6.5rem;
    width: 100%;

    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_PEWTER};

    display: flex;
    justify-content: space-between;

    padding: 0 8rem;

`;

export const Profile = styled.div`
    display:flex;
    align-items: center;
    gap: 2rem;

    >div{
        display: flex;
        flex-direction: column;
        line-height: 1.6rem;

        span{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY};
        }

        strong {
            font-size: 1.6rem;
            color: ${({theme}) => theme.COLORS.GRAY_900}
         }
    }
`;

export const Logout = styled.button`
     border: none;
     background: transparent;

     > svg {
         color: ${({theme}) => theme.COLORS.GRAY};
         font-size: 2.5rem;
         cursor: pointer;

         path {
             cursor: pointer;
         }
     }
`;
