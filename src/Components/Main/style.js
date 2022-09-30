import styled from "styled-components";

export const Container= styled.section`
    background-color: #F2F4F1;

    @media(max-width: 670px){
        padding: 4rem 0 0;
    }
`;

export const Title = styled.div`
    padding: 15vh 0 10vh 0;

    h2{
        font-size: 1.7rem;
        font-family: var(--ff-one);
        font-weight: 600;
        color: #373737;
        text-transform: uppercase;
        text-align: center;
        padding: 5vh 0;
    }

    @media(max-width: 670px){
        padding: 0;

        h2{
            font-size: 40px;
            padding: 0;
        }
    }
`

export const RowTitle = styled.div`
    border: 2px solid gray;
    width: 5%;
    margin: 0 auto;

    @media(max-width: 670px){
        width: 20%;
        margin-block: 1rem 2rem;
        border: 2px solid black;
    }
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 30vh;

    @media(max-width: 670px){
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        width: 100%;
        padding-bottom: 2.5rem;
    }
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
        font-family: var(--ff-one);
        color: #373737;
        font-weight: 400;
        text-align: center;
        padding: 5vh 0 10vh 0;
    }

    @media(max-width: 670px){
        width: 100%;
        padding-inline: 1rem;
        box-shadow: 5px 5px 5px 3px rgba(84,84,84,0.5);
    }
`
export const Linha = styled.div`
    border: 2px solid gray;
    width: 15%;
    margin: 0 auto;

    @media(max-width: 670px){
        border: 2px solid black;
        width: 20%;
    }
`
export const About = styled.section`
    display: flex;

    img{
        width: 50%;
    }

    @media(max-width: 670px){
        display: block;
        text-align: center;

        img{
            width: 100%;
        }
    }
`
export const Text = styled.section`
    width: 30%;
    height: 45%;
    margin: 20vh auto;

    h4{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-family: var(--ff-one);
        color: #373737;
        font-weight: 600;
        padding: 3vh 0;
        text-align: center;
    }

    p{
        padding: 5vh 0;
        font-family: var(--ff-one);
        font-weight: 400;
        color: #373737;
    }

    
    @media(max-width: 670px){
        margin: 0;
        padding: 2rem 0.5rem;
        width: 100%;
        background-color: #FFFFFF;

        h4{
            font-size: 2.5rem;
        }

        p{
            padding: 3vh 0;
        }
    }
`
export const Form = styled.form`
    background-color: #DFE4DE;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 15vh 1rem;

    h4{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-family: var(--ff-one);
        font-weight: 600;
        letter-spacing: 2px;
        color: #373737;
        padding: 0 0 3vh 0;
    }

    p{
        font-family: var(--ff-one);
        font-weight: 400;
        letter-spacing: 1px;
        color: #373737;
        padding: 0 0 3vh 0;
        font-size: 1.2rem;
    }

    input{
        height: 8vh;
        width: 30vw;
        margin: 4vh auto;
        text-align: center;
        font-size: 2rem;
        background-color: #eff1ee;
        border: none;
    }

    input:focus{
        outline: 2px solid black;
    }

    button{
        background-color: #DFE4DE;
        text-transform: uppercase;
        font-size: 1.2rem;
        font-family: var(--ff-one);
        font-weight: 400;
        padding: 2vh 2vw;
        margin: 0 auto;
        width: 15vw;
        cursor: pointer;
    }

    @media(max-width: 670px){
        padding: 7vh 1rem;

        h4,
        p{
            font-size: 30px;
        }

        input{
            width: 100%;
        }

        button{
            width: 100%;
        }
    }
`