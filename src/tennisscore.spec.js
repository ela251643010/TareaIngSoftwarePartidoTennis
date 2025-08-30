
import TennisScorer from "./tennisscore.js";

describe("TennisScorer", () => {
    //Empieza sin puntos
    it("Deberia empezar sin puntos Love-Love", () => {
        const scorer= new TennisScorer();
        expect(scorer.showScore()).toEqual("Love - Love");
    });
    
    //Jugador 1 gana un punto
    it("Deberia mostrar 15-Love cuando el jugador 1 gana un punto", () => { 
        const scorer= new TennisScorer(); //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos
        expect(scorer.showScore()).toEqual("15 - Love"); //Assert Comprobar, VERIFICAR
    });
    //Jugador 2 gana dos puntos
    
    it("Deberia mostrar 30-Love cuando el jugador 2 gana dos puntos", () => {
        const scorer= new TennisScorer(); //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos   
        scorer.player1Scores(); //Act- ejectuamos
        expect(scorer.showScore()).toEqual("30 - Love");
    });
});