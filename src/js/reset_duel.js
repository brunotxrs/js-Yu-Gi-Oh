import {  state  } from './state.js';
import {  renderGameCards  } from './render_game_cards.js';
import {  showHiddenCardFieldsImages  } from './show_hidden_card_fields_images.js';
import {  removeAllCardsImages  } from './remove_all_cards_images.js';

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerHTML = '';
    state.cardSprites.type.innerHTML = '';

    
    state.actions.button.style.display = 'none';

    showHiddenCardFieldsImages(false);

    const widthOfScreen = window.innerWidth;

    if(widthOfScreen < 768){
        await removeAllCardsImages();
    }


   

    renderGameCards()

}


export {  resetDuel  }