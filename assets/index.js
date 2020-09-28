import mediaPlayer from "./mediaPlayer.js"
import AutoPlay from '../plugins/AutoPlay.js'
import AutoPause from '../plugins/AutoPause.js'

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
const player = new mediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

button.onclick = () => player.togglePlay();
muteButton.onclick = () => player.isMuted();