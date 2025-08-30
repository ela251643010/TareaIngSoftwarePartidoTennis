
//OBJETIVO 
class TennisScorer{
    constructor(){
        this.pointsPlayer1 = 0;
    }
    //this.pointsPlayer2 = 0;

    player1Scores() {
        this.pointsPlayer1 ++;

    }
    //player2Scores();{}
    showScore() {
        if(this.pointsPlayer1 === 1) {

             return "15 - Love";
        }
        if(this.pointsPlayer1 === 2) {
            return "30 - Love";
        }
          return "Love - Love";
         
   }

};
export default TennisScorer;