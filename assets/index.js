const video = document.querySelector(
    "video" /* Defini en el script el tag de video del HTML */
  ); 
  const button = document.querySelector(
    "button" /* Defini en el script el tag de button del HTML */
  ); 
  //Defini el player para poder usarlo de manera global en el script
  const player = new mediaPlayer({ el: video });

  function mediaPlayer(config) {
    this.media = config.el;
  }

  mediaPlayer.prototype.play = function () {
    if (this.media.paused) this.media.play();
    else this.media.pause();
  };

  button.onclick = () => player.play();