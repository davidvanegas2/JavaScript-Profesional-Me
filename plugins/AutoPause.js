class AutoPause {
    constructor() {
        //Se define un threshold que es el porcentaje que se tiene del video
        //Es decir, si hay una intersección del 25% del video el observer se da cuenta
        this.threshold = 0.25;

        //Se hace uso del bind ya que en este caso hay que mandar el this dentro de la función
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player; //Se igualo el player 

        //IntersectionObserver tiene dos parametros, el primero es la acción a ajecitar si se cumple el segundo parametro
        //El segundo parametro es el threshold que hace referencia al porcentaje del video
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        //Se pone el observer que constantemente va a estar revisando si se cumple la condición de arriba
        observer.observe(this.player.media);
    }

    handleIntersection(entries) {

        //Se define la condicion de si se pausa o no, si el porcentaje es menor de lo que se ve se coloca pausa
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;