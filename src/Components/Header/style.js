import styled from "styled-components";
import Bancada from "../../Assets/bancada.png"

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 20px solid white;
    background-image: url(${Bancada});
    background-size: 100% 100%;
    /* background-size: cover; */
    /* background-position-y: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-block: auto;
        font-size: clamp(2.5rem, 7.5vw, 10rem);
        font-family: var(--ff-one);
        font-weight: 600;
        color: #373737;
    }

    div{
        width: 100%;
        padding: 2rem 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const List = styled.ul`
    display: flex;
    gap: clamp(1rem, 5vw, 6rem);
    list-style: none;

    li{
        padding: 1rem 2rem;
        font-size: 1.25rem;
        font-family: var(--ff-one);
        font-weight: 400;
        cursor: pointer;
    }

    li:hover,
    li:focus{
        outline: 5px solid #373737;
    }
    @media(max-width: 500px) {
        display: none;
    }
`;