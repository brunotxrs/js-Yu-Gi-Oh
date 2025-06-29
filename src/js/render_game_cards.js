import {  state  } from './state.js';
import {  drawCards  } from './draw_cards.js';
import {  showHiddenCardFieldsImages  } from './show_hidden_card_fields_images.js';

async function renderGameCards() {
    state.fieldCards.player.innerHTML = '';
    state.fieldCards.computer.innerHTML = '';

    showHiddenCardFieldsImages(false)

    const widthOfScreen = window.innerWidth;
    if (widthOfScreen < 768) {
        drawCards(4, state.playerSides.player1);
        drawCards(4, state.playerSides.computer);
    } else if(widthOfScreen > 768) {
        drawCards(5, state.playerSides.player1);
        drawCards(5, state.playerSides.computer);
    }
}


export {  renderGameCards  };
