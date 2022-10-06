
let firstButton = document.getElementById("start-btn");
firstButton.addEventListener("click", function() {
  document.getElementById("homepage-container").style.display = "none";
  document.getElementById("general-container").style.display = "block";
  
  });
 
/**These are the questions for the quiz */

let myQuiz = [{    
  q :'What is the capital of Spain?', 
  a : ['Lisbon', 'Paris', 'Madrid'],
  correctAnswer: 'Madrid'
},
{
  q : 'Dutch, French and German are the official languages of:',
  a: ['Luxembourg', 'Belgium', 'Switzerland'],
  correctAnswer: 'Belgium'
},
{
  q: 'Which of these cities is the birthplace of the famous composer Wolfgang Amadeus Mozarat?:',
  a: ['Linz', 'Salzburg', 'Vienna'],
  correctAnswer: 'Salzburg'
},
{
  q : 'Ljubljana is the capital of:',
  a: ['Slovenia', 'Slovakia', 'Poland'],
  correctAnswer: 'Slovenia'
},
{
  q: "World's most active volcanoes are located in this country:",
  a: ['Norway', 'Italy', 'Austria'],
  correctAnswer: 'Italy'
},
{
  q: 'Cristiano Ronaldo, the famous football player, was born in:',
  a: ['Portugal', 'Spain', 'France'],
  correctAnswer: 'Portugal'
},
{
  q: 'The hottest country in Europe is:',
  a: ['Malta', 'Italy', 'Spain'],
  correctAnswer: 'Malta'
},
{
  q: 'The capital of Switzerland is:',
  a: ['Zurich', 'Bern', 'Grass'],
  correctAnswer: 'Bern'
},
{
  q: 'This flag belongs to the country of:',
  a: ['img1', 'img2', 'img3'],
  correctAnswer: 'img3'
},
{
  q: 'Olympic Games have their origin in:',
  a: ['Greece', 'Croatia', 'Italy'],
  correctAnswer: 'Greece'
},
{
  q: '___ is the 5th smallest country in the European Union',
  a: ['Andorra', 'Liechtenstein', 'Slovenia'],
  correctAnswer: 'Slovenia'
},
{
  q:'This country has a unique active geyser:',
  a: ['Iceland', 'Slovenia','Slovakia'],
  correctAnswer: 'Slovakia'
},
{
  q: 'More Than Half of the Olive Oil in the World Is Produced in:',
  a: ['Spain', 'Greece', 'Italy'],
  correctAnswer: 'Spain'
},
{
  q: 'In which of these Italian cities was the pizza invented:',
  a: ['Florence', 'Rome', 'Naples'],
  correctAnswer: 'Naples'
},
{
  q: 'Italy has 2 independent countries within its area. These countries are:',
  a: ['Meurthe-et-Moselle', 'San Marino and Vatican City', 'Venice and Tuscany'],
  correctAnswer: 'San Marino and Vatican City'
}];



/** Pick a question randomly and its possible answers on the userinterface */

function startQuiz() {
  
  
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
