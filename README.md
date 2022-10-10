# Popy Quiz Europe

Popy Quiz Europe is an amusement, short quiz which purpose is to let the user to review/learn, in a fun way, interesting facts about some European countries.

The project was inspired from our family trip last summer: While we enjoyed discovering new countries we strove to teach our 7 years-old about them. Sometimes we found ourselves learning too.
Considering that, the content of the quiz and its design have been made to be accessible to general public from young children to grown-up of all ages.

The website is responsive in the most common screen devices (smartphone, tablet, laptop and desktop) and within the following width categories:

* 320 x 480px
* 768 x 1024px
* 1280 x 802px
* 1600 x 992px

![This is a mockup image of the deployed website](/assets/images/picture1.webp)

## Technologies

This web application was built using HTML, CSS and JavaScript.

## Features

The website can currently display a home page and a quiz area (user interface).

Both were designed with a "mobile first" intention in mind.

The home page tells the users who we are, what we do/offer and a call to take action.

The quiz area displays all the required elements on viewport.

The background image and colors were selected to subtly recall the EU colors and thus reinforce the topic in the user's mind.

### The home page includes:

* The logo (name of the website)

![This is the logo](/assets/images/picture2.webp)

Popy quiz is a wordplay about "pop quiz"(surprise quiz) : 'Pop + y', adding a childish side that would gets kid's interest, + 'Quiz', a short and easy-going entertaning pastime.

* Presentation of the quiz topic and content

![This is the presentation](/assets/images/picture3.webp)

The user is introduced to the topic of the questions. It would create an expectation.

* An invitation to action : "Let's go!" button

![This is the Let's go! button](/assets/images/picture4.webp)

The tone has been set, user's attention is got. The user is invited to interact by clicking this button.
Using Javascript the "Let's go!" button changes the home page into the user interface: the quiz area.

* Footer

![This is the footer of the website](/assets/images/picture5.webp)

Holds an invitation to the user to spread this quiz through his/her social media.

All links have an aria-label attribute for accesibility reasons and open in a new tab so the user can stays on Popy Quiz.

The footer remains available at user's hand during the whole visit.

### The quiz area: 

* Question and answer section

![This is the section where question and answers are displayed](/assets/images/picture6.webp)

This section is displayed after the user clicks on the "Let's go!" button on the home page.

All user's actions on this section are responded thanks to Javascript: 

- Question and answers are randomly picked from a list of available questions

- The user can click on the answer of his/her choice. It will be then checked and the result is brought out to the user through an alert:

![Bravo if the answer is correct](/assets/images/picture7.webp)

![Try again if the answer is wrong](/assets/images/picture8.webp)

With the intention of not discouraging our young public, it's been decided to have none score and not to disable the answers once the user has made a choice. The user can use then all his/her chances until discovering the right answer and/or interact with the same question as long and as many times as desired.

- Once the user clicks on the "Next" button the website will display a new question and the quiz will go on

![This is the Next button](/assets/images/picture9.webp)

## Features left to implement

It's with deep regret that some desired, and important, features were left to implement.

These are the concerned feautures:

* Progress bar

![This is an image of the progress bar](/assets/images/picture10.webp)

This feature would have provided the user with an intituive idea of the amount of questions per round.

* Modal

This feature would have provided interesting complementary information about the question i.e "Croissants were invented in Vienna to celebrate the defeat of the Turkish army at the siege of the Austrian capital in 1683"

* Stopping the quiz after 5 displayed questions.

  In addition, at the end of the quiz a thank you message would have been displayed as well as a new call to action: "Take the quiz again".
  

I lacked of time to work on these features.





