import showScore from "./tennisscore.js";
describe("TennisScore", () => {
    //Empieza sin puntos
    it("Deberia empezar sin puntos Love-Love", () => {
        expect(showScore(0,0)).toEqual("Love - Love");
    });
    //Jugador 1 gana un punto
    it("Deberia mostrar 15-Love cuando el jugador 1 gana un punto", () => { 
        expect(showScore(1,0)).toEqual("15 - Love");
    });
    
});