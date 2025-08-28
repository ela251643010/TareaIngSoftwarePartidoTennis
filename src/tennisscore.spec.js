import showScore from "./tennisscore.js";
describe("TennisScore", () => {
    //Empieza sin puntos
    it("Deberia empezar sin puntos Love-Love", () => {
        expect(showScore()).toEqual("Love - Love");
    });
});