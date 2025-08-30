
//OBJETIVO 
class TennisScorer{
    constructor(){
        this.pointsPlayer1 = 0;
        this.pointsPlayer2 = 0;}

    player1Scores() {
        this.pointsPlayer1 ++;
    }
    player2Scores() {
        this.pointsPlayer2 ++;
    }
    //player2Scores();{}
    showScore() {
         if(this.pointsPlayer1 === 0 && this.pointsPlayer2 === 0){     
          return "Love - Love";}
        if(this.pointsPlayer1 === 1) {

             return "15 - Love";
        }
        if(this.pointsPlayer1 === 2) {
            return "30 - Love";
        }
        if(this.pointsPlayer1 === 3 && this.pointsPlayer2 === 0) {
            return "40 - Love"; }
        if(this.pointsPlayer1 === 4) {
            return "Win for Player 1"; }    
        if(this.pointsPlayer2 === 1) {  
            return "Love - 15";
        }
        if(this.pointsPlayer2 === 2) {
            return "Love - 30";
        }
        if(this.pointsPlayer2 === 3 && this.pointsPlayer1 === 0) {
            return "Love - 40"; }   
        if(this.pointsPlayer2 === 4) {
            return "Win for Player 2"; }    
            
        if(this.pointsPlayer1 === 3 && this.pointsPlayer2===3){
            return "Deuce";    }  

         
   }

};
export default TennisScorer;