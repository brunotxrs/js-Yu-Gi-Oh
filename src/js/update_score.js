import {  state  } from './state.js'

async function updateScore() {
    state.score.scoreBox.innerHTML = `WIN: ${state.score.playerScore} | LOSE: ${state.score.computerScore}`;
}

export {  updateScore  };