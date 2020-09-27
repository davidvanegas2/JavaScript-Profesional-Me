import mediaPlayer from "./mediaPlayer.js"
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector(
    "video" /* Defini en el script el tag de video del HTML */
);
const button = document.querySelector(
    "button" /* Defini en el script el tag de button del HTML */
);
const muteButton = document.querySelector(
    ".muteButton"
);
//Defini el player para poder usarlo de manera global en el script
const player = new mediaPlayer({ el: video, plugins: [ /* new AutoPlay() */ ] });

button.onclick = () => player.play();
muteButton.onclick = () => player.isMuted();