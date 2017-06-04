# Murmuration: A Table Topics Discussion Practice App

Keith Tomlinson
April 19, 2017 | Version 1.0

Important Directions:
* Run `npm install`,
* Run `grunt' in an open tab of terminal,
* Use the `client` file to work on front end files. Grunt will watch those files to be compiled into the `server/public` files. This handles minification and such.

## Application Overview
Table Topics Discussion Practice App is a full-stack web application which facilitates groups in practicing off the cuff responses to themed questions in a low stakes and supportive environment. Inspired by the Table Topics portion of the Toastmasters format, this app will help participants become comfortable with speaking publicly for 1 - 2 minutes on a wide range of topics. By engaging the participants with a playful environment it will work toward building confidence and improv skills, lowering anxiety, and helping them to communicate their thoughts and needs more effectively.

---

# Application Features
## User Roles

**Session Organizer:**
Sets up a new session, names it, chooses theme, and enters questions for that theme. Drives the session experience.

**Session Participant:**
Views the browser during a session and responds to direction from but does not physically interact with computer.

## Admin Login and Create Session
**Admin Login>** Create Session> Enter Participants> Session Intro> Practice Session> Admin Logout

At the base / of the application, the session organizer is asked to login to create a new
session.

  Admin Login> **Create Session>** Enter Participants> Session Intro> Practice Session> Admin Logout

Upon login the session organizer names the session, creates a theme for the session and enters questions for the session. This builds a session object which will be stored in a database collection of sessions. The view will update as questions are entered allowing the session organizer to see what has been entered. Each entered question can be updated or deleted by the organizer.

### Organizer Opens a Session

Instead of the session organizer adding in questions, the organizer will name the session and set its theme then create a session that participants will be invited to join.


## Enters Participants
  Admin Login> Create Session> **Enter Participants>** Session Intro> Practice Session> Admin Logout

After create session is verified, the session organizer is brought to an input participant names view. Participants names are added to the current session object in the database collection of sessions.


## Session Introduction

  Admin Login> Create Session> Enter Participants> **Session Intro>** Practice Session> Admin Logout

The landing page is the first screen participants will see when a session is about to begin, it will feature logo and brand animations and it will set the tone of the application.

## Practice Session

  Admin Login> Create Session> Enter Participants> Session Intro> **Practice Session>** Admin Logout

Session organizer and participants will spend the majority of their time on this page. This page executes the practice session, choosing participants and questions at random.

Initial view of the page shows a list of participants in the session on the right hand side of the screen. The top half indicates the session name and theme while the bottom half has a large “choose next question” button.

Assigning of question is triggered by session organizer, by clicking “choose next” question.  The choose next button changes views to provide visual feedback to the speaker as to how long they have been talking as well as provides the session organizer a stop timer button. As the timer hits 60 seconds, 90 seconds, and 120 seconds it changes in appearance to give visual cues as to how long the participant has been speaking. Once the participant has indicated they are finished speaking, the session organizer hits a stop button located on the timer. The time the person spoke for is logged next to the participant's name.  The participant’s name is greyed out indicating that they are done for the round. The timer view changes back to a “choose next question” button, and the question field is emptied.

After the final person has completed the top half of the view provides a display of the percentage of participants who successfully spoke for more than one minute. It does not however call out the people who did not, the focus is on success.

  Admin Login> Create Session> Enter Participants> Session Intro> Practice Session> **Admin Logout**

Bottom half of display becomes an end session button allowing the session organizer to logout via pop up. Upon logging out the session is application is reset to the ‘/’ screen.

---

### Database Collections
**Session Object Collection**
Contains objects which represent each session. Object properties will include session name, session theme, questions, and participants.

### Browsers
  * Chrome 57

### Technologies:

  * MEAN Stack
  * MongoDB
  * Socket.io
  * Express.js
  * AngularJS
  * Node.js
  * Bootstrap
  * Passport
  * Grunt
  * Gimp
