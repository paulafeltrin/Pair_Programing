import styled from "styled-components";

export const Container= styled.section`
    background-color: #F2F4F1;
`;
export const Title = styled.div`
    padding: 15vh 0 10vh 0;

    h2{
        text-align: center;
        font-size: 1.7rem;
        font-family: 'Times New Roman', Times, serif;
        color: gray;
        text-transform: uppercase;
        padding: 5vh 0;
    }
`
export const RowTitle = styled.div`
    border: 2px solid gray;
    width: 5%;
    margin: 0 auto;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 30vh;
`
export const Card = styled.div`
    width: 25%;
    box-shadow: 3px 5px 18px 3px rgba(84,84,84,0.8);
    cursor: pointer;

    img{
        width: 100%;
        padding-bottom: 5vh;
    }
    h3{
        text-align: center;
        color: gray;
        padding: 5vh 0 10vh 0;
    }
`
export const Linha = styled.div`
    border: 2px solid gray;
    width: 15%;
    margin: 0 auto;
`
export const About = styled.section`
    display: flex;

    img{
        width: 50%;
    }
`
export const Text = styled.section`
    width: 30%;
    height: 45%;
    margin: 35vh auto;

    h4{
        text-transform: uppercase;
        font-size: 1.5rem;
        color: gray;
        font-weight: bolder;
        padding: 3vh 0;
        text-align: center;
    }
    p{
        padding: 5vh 0;
    }
`
export const Form = styled.form`
    background-color: #DFE4DE;
    text-align: center;
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    padding: 15vh 0;
    letter-spacing: .2rem;

    h4{
        text-transform: uppercase;
        font-size: 1.5rem;
        padding: 0 0 3vh 0;
    }
    p{
        padding: 0 0 3vh 0;
        font-size: 1.2rem;
    }
    input{
        height: 8vh;
        width: 30vw;
        margin: 4vh auto;
    }
    button{
        background-color: #DFE4DE;
        text-transform: uppercase;
        padding: 2vh 2vw;
        margin: 0 auto;
        width: 15vw;
        cursor: pointer;
    }
`