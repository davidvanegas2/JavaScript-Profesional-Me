function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

mediaPlayer.prototype._initPlugins = function() {
    //Se define el objeto player para definir Setters y Getters
    //Para esto usamos las keywords get y set
    //De esta manera sabemos que player solo tiene las funciones mencionadas aca abajo
    const player = {
        media: this.media,
        play: () => this.play(),
        pause: () => this.pause(),
        togglePlay: () => this.togglePlay(),
        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};

//Metodo que pone play al video
mediaPlayer.prototype.play = function() {
    this.media.play();
};

//Metodo que pausa el video
mediaPlayer.prototype.pause = function() {
    this.media.pause();
}

//Metodo para el boton de Play / Pause dependiendo del estado del video lo pausa o no
mediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused)
        this.play();
    else
        this.pause();
}

//Metodo para mutear o no el video
mediaPlayer.prototype.isMuted = function() {
    if (this.media.muted)
        this.media.muted = false;
    else
        this.media.muted = true;
};

export default mediaPlayer;