// need a button that says start (DONE)
// when i click start button, the timer starts & i'm presented with my first question
// the question will be composed of a question with four possible responses (this will be an object), three wrong answers and one right answer
// when an answer is selected a function will validate if the selection is correct
// when the wrong answer is selected, time is subtracted from the clock
// when i answer a question, i am presented with the next question
// the game is over when all the questions have been answered and/or the time runs out
// when the game is over then i save my initials and my score


// Start the quiz
function startQuiz() {

    // Resetting our current score to zero if previous attempts occurred
    currentScore=0

    // Hide elements that should not be on the screen
    document.getElementById("start").classList.add("hide")
    
    
    // Set the time we are counting down to (current time +  1)
    var countDownDate = new Date(new Date().getTime() + 1 * 60000);

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the difference between now and the count down date
        var difference = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        // document.getElementById("timer").innerHTML = seconds + " seconds"; // TODO

        // If the count down is complete the quiz is done
        if (difference < 0) {
            clearInterval(x);
            // when we reach the time limit the student has the opportunity to take it again
            // endQuiz() TODO
        }
    }, 1000);

    //POPULATE first question/answers AND add event listener
    updateQuestion(currentQuestion)
}



