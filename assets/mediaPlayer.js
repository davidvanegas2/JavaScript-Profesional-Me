function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

mediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

mediaPlayer.prototype.play = function() {
    if (this.media.paused)
        this.media.play();
    else
        this.media.pause();
};

mediaPlayer.prototype.isMuted = function() {
    if (this.media.muted)
        this.media.muted = false;
    else
        this.media.muted = true;
};

export default mediaPlayer;