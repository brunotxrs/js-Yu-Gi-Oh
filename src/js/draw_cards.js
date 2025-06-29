import {  cardData  } from './card_data.js';
import {  state  } from './state.js';
import {  removeAllCardsImages  } from './remove_all_cards_images.js';
import {  checkDuelResults  } from './check_duel_results.js';
import {  drawButton  } from './draw_btn.js';
import {  updateScore  } from './update_score.js';
import {  showHiddenCardFieldsImages  } from './show_hidden_card_fields_images.js';

const cardBack = "./src/assets/icons/card-back.png"

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}



async function createCardImage(IdCard, fieldSide) {
    const widthOfScreen = window.innerWidth;
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", `${cardBack}`);
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === state.playerSides.player1){
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"))
        })

        if(widthOfScreen < 768){
            
            cardImage.addEventListener("click", () => {
                drawSelectCard(IdCard)
                cardImage.setAttribute("src",`${cardData[IdCard].img}` , IdCard);
    
            })
    
            cardImage.addEventListener("dblclick", () => {
                cardImage.setAttribute("src", `${cardBack}`);
            })

        }else {
            cardImage.addEventListener("mouseover", () => {
                drawSelectCard(IdCard)
                
            })
        }
        

    }

    return cardImage;

}

async function setCardsField(cardId) {
    

    const widthOfScreen = window.innerWidth;

    if(widthOfScreen > 768){
        await removeAllCardsImages();
    }

    let computerCardId = await getRandomCardId();


    showHiddenCardFieldsImages(true);


    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);

}



async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerHTML = cardData[index].name;
    state.cardSprites.type.innerHTML = "Attribute: " + cardData[index].type;


}

async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
        
    }
}

export {  drawCards  }

