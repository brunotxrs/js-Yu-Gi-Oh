import {  state  } from './state.js'

async function removeAllCardsImages() {
    
    let { computerBOX, player1BOX  } = state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
  
    imgElements = player1BOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());


}

export {  removeAllCardsImages  }