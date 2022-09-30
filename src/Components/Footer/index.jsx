import React from "react";
import Instagram from "../../Assets/instagram.png"
import Twitter from "../../Assets/twitter.png"
import Facebook from "../../Assets/facebook.png"
import Pinterest from "../../Assets/pinterest.png"
import * as S from "../Footer/style";

export default function Footer(){
    return(
        <footer>
            <S.Container>
                <div>
                    <img src={Instagram} alt="Instagram" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={Facebook} alt="Facebook" />
                    <img src={Pinterest} alt="Pinterest" />
                </div>
                <div>
                    <S.List>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </S.List>
                </div>
            </S.Container>
            <S.Div>
                <p>Layout produzido por Vai na Web 
                    para fins exclusivamente 
                    educacionais. 
                    Referência: 
                    https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</p>
            </S.Div>
        </footer>
    )
}