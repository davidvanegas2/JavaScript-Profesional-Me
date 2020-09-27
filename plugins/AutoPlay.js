function AutoPlay() {

}
AutoPlay.prototype.run = function(player) {
    //Dentro de la condición del If estamos haciendo uso de un getter
    //Y en el bloque de codigo a ejecutar dentro del If hacemos uso de un Setter
    //Para el setter simplemente lo asignamos y ya
    if (!player.muted) {
        player.muted = true;
    }
    player.play();
}

export default AutoPlay;