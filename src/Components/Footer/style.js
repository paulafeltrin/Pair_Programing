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
`
export const List = styled.ul`
    display: flex;
    gap: clamp(1rem, 5vw, 6rem);
    list-style: none;

    li{
        padding: 1rem 2rem;
        font-weight: 400;
        cursor: pointer;
    }

    li:hover,
    li:focus{
        outline: 5px solid #373737;
    }
`;
