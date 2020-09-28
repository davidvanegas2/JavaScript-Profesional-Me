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

mediaPlayer.prototype.play = function() {
    this.media.play();
};

mediaPlayer.prototype.pause = function() {
    this.media.pause();
}

mediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused)
        this.play();
    else
        this.pause();
}

mediaPlayer.prototype.isMuted = function() {
    if (this.media.muted)
        this.media.muted = false;
    else
        this.media.muted = true;
};

export default mediaPlayer;