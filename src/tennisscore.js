function showScore(jugador1, jugador2) {
    if(jugador1 ===1 && jugador2 ===0) {
        return "15 - Love";
    }
    return "Love - Love";
}
export default showScore;