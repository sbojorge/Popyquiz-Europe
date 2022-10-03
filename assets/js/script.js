document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "next") {
                alert("You clicked next!");
            } else {
                let answers = this.getAttribute("data-type");
                alert(`You clicked ${answers}`);
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
