import React from 'react';
import Header from '../Fragments/Header'
import Footer from '../Fragments/Footer'

import Torta from "../img/torta.png";
import Pizza from "../img/pizza.png";
import Copo from "../img/copo.png";
import Colher from "../img/colher.png";

import styled from "styled-components";

const Main = styled.main`
display: flex;
flex-direction: column;
background-color: red;

img{
    width: 50%;
    margin: 0 auto;
    padding: 5vh 0;
}
`

export default function main(){
    return(
        <>
            <Header />
            <Main>
                <img src={Torta} alt="imagem de uma torta" />
                <img src={Pizza} alt="imagem de uma pizza" />
                <img src={Copo} alt="imagem de um copo" />
                <img src={Colher} alt="imagem de uma colher" />
            </Main>
            <Footer />
        </>
    )
}
