import React from 'react';
import Torta from '../../Assets/torta.png';
import Pizza from "../../Assets/pizza.png";
import Copo from "../../Assets/copo.png";
import Colher from "../../Assets/colher.png";
import * as S from "../Main/style"

export default function Main(){
    return(
        <>
            <S.Container>
                <S.Title>
                    <h2>Latest Recipes</h2>
                    <S.RowTitle></S.RowTitle>
                </S.Title>
                <S.Menu>
                    <S.Card>
                        <img src={Torta} alt="torta" />
                        <S.Linha></S.Linha>
                        <h3>Red Velvet Cake</h3>
                    </S.Card>
                    <S.Card>
                        <img src={Pizza} alt="pizza" />
                        <S.Linha></S.Linha>
                        <h3>Margherita Pizza</h3>
                    </S.Card>
                    <S.Card>
                        <img src={Copo} alt="copo" />
                        <S.Linha></S.Linha>
                        <h3>Peanut Smoothie</h3>
                    </S.Card>
                </S.Menu>
                
                <S.About>
                    <img src={Colher} alt="colher" />
                    <S.Text>
                        <h4>ABOUT</h4>
                        <S.Linha></S.Linha>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
                    </S.Text>
                </S.About>
                <S.Form>
                    <h4>SUBSCRIBE</h4>
                    <p>Sign up for newsletter</p>
                    <input type="email" />
                    <button>Submit</button>
                </S.Form>
            </S.Container>
        </>
    )
}
