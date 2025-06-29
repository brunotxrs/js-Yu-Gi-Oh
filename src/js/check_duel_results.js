import {  cardData  } from './card_data.js';
import {  state  } from './state.js';
import {  playAudio  } from './play_audio.js';

async function checkDuelResults(playerCardId, ComputerCardId) {
    let duelResults = "DRAW";

    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(ComputerCardId)){
        duelResults = "WIN";
        
        state.score.playerScore++;


    }

    if(playerCard.LoseOf.includes(ComputerCardId)){
        duelResults = "LOSE";
        state.score.computerScore++;
    }

    await playAudio(duelResults.toLowerCase());

    return duelResults;
}

export {  checkDuelResults  };