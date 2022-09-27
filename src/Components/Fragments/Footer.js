import React from "react";

import Instagram from "../img/instagram.png"
import Twitter from "../img/twitter.png"
import Facebook from "../img/facebook-icon.png"
import Pinterest from "../img/pinterest.png"

import styled from "styled-components";

const Div = styled.div`
color: black;
display: flex;
justify-content: center;
background-color: lightsalmon;

    img{
        width: 8vw;
        padding: 2vw 2vh;
        cursor: pointer;
    }
`

export default function Footer(){
    return(
        <footer>
            <Div>
                <img src={Instagram}/>
                <img src={Twitter}/>
                <img src={Facebook}/>
                <img src={Pinterest}/>
            </Div>
        </footer>
    )
}