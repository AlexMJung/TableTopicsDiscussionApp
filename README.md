# Express/Passport with Angular Routing
This version uses Angular to control the login requests and redirection in coordination with client-side routing.

Important Directions:
* Run `npm install`,
* Run `grunt' in an open tab of terminal,
* Use the `client` file to work on front end files. Grunt will watch those files to be compiled into the `server/public` files. This handles minification and such.

# Table Topics Discussion Practice App

Keith Tomlinson
April 19, 2017 | Version 1.0

Application Overview
Table Topics Discussion Practice App is a full-stack web application which facilitates groups in practicing off the cuff responses to themed questions in a low stakes and supportive environment. Inspired by the Table Topics portion of the Toastmasters format, this app will help participants become comfortable with speaking publicly for 1 - 2 minutes on a wide range of topics. By engaging the participants with a playful environment it will work toward building confidence and improv skills, lowering anxiety, and helping them to communicate their thoughts and needs more effectively.

The interface of the app will allow a session organizer to instantiate a practice session. The session organiser then will name the session, set its theme, adds questions for the session ensuring that there are at least as many questions as potential participants.

The session organizer drives the session. At the beginning of the session, the session organizer will display their browser (preferably on a large projection screen or monitor) and enters participant’s names as they join the group. Questions are chosen randomly and participants are given the opportunity to volunteer, if no one volunteers a participant is chosen at random. Participants answers are timed with a goal of speaking for at least one minute. The session continues until everyone has spoken once. After everyone has been asked a question, the total percentage of participants which spoke for more than one minute is revealed and the session ends.

Stretch goal - The session organizer does not enter the questions, however participants join as session using their phone or electronic device, and are asked to enter their name and question based on that session’s theme.

## Application Features
# User Roles

**bold** Session Organizer:
Sets up a new session, names it, chooses theme, and enters questions for that theme. Drives the session experience.

**bold** Session Participant:
Views the browser during a session and responds to direction from but does not physically interact with computer.

  Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout


# Admin Login and Create Session
	Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

At the base ‘/’ of the application, the session organizer is asked to login to create a new
session.

Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

Upon login the session organizer names the session, creates a theme for the session and enters questions for the session. This builds a session object which will be stored in a database collection of sessions. The view will update as questions are entered allowing the session organizer to see what has been entered. Each entered question can be updated or deleted by the organizer.
	Sockets Stretch Goal -
			## Organizer Opens a Session
Instead of the session organizer adding in questions, the organizer will name the session and set its theme then create a session that participants will be invited to join.

Create Session button pops up an alert, probably a sweet one, which verifies that the session organizer wants to create this new session. Confirming this alert moves the session to the Enter Participants view.



# Enters Participants
Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

After create session is verified, the session organizer is brought to an input participant names view. Participants names are added to the current session object in the database collection of sessions. The organizer wants to get as many of the participants entered as possible before beginning a session, however they will be able to alter the participants as the session is in progress.

Begin Session button pops up an alert, probably a sweet one, which verifies that the session organizer wants to being a session. Confirming this alert moves the session to the Session Introduction view.
	Sockets Stretch Goal -
			## Participants Join Open Session
Session Participant enters their name and specific question from their phone or electronic device connected to a main session which was created by the session organizer. The database needs to know that there is a connection between the person and the question entered, so that they cannot be randomly assigned their own question.


# Session Introduction
Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

The landing page is the first screen participants will see when a session is about to begin, it will feature logo and brand animations and it will set the tone of the application. Because public speaking  can produce a natural level of anxiety, it is important that the animation feel playful and game-like as well as engaging the participants.

The Session Introduction view naturally progresses to the Practice Session view.


# Practice Session
Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

Session organizer and participants will spend the majority of their time on this page. This page executes the practice session, choosing participants and questions at random.

Participants need to be able to be added or deleted during the session by the session organizer. This behavior needs to update or delete from the database collection for the session object.

Initial view of the page shows a list of participants in the session on the right hand side of the screen. The top half indicates the session name and theme while the bottom half has a large “choose next question” button.

Assigning of question is triggered by session organizer, by clicking “choose next” question. The participants are given 15 seconds before a timer begins and a person is assigned the question. During this time a participant may volunteer to answer the question. The session organizer clicks on that participant’s name in order to assign them to that question.  The choose next button changes views to provide visual feedback to the speaker as to how long they have been talking as well as provides the session organizer a stop timer button. As the timer hits 60 seconds, 90 seconds, and 120 seconds it changes in appearance to give visual cues as to how long the participant has been speaking. Once the participant has indicated they are finished speaking, the session organizer hits a stop button located on the timer. The time the person spoke for is logged next to the participant's name.  The participant’s name is greyed out indicating that they are done for the round. The timer view changes back to a “choose next question” button, and the question field is emptied.
	Sockets Stretch Goal -
			## Participants Are Assigned Random Question
If no one volunteers to answer a question, then a participant is chosen at random, ensuring that the person chosen does not  get assigned their own question. Further logic needs to be put in place making sure that the last question asked is not the question of the last person to speak.

After the final person has completed the top half of the view provides a display of the percentage of participants who successfully spoke for more than one minute. It does not however call out the people who did not, the focus is on success.

Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

Bottom half of display becomes an end session button allowing the session organizer to logout via pop up. Upon logging out the session is application is reset to the ‘/’ screen.


## Database Collections
Session Object Collection
Contains objects which represent each session. Object properties will include session name, session theme, questions, and participants.

## Version 2.0
Stretch goal - Session organizer as admin is able to login/logout and manage database of questions, as well as past and present sessions.

## Stretch goal - Participant is able to login/logout and view past and current sessions, questions answered, times, and time averages.

## Browsers
Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.

Browser Name
Version
Firefox
52
Chrome
57
Safari
10.1

## Assumptions
While completing this estimate the following assumptions were made.
Session Organizer and Participants will use browsers which support ES6
Heroku and mLabs will host the application
Technologies
MEAN Stack
MongoDB
Socket.io
Express.js
AngularJS
Node.js
ES6
CSS Grid or Bootstrap
Post CSS or SASS
Passport
Grunt
Probably some Sweet Alerts
Gimp
