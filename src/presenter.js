  import TennisScorer from "./tennisscore";

  const form = document.querySelector("#Tennis-form");
  const p1Input = document.querySelector("#primer-numero");
  const p2Input = document.querySelector("#segundo-numero");
  const p1Button = document.querySelector("#sumar-button-1");
  const p2Button = document.querySelector("#sumar-button-2");
  const resultDiv = document.querySelector("#resultado-div");
  const scorer = new TennisScorer();
  p1Input.value = 0;
  p2Input.value = 0;

  function render () {
    p1Input.value = scorer.pointsPlayer1;
    p2Input.value = scorer.pointsPlayer2;
    resultDiv.innerHTML = scorer.showScore();
  }
  render();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const whichButton = event.submitter.id;
    if (whichButton === "sumar-button-1") {
      scorer.player1Scores();
    } else if (whichButton === "sumar-button-2") {
      scorer.player2Scores();
    } else if(whichButton === "reset-button") {
      scorer.reset();
    }
  render();
  });