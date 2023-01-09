// List of question objects, each question object has text and list of answer objects. Each answer object 
// has text and a property indicating if it is the correct answer or not
const questions = [
    {
        text: "What does CSS stand for?",
        answers: [
            {
                text: "Cascading Style Sheets",
                correct: true
            },
            {
                text: "Cascading Sheet Styles",
                correct: false
            },
            {
                text: "Calculated Style Syntax",
                correct: false
            },
            {
                text: "Corresponding Style Sheets",
                correct: false
            },
        ]
    },
    {
        text: "What does HTML stand for?",
        answers: [
            {
                text: "Handwritten Text Manual Language",
                correct: false
            },
            {
                text: "Hyper Text Markdown Language",
                correct: false
            },
            {
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "Hyperbolic Transmission Learner",
                correct: false
            },
        ]
    },
    {
        text: "What is a JavaScript element that represents either TRUE or FALSE values?",
        answers: [
            {
                text: "Event",
                correct: false
            },
            {
                text: "Condition",
                correct: false
            },
            {
                text: "String",
                correct: false
            },
            {
                text: "Boolean",
                correct: true
            },
        ]
    },
    {
        text: "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
        answers: [
            {
                text: "code",
                correct: false
            },
            {
                text: "!DOCTYPE",
                correct: true
            },
            {
                text: "title",
                correct: false
            },
            {
                text: "embed",
                correct: false
            },
        ]
    },
    {
        text: "The link element must go inside the ____ tag of an HTML document or page.",
        answers: [
            {
                text: "head",
                correct: true
            },
            {
                text: "div",
                correct: false
            },
            {
                text: "title",
                correct: false
            },
            {
                text: "body",
                correct: false
            },
        ]
    },
]

// On page load set the first question to be looked at to zero
var currentQuestion = 0

// Users start with a score of zero
var currentScore = null

// Create a global variable for timer
var countdown = null

//  Create a global variable to keep track of current quiz status
var quizEnded = true

// Start the quiz
function startQuiz() {

    // Resetting global variables when the quiz starts
    currentScore = 0
    countdown = 60
    quizEnded = false

    document.getElementById("timer").innerHTML = countdown + " seconds";

    // Hide elements that should not be on the screen
    document.getElementById("start").classList.add("hide")
    document.getElementById("ended").classList.add("hide")
    document.getElementById("leaderboard").classList.add("hide")
    document.getElementById("during").classList.remove("hide")

    // Reset any answers that remain 
    document.getElementById("answers").innerHTML = ""

    // Update the count down every 1 second
    var x = setInterval(function () {

        countdown--;

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = countdown + " seconds";

        // If the count down is complete the quiz is done
        if (countdown <= 0) {
            clearInterval(x);
            
            // If quiz has not already been completed, end it
            if (!quizEnded){
                endQuiz()
            }

        }
    }, 1000);

    //POPULATE first question/answers AND add event listener
    updateQuestion(currentQuestion)
}

function updateQuestion(index) {

    // Set the current question text
    document.getElementById("currentQuestion").innerHTML = questions[index].text;

    // Run through the list of answers for a given question and create a button
    for (var i = 0; i < questions[index].answers.length; i++) {
        document.getElementById("answers").innerHTML += "<button onclick='answerClicked(" + index + ", " + i + ")' class='btn btn-primary width-full my-1'>" + questions[index].answers[i].text + "</button>"
    }
}

function answerClicked(questionIndex, answerIndex) {

    // If correct, increment score and show correct
    if (questions[questionIndex].answers[answerIndex].correct) {
        currentScore++
        document.getElementById("correct").classList.remove("hide")
    } else { // Else, decrease countdown and show incorrect
        countdown = countdown - 15
        document.getElementById("incorrect").classList.remove("hide")
    }

    currentQuestion++

    // Wait before moving on to next question so that user can know if they got it right or wrong.
    setTimeout(function () {
        document.getElementById("correct").classList.add("hide")
        document.getElementById("incorrect").classList.add("hide")
        document.getElementById("answers").innerHTML = ""
        if (currentQuestion == questions.length) {
            endQuiz()
        } else {
            updateQuestion(currentQuestion)
        }
    }, 1000);
}

function endQuiz() {
    quizEnded = true
    document.getElementById("during").classList.add("hide")
    document.getElementById("ended").classList.remove("hide")
    document.getElementById("score").innerHTML = currentScore

    // Reset current question to zero
    currentQuestion = 0
}

// Alert if participant did not input at least 2 initials
function submitScore() {
    var initials = document.getElementById("initialsInput").value
    if (initials.length < 2) {
        alert("Please enter proper initials")
    }
    else {
        //UPDATE HTML
        document.getElementById("highScores").innerHTML += "<tr><td>" + initials + "</td><td>" + currentScore+ "</td> </tr>"
        document.getElementById("ended").classList.add("hide")
        document.getElementById("leaderboard").classList.remove("hide")
        document.getElementById("clearScores").classList.remove("hide")
    }
}

function clearHighScores() {
    document.getElementById("highScores").innerHTML = ""
    document.getElementById("clearScores").classList.add("hide")
}








