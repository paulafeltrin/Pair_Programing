import React from 'react';
import Torta from '../../Assets/torta.png';
import Pizza from "../../Assets/pizza.png";
import Copo from "../../Assets/copo.png";
import Colher from "../../Assets/colher.png";

import styled from "styled-components";

const Section = styled.main`
display: flex;
flex-direction: column;
background-color: red;

img{
    width: 50%;
    margin: 0 auto;
    padding: 5vh 0;
}
`
export default function Main(){
    return(
        <>
            <Section>
                <img src={Torta} alt="torta" />
                <img src={Pizza} alt="pizza" />
                <img src={Copo} alt="copo" />
                <img src={Colher} alt="colher" />
            </Section>
        </>
    )
}
