document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function startQuiz() {

}

function displayQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer () {

}

function displayModal() {

}

function nextQuestion() {

}

function FinalScore() {

}

function quizAgain() {
  
}
