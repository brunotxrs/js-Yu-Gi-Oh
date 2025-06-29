import {  cardData  } from './card_data.js';
import {  state  } from './state.js'

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

// implementar a função SetCardFields

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

