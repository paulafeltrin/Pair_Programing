import React from "react";
import Styled from "styled-components";

import Instagram from "../img/instagram.png"
import Twitter from "../img/twitter.png"
import Facebook from "../img/facebook.png"
import Pinterest from "../img/pinterest.png"

export default function App (){
    return(
        <Container>
            <img src={instagram}/>
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={pinterest}/>
        </Container>
    )
}