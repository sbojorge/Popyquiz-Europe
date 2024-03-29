//These are the questions for the quiz

let myQuiz = [{
  q: 'Spain has __ UNESCO World Heritage Site:',
  a: [48, 10, 14],
  correctAnswer: '48'
},
{
  q: 'Dutch, French and German are the official languages of:',
  a: ['Luxembourg', 'Belgium', 'Switzerland'],
  correctAnswer: 'Belgium'
},
{
  q: 'Which of these cities is the birthplace of the famous composer Mozart?:',
  a: ['Linz', 'Salzburg', 'Vienna'],
  correctAnswer: 'Salzburg'
},
{
  q: 'Ljubljana is the capital of:',
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
  q: 'The croissant is originally from:',
  a: ['Paris', 'Vienna', 'Brussels'],
  correctAnswer: 'Vienna',
  modal: 'to celebrate the defeat of the Turkish army at the siege of the Austrian capital in 1683'
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
  q: 'This country has a unique active geyser:',
  a: ['Iceland', 'Slovenia', 'Slovakia'],
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
}
];

/** Wait for the DOM to be loaded and then start the quiz */

document.addEventListener('DOMContentLoaded', function () {
  let startQuiz = document.getElementById('start-btn');
  startQuiz.addEventListener('click', function () {
    document.getElementById('homepage-container').style.display = 'none';
    document.getElementById('general-container').style.display = 'block';
    getNewQuestion();    
  });
});

let currentQuestion;

/** Call back the whole list of questions for restarting and or retaking the quiz */
function questionsBack() {
  myQuiz = [{
    q: 'Spain has __ UNESCO World Heritage Site:',
    a: [48, 10, 14],
    correctAnswer: '48'
  },
  {
    q: 'Dutch, French and German are the official languages of:',
    a: ['Luxembourg', 'Belgium', 'Switzerland'],
    correctAnswer: 'Belgium'
  },
  {
    q: 'Which of these cities is the birthplace of the famous composer Mozart?:',
    a: ['Linz', 'Salzburg', 'Vienna'],
    correctAnswer: 'Salzburg'
  },
  {
    q: 'Ljubljana is the capital of:',
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
    q: 'The croissant is originally from:',
    a: ['Paris', 'Vienna', 'Brussels'],
    correctAnswer: 'Vienna'
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
    q: 'This country has a unique active geyser:',
    a: ['Iceland', 'Slovenia', 'Slovakia'],
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
  }
  ];    
}

/** Randomly picks a question and its possible answers */
  
function getNewQuestion() { 
  //Select random item from an array comes from https://css-tricks.com/snippets/javascript/select-random-item-array/
  currentQuestion = myQuiz[Math.floor(Math.random() * myQuiz.length)];

  //Remove current question from the list of questions (myQuiz) so question will not be repeated
  let indexCurrentQuestion = myQuiz.indexOf(currentQuestion);
  myQuiz.splice(indexCurrentQuestion,1);
     
  //Display current question and its possible answers
  document.getElementById('question').innerHTML = currentQuestion.q;
  document.getElementById('opt1').innerHTML = currentQuestion.a[0];
  document.getElementById('opt2').innerHTML = currentQuestion.a[1];
  document.getElementById('opt3').innerHTML = currentQuestion.a[2];
        
  //Keep going or stop the quiz
  let remainingQuestions = myQuiz.length;  
  if (remainingQuestions == 9) {
    endQuiz();
  }

  //Display progress of the quiz in the progress bar 
  let increaseValue = document.getElementById('count');
  if (increaseValue.value <= 5) {
    increaseValue.value += 1;      
  }  
}

//Attach 2 click events to the possible answers to the question

let options = document.getElementsByClassName("answers");

for (let option of options) {

  option.addEventListener("click", handleOptClicked);
  option.addEventListener("click", getNewQuestion);
  
}

//Check user's choice and use an alert to display the result
function handleOptClicked() {
  let rightAnswers = currentQuestion.correctAnswer;
  let selectedOption = this.innerHTML;
  
  if (selectedOption === rightAnswers) {
    alert('Bravo!');
  } else {
    alert(`Wrong! The right answer is ${currentQuestion.correctAnswer}`);
  }  
}

/** Finish the quiz */

function endQuiz() {
 //Display thanks message and take the quiz again button
 document.getElementById('general-container').style.display = 'none';
 document.getElementById('thanks').style.display = 'block';
 document.getElementById('quiz-again-btn').style.display = 'block';
}

/** Play again */

let playAgain = document.getElementById('quiz-again-btn');
playAgain.addEventListener("click", function() {
  let score = document.getElementById('count');
  score.value = 0;
  questionsBack();
  document.getElementById('thanks').style.display = 'none';
  document.getElementById('quiz-again-btn').style.display = 'none';
  document.getElementById('general-container').style.display = 'block';
  }
);

/** Restart the quiz */

let restart = document.getElementById('home-btn');
restart.addEventListener("click", function() {
  let score = document.getElementById('count');
  score.value = 0;
  questionsBack();
  document.getElementById('homepage-container').style.display = 'flex';
  document.getElementById('general-container').style.display = 'none';
  }
);