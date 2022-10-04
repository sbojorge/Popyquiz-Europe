document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
              startQuiz();
            } else if (this.getAttribute("data-type") === "next") {
                alert("You clicked next!");
            } else {
                let answers = this.getAttribute("data-type") ;
                alert(`You clicked ${answers}`);
            }
        });
    }

    startQuiz(question);
});


    




/** Pick a question randomly and its possible answers on the userinterface */

function startQuiz(question) {
  
  let myQuiz = [{    
    q :'What is the capital of Spain?', 
    a : ['Lisbon', 'Paris', 'Madrid'],
    correctAnswer: 'Madrid'
},
{
  q : 'Red Devils is the national football team of:',
  a: ['France', 'Belgium', 'Finland'],
  correctAnswer: 'Belgium'
}];

let question = myQuiz[Math.floor(Math.random()*myQuiz.length)];

}

function displayQuestion() {
  document.getElementById('question').innerHTML = question.q;
  document.getElementById('opt1').innerHTML = question.a[0];
  document.getElementById('opt2').innerHTML = question.a[1];
  document.getElementById('opt3').innerHTML = question.a[2];
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
