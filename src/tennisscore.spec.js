describe("TennisScore", () => {
    //Empieza sin puntos
    it("Deberia empezar sin puntos", () => {
        expect(showScore()).toEqual("Love - Love");
    });
});