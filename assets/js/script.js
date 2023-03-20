//These are the questions for the quiz

let myQuiz = [{
  q : 'Spain has __ UNESCO World Heritage Site:', 
  a : [48, 10, 14],
  correctAnswer : '48'
},
{
  q : 'Dutch, French and German are the official languages of:',
  a : ['Luxembourg', 'Belgium', 'Switzerland'],
  correctAnswer : 'Belgium'
},
{
  q : 'Which of these cities is the birthplace of the famous composer Mozart?:',
  a : ['Linz', 'Salzburg', 'Vienna'],
  correctAnswer : 'Salzburg'
},
{
  q : 'Ljubljana is the capital of:',
  a : ['Slovenia', 'Slovakia', 'Poland'],
  correctAnswer : 'Slovenia'
},
{
  q : "World's most active volcanoes are located in this country:",
  a : ['Norway', 'Italy', 'Austria'],
  correctAnswer : 'Italy'
},
{
  q : 'Cristiano Ronaldo, the famous football player, was born in:',
  a : ['Portugal', 'Spain', 'France'],
  correctAnswer : 'Portugal'
},
{
  q : 'The hottest country in Europe is:',
  a : ['Malta', 'Italy', 'Spain'],
  correctAnswer : 'Malta'
},
{
  q : 'The capital of Switzerland is:',
  a : ['Zurich', 'Bern', 'Grass'],
  correctAnswer : 'Bern'
},
{
  q : 'The croissant is originally from:',
  a : ['Paris', 'Vienna', 'Brussels'],
  correctAnswer : 'Vienna'
},
{
  q : 'Olympic Games have their origin in:',
  a : ['Greece', 'Croatia', 'Italy'],
  correctAnswer : 'Greece'
},
{
  q : '___ is the 5th smallest country in the European Union',
  a : ['Andorra', 'Liechtenstein', 'Slovenia'],
  correctAnswer : 'Slovenia'
},
{
  q :'This country has a unique active geyser:',
  a : ['Iceland', 'Slovenia','Slovakia'],
  correctAnswer : 'Slovakia'
},
{
  q : 'More Than Half of the Olive Oil in the World Is Produced in:',
  a : ['Spain', 'Greece', 'Italy'],
  correctAnswer : 'Spain'
},
{
  q : 'In which of these Italian cities was the pizza invented:',
  a : ['Florence', 'Rome', 'Naples'],
  correctAnswer : 'Naples'
},
{
  q : 'Italy has 2 independent countries within its area. These countries are:',
  a : ['Meurthe-et-Moselle', 'San Marino and Vatican City', 'Venice and Tuscany'],
  correctAnswer : 'San Marino and Vatican City' 
  
}]

// Wait for the DOM to be loaded

document.addEventListener('DOMContentLoaded', function() {
  let startQuiz = document.getElementById('start-btn');
  startQuiz.addEventListener('click', function(){
    document.getElementById('homepage-container').style.display = 'none';
    document.getElementById('general-container').style.display = 'block';
    getNewQuestion();
  })
})

let currentQuestion;

/** Randomly picks a question and its possible answers,
 *  displays them on the UI, verifies the answer clicked by the user
 *  and displays the result
 */
 function getNewQuestion() {
  //Select random item from an array comes from https://css-tricks.com/snippets/javascript/select-random-item-array/
  currentQuestion = myQuiz[Math.floor(Math.random() * myQuiz.length)]; 
  document.getElementById('question').innerHTML = currentQuestion.q;
  document.getElementById('opt1').innerHTML = currentQuestion.a[0];
  document.getElementById('opt2').innerHTML = currentQuestion.a[1];
  document.getElementById('opt3').innerHTML = currentQuestion.a[2];
 }

// Check user's choice and if right then console log 'bravo' otherwise console log 'try again'

  let options = document.getElementsByClassName("answers");
  
  function handleOptClicked(event) {
    let rightAnswers = currentQuestion.correctAnswer;
    let selectedOption = this.innerHTML;
    console.log(rightAnswers);
    console.log(selectedOption);
    if (selectedOption === rightAnswers) {
      alert('Bravo!');
    } else {
      alert('Try again')
    }
  }
  
  for (let option of options) {
    option.addEventListener("click", handleOptClicked);
  }
 
// Display a new question after 'Next' button has been clicked 

let newQuestion = document.getElementById("nxt-btn");    
newQuestion.addEventListener("click", getNewQuestion); 



 
 
 




 







  


    

















