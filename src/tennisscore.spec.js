
import TennisScorer from "./tennisscore.js";

describe("TennisScorer", () => {
    //Empieza sin puntos
    it("Deberia empezar sin puntos Love-Love", () => {
        const scorer= new TennisScorer();
        expect(scorer.showScore()).toEqual("Love - Love");
    });
    /*
    //Jugador 1 gana un punto
    it("Deberia mostrar 15-Love cuando el jugador 1 gana un punto", () => { 
        expect(showScore(1,0)).toEqual("15 - Love");
    });
    it("Deberia mostrar 30-Love cuando el jugador 2 gana dos puntos", () => {
        expect(showScore(2,0)).toEqual("30 - Love");
    });*/
});