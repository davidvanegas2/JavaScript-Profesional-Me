import mediaPlayer from "./mediaPlayer.js"

const video = document.querySelector(
    "video" /* Defini en el script el tag de video del HTML */
);
const button = document.querySelector(
    "button" /* Defini en el script el tag de button del HTML */
);
//Defini el player para poder usarlo de manera global en el script
const player = new mediaPlayer({ el: video });

button.onclick = () => player.play();