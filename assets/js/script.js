
let start = document.getElementById('start-btn');
//start.addEventListener('click', startQuiz);

 



let myQuiz = [{
    id : 0,
    question :'what is the capital of Spain?', 
    answers : [{text:'Lisbone', text:'Paris', text:'Madrid'}], correct: 'Madrid'
},
{ id : 1,
  question : 'Which of these cities was the birthplace of the famous composer Wolfgang Amadeus Mozart?',
  answers : [{text:'Berlin', text:'Salzbourg', text:'Strasbourg'}], correct: 'Salzbourg',
},
{ id : 2,
  question : 'The capital of Switzerland is:',
  answers : [{text:'Vienna', text:'Zurich', text:'Zagreb'}], correct: 'Vienna',
},
{
   id : 3,
   question : 'Ljubljana is the capital of:',
   answers : [{text:'Belgium', text:'Slovenia', text:'Slovakia'}], correct: 'Slovenia',
},
{
  id : 4,
  question : 'Which of these countries is well-known for its chocolate and watches:',
  answers : [{text:'Germany', text:'Luxembourg', text:'Switzerland'}], correct: 'Switzerland',
},
{
  id : 5,
  question : 'Red  Devils is the national football team of:',
  answers : [{text:'France', text:'Malta', text:'Belgium'}], correct: 'Belgium',
},
{
  id : 6,
  question : '  is the 5th smallest country in the European Union:',
  answers : [{text:'Andorre', text:'Liechtenstein', text:'Slovenia'}], correct: 'Slovenia',
},
{
  id : 7,
  question : 'More than half of the olive Oil in the world is produced in:',
  answers : [{text:'Italy', text:'Greece', text:'Spain'}], correct: 'Spain',  
},
{
 id : 8,
 question : 'The second largest country in the European Union is:',
 answers : [{text:'Germany', text:'Poland', text:'Spain'}], correct: 'Spain',  
},
{
  id : 9,
  question : 'Spain has __ UNESCO World Heritage Sites:',
  answers : [{number: 60, number: 48, number: 12}], correct: 48,  
}];

let question = myQuiz[Math.floor(Math.random()*myQuiz.length)];

document.getElementById('question').innerHTML = question;

