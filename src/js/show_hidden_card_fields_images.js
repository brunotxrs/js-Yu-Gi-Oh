import {  state  } from './state.js';

async function showHiddenCardFieldsImages(value) {
    
    if(value === true){
        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";
    }else if(value === false){
        state.fieldCards.player.style.display = 'none';
        state.fieldCards.computer.style.display = 'none';
    }

}


export {  showHiddenCardFieldsImages  };