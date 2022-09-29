import styled from "styled-components";

export const Container= styled.section`
    padding: 10vh 3vw;
    background-color: #F2F4F1;
    display: flex;
    justify-content: space-between;

    img{
        width: 3vw;
        margin: 0 0 0 0.5vw;
        cursor: pointer;
    }
    @media(max-width: 500px){
        display: flex;
        flex-direction: column-reverse;
        text-align: center;

        img{
            width: 10vw;
            padding: 5vh 0;
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
        font-weight: 400;
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
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
    }
`;
