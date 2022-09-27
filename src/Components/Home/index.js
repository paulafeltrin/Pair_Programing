import React from 'react';
import {Link} from 'react-router-dom';

import styled from "styled-components";

const Section = styled.section`
width: 80%;
margin: 10vh auto;
background-color: lightpink;
text-align: center;
font-size: 2.2rem;
padding: 3vh 0;

    button{
        color: pink;
        background-color: salmon;
        cursor: pointer;
        padding: 2vh 2vw;
        border-radius: 5px;
        border: none;
        margin: 5vh 0;
    }
`

export default function Home(){
    return(
        <>
            <Section>
                <h1>Bem-Vindo!</h1>
                <Link to='main'><button>Clique aqui!</button></Link>
                <p>Esta é a página onde há tudo sobre culinária e artigos de cozinha!</p>
            </Section>
        </>
    )
}