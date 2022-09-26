import React from "react";
import Styled from "styled-components";
import Bancada from "../img/bancada.png"

const Container = styled.section`
width:100%
heigth:40vh;
display:flex;
align-items:center;

`
export default function App(){
    return(
        <>
            <Container>
                <List>
                    <ul>ABOUT</ul>
                    <ul>RECIPES</ul>
                    <ul>SUBSCRIBE</ul>
                </List>
                <img{bancada}/>
                <h1>RECIPES</h1>
            </Container>
        </>
    );
}