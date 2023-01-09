# timed-coding-quiz
Boot Camp Challenge 4
Web API's

## About
This project is a timed coding quiz built on Javascript, HTML, CSS and Bootstrap v5.0.

### Deployed URL
[timed-coding-quiz](https://alflint.github.io/timed-coding-quiz/)

## Summary
This is a 60 second timed quiz with 5 questions. When the quiz starts the first question appears and a 60 second timer starts. The participant is prompted to answer the question with four prompts, three wrong choices and one correct one. Each time the participant selects an answer, correct or incorrect is displayed at the bottom of the quiz. If the participant answers the question incorrectly, 15 seconds is deducted from the running timer. The quiz is complete either when the participant has completed all the questions or when the timer expires. Once the quiz is complete, the participant is prompted to enter their initials and submit their score. Any submission with less than two characters will not be accepted and the participant will be prompted to re-enter their initials. Once submitted, each participant's score is added to the leader board. Once the leader board screen is displayed, the participant is prompted to re-start the quiz or clear the leader board.


## Instructions
![Instructions](/assets/img/instructions.png)

## Questions
![Questions](/assets/img/questions.png)

## Ended
![Initials](/assets/img/initials.png)

## Leaderboard
![Leaderboard](/assets/img/leaderboard.png)

# Boot Camp Challenge 04 Web APIs: Code Quiz
## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this module, this Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```