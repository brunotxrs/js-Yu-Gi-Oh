import {  state  } from './state.js';
import {  renderGameCards  } from './render_game_cards.js'
import {  resetDuel  } from './reset_duel.js';



function initializeGame(){
    renderGameCards();
  
    state.actions.button.addEventListener("click", () => resetDuel());

    const bgm = document.getElementById('bgm');
    bgm.play()

}

initializeGame()



