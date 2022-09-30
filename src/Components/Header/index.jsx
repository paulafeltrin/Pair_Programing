import React from "react";
import Logo from "../../Assets/header_logo.svg"
import * as S from "./style"


export default function Header(){
    return(
        <>
            <S.Container>
                <div>
                    <img src={Logo} alt="Logo" />
                    <nav>
                        <S.Button><span>Menu</span></S.Button>
                        <S.List>
                            <li>ABOUT</li>
                            <li>RECIPES</li>
                            <li>SUBSCRIBE</li>
                        </S.List>
                    </nav>
                </div>
                <h1>RECIPES</h1>
            </S.Container>
        </>
    );
}