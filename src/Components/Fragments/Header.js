import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.header`
width:100%;
display:flex;
justify-content: center;
background-color: lightpink;
padding: 3vh 0;

    ul{
        display: flex;
        align-items: center;
        width: 40%;
        justify-content: space-around;
    }
    li{
        list-style: none;
    }
    h1{
        align-self: center;
    }
`
const Button = styled.button`
    background-color: salmon;
    cursor: pointer;
    padding: 2vh 2vw;
    border-radius: 5px;
    border: none;
    margin: 5vh 0;
`

export default function Header(){
    return(
        <>
            <Container>
                <Link to='/'><Button>Voltar</Button></Link>
                <ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </ul>
                <h1>RECIPES</h1>
            </Container>
        </>
    );
}