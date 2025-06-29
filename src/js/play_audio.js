async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    
    try {
        audio.play();
        
    } catch (error) {
        console.error(error)
    }
}


export {  playAudio  }