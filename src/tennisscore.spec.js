
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
    //Jugador 1 gana tres puntos
    it("Deberia mostrar 40-Love cuando el jugador 1 gana tres puntos", () => {
        const scorer= new TennisScorer(); //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos   
        scorer.player1Scores(); //Act- ejectuamos
        scorer.player1Scores(); //Act- ejectuamos
        expect(scorer.showScore()).toEqual("40 - Love");
    });
    it("Deberia mostrar Win for Player 1 cuando el jugador 1 gana cuatro puntos", () => {
        const scorer= new TennisScorer(); //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos   
        scorer.player1Scores(); //Act- ejectuamos
        scorer.player1Scores(); //Act- ejectuamos
        scorer.player1Scores(); //Act- ejectuamos
        expect(scorer.showScore()).toEqual("Win for Player 1");
    });
    it("Deberia mostrar Love- 15 cuando el jugador 2 gana un punto", () => {
        const scorer= new TennisScorer(); //Arrange configurar
        scorer.player2Scores(); //Act- ejectuamos   
        expect(scorer.showScore()).toEqual("Love - 15");
    });
    it("Deberia mostrar Love- 30 cuando el jugador 2 gana dos puntos", () => {
        const scorer= new TennisScorer();   //Arrange configurar
        scorer.player2Scores(); //Act- ejectuamos   
        scorer.player2Scores(); //Act- ejectuamos
        expect(scorer.showScore()).toEqual("Love - 30");
    });
    it ("Deberia mostrar Love- 40 cuando el jugador 2  gana tres puntos", () => {
        const scorer= new TennisScorer();   //Arrange configurar
        scorer.player2Scores(); //Act- ejectuamos
        scorer.player2Scores(); //Act- ejectuamos
        scorer.player2Scores(); 
        expect(scorer.showScore()).toEqual("Love - 40");
    });
    it ("Deberia mostrar Win for Player 2 cuando el jugador 2 gana cuatro puntos", () => {
        const scorer= new TennisScorer();   //Arrange configurar
        scorer.player2Scores(); //Act- ejectuamos               
        scorer.player2Scores(); //Act- ejectuamos
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Win for Player 2");
    });
    it("Deberia mostrar Deuce cuando ambos jugadores ganan tres punto", () => {
        const scorer= new TennisScorer();   //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos               
        scorer.player1Scores(); 
        scorer.player1Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Deuce");
    });
    it("Deberia mostrar Advantage for player 1 cuando estan en Deuce y el jugador 1 gana un punto ", () => {
        const scorer = new TennisScorer();   //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("Advantage for Player 1");
    });
    it("Cuando estan en Duce Deberia mostrar Advantage for player 2 y el jugador 2 gana un punto ", () => {
        const scorer = new TennisScorer();   //Arrange configurar
        scorer.player1Scores(); //Act- ejectuamos
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Advantage for Player 2");
    });
    it("Cuando el jugador 1 esta en ventaja y gana un punto deberia mostrar Win for Player 1", () => {
        const scorer = new TennisScorer();   
        scorer.player1Scores();//1
        scorer.player1Scores();//2
        scorer.player1Scores();//3
        scorer.player2Scores();//1
        scorer.player2Scores();//2
        scorer.player2Scores();//3
        scorer.player1Scores();//Advantage
        scorer.player1Scores();//win
        expect(scorer.showScore()).toEqual("Win for Player 1");
    });
    it("Cuando el jugador 2 esta en ventaja y gana un punto deberia mostrar Win for Player 2", () => {
        const scorer = new TennisScorer();   
        scorer.player1Scores();//1
        scorer.player1Scores(); //2     
        scorer.player1Scores(); //3
        scorer.player2Scores();//1
        scorer.player2Scores(); //2
        scorer.player2Scores(); //3
        scorer.player2Scores(); //Advantage
        scorer.player2Scores(); //win
        expect(scorer.showScore()).toEqual("Win for Player 2");
    });
    it("Deberia reiniciar el marcador a Love-Love cuando se llama a reset", () => {
        const scorer = new TennisScorer();   
        scorer.player1Scores();//1
        scorer.player1Scores();//1
        expect(scorer.showScore()).toEqual("30 - Love");
        scorer.reset();
        expect(scorer.showScore()).toEqual("Love - Love");
    });
    it("Deberia marcar 15-15 cuando ambos jugadores ganan un punto ", () => {
        const scorer = new TennisScorer();   
        scorer.player1Scores();//1
        scorer.player2Scores();//1      
        expect(scorer.showScore()).toEqual("15 - 15");
    });
    it("Deberia marcar 30-15 cuando el jugador 1 gana dos puntos y el jugador 2 gana un punto ", () => {
        const scorer = new TennisScorer();   
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player2Scores();     
        expect(scorer.showScore()).toEqual("30 - 15");
    });
});