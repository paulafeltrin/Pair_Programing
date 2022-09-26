import React from "react";
import Styled from "styled-components";
import Torta from "../img/torta.png"
import Pizza from "../img/pizza.png"
import Copo from "../img/copo.png"
import Colher from "../img/colher.png"

export default funtion App(){
    return(
        <>
            <Container>
                <img src={torta}/>
                <img src={pizza}/>
                <img src={copo}/>
                <img src={colher}/>
            </Container>
        </>
    )
}