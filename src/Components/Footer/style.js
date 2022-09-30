import styled from "styled-components";

export const Container= styled.section`
    padding: 10vh 3vw;
    background-color: #F2F4F1;
    display: flex;
    justify-content: space-between;

    img{
        margin: 0 0 0 0.5vw;
        cursor: pointer;
    }

    @media(max-width: 670px){
        padding: 6vh 3vw 4vh;
        display: flex;
        flex-direction: column-reverse;
        text-align: center;

        img{
            padding: 5vh 0;
            margin-left: 1rem;
            cursor: pointer;
        }
    }
`
export const List = styled.ul`
    display: flex;
    gap: clamp(1rem, 5vw, 6rem);
    list-style: none;

    li{
        padding: 1vh 2vw;
        font-size: 1.25rem;
        font-family: var(--ff-one);
        font-weight: 400;
        color: #373737;
        cursor: pointer;
    }

    li:hover,
    li:focus{
        outline: 5px solid #373737;
    }

    @media(max-width: 900px){
        li{
            padding: 0.7vh 1.7vw;
        }
    }

    @media(max-width: 670px){
        display: flex;
        flex-direction: column;
    }
`;

export const Div = styled.div`
    width: 100%;
    background-color: #446061;
    padding: 1rem 0.5rem;

    p{
        width: 100%;
        font-size: 0.70rem;
        font-family: var(--ff-one);
        font-weight: 400;
        text-align: center;
        color: white;
    }

    @media screen and (max-width: 570px){
        p{
            word-break: break-all;
        }
    }
`;
