
let firstButton = document.getElementById("start-btn");
firstButton.addEventListener("click", function() {
  document.getElementsByTagName("p").style.display = none;
});
 




/** Pick a question randomly and its possible answers on the userinterface */

function startQuiz() {
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
  
  document.getElementById('question').innerHTML = question.q;
  document.getElementById('opt1').innerHTML = question.a[0];
  document.getElementById('opt2').innerHTML = question.a[1];
  document.getElementById('opt3').innerHTML = question.a[2];
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
