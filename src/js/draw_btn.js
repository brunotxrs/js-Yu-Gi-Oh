import {  state  } from './state.js'

async function  drawButton(text) {
    state.actions.button.innerHTML = text;
    state.actions.button.style.display = 'block';
}

export {  drawButton  }; 