function AutoPlay() {

}
AutoPlay.prototype.run = function(player) {
    player.play();
    player.isMuted();
}

export default AutoPlay;