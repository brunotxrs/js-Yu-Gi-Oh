import {  state  } from './state.js'
import {  drawCards  } from './draw_cards.js'



function init(){

    const widthOfScreen = window.innerWidth;

    if(widthOfScreen < 768){
        drawCards(4, state.playerSides.player1);
        drawCards(4, state.playerSides.computer);
    }else {
        drawCards(5, state.playerSides.player1);
        drawCards(5, state.playerSides.computer);
    }


}

init()