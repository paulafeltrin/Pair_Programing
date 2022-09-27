import React from "react";

import Instagram from "../../img/instagram.png"
import Twitter from "../../img/twitter.png"
import Facebook from "../../img/facebook-icon.png"
import Pinterest from "../../img/pinterest.png"

import * as S from "../Footer/style";

export default function Footer(){
    return(
        <footer>
            <S.Container>
                <img src={Instagram}/>
                <img src={Twitter}/>
                <img src={Facebook}/>
                <img src={Pinterest}/>
            </S.Container>
        </footer>
    )
}