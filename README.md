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

The website has 3 pages: the home page, the quiz area (user interface) and a finish page.

All of them were designed with a "mobile first" intention in mind.

The home page tells the users who we are, what we do/offer and a call to take action.

The quiz area displays all the required elements on viewport.

The finish page displays a thank you message to the user and has a button to take the quiz again.

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

This section is displayed after the user clicks on the "Let's go!" button on the home page. All user's actions on this section are responded thanks to Javascript.

![This is the section where question and answers are displayed](/assets/images/picture6.webp)

Question and answers are randomly picked from a list of available questions.

Answer options are enabled so the user can click on any of them.The "Next" button is disabled until an answer is selected.

As part of the resubmission of this project, once the user has selected an answer, the remaining options are disabled. It prevents the user from cheating on the score.

After clicking on an answer, it will be checked and the result is brought out to the user through an alert:

![Bravo if the answer is correct](/assets/images/picture7.webp)

![Wrong answer if answer is incorrect](/assets/images/picture8.webp)

~~With the intention of not discouraging our young public, it's been decided to have none score and not to disable the answers once the user has made a choice. The user can use then all his/her chances until discovering the right answer and/or interact with the same question as long and as many times as desired.~~

By clicking on the "Next" button the website will display a new question and the quiz will go on.
A new question is displayed by its own.
![This is the Next button](/assets/images/picture9.webp)

Questions aren't repeated.

## Features left to implement

These are the concerned feautures:

* ~~Progress bar~~

![This is an image of the progress bar](/assets/images/picture10.webp)

As part of the resubmission, this feature has been implemented. The user is now provided with an intituive idea of the duration of the quiz per round.

* Modal

This feature would have provided interesting complementary information about the question i.e "Croissants were invented in Vienna to celebrate the defeat of the Turkish army at the siege of the Austrian capital in 1683"

* ~~Stopping the quiz after 5 displayed questions.~~

  This feature is now available. After a round of 5 questions the quiz finishes and a "thank you" message is displayed as well as a button with a call to action: "Take the quiz again".

* Score tracking


## Testing

### Lighthouse

![Lighthouse report](/assets/images/picture11.webp)]

### Markup validator

As part of the resubmission, the 2 errors left have now been solved. This is the latest result after the HTML check:

![Last HTML result](/assets/images/picture12_1.webp)

Tests were made on the official HTML validator at: https://validator.w3.org/

~~Result: 2 errors; they were not solved because of lack of time.~~

The picture showing the errors has been removed from this section but is still available at assets/images/picture12.webp.


### CSS validator

Test was made on the official CSS validator at: https://jigsaw.w3.org/css-validator/

Results: No errors found.

![CSS result](/assets/images/picture13.webp)

### JShint

Javascript was test on the official validator at: https://jshint.com/

Result: 13 warnings. No action taken upon due to lack of time.

![JS result](/assets/images/picture14.webp)

## Deployment

The site was deployed to GitHub pages. These are the followed steps for deploying:

In the GitHub repository, navigate to the "Settings" tab;

Click on "Pages" from the left hand menu;

In the "Branch" section, from the drop-down menu, select "main" and click on Save;

Refresh the page manually. The link to the now deployed website is: https://sbojorge.github.io/Popyquiz-Europe/

## Credits

### Content

Select random item from an array comes from https://css-tricks.com/snippets/javascript/select-random-item-array/

Code for the button border on the quiz area comes from www.geniuslake.com 

Code for the background image comes from  https://mycolor.space/gradient3?ori=to+bottom&hex=%23150AFA&hex2=%23FFFFFF&hex3=%23FBFF01&submit=submit

### Acknowledgments

My family for believing in me and supporting me. My Mentor, always available and open. The CI Slack community, lovely people ready to share knowledge and experiences.










