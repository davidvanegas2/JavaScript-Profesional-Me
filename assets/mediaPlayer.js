function mediaPlayer(config) {
    this.media = config.el;
}

mediaPlayer.prototype.play = function() {
    if (this.media.paused) this.media.play();
    else this.media.pause();
};

export default mediaPlayer;