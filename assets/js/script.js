// need a button that says start (DONE)
// when i click start button, the timer starts & i'm presented with my first question
// the question will be composed of a question with four possible responses (this will be an object), three wrong answers and one right answer
// when an answer is selected a function will validate if the selection is correct
// when the wrong answer is selected, time is subtracted from the clock
// when i answer a question, i am presented with the next question
// the game is over when all the questions have been answered and/or the time runs out
// when the game is over then i save my initials and my score


// Structure list of question objects, each question object has text and list of answer objects. Each answer object 
// has text and a property indicating if it is the correct answer or not
const questions = [
    {
        text:"What does CSS stand for?",
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
        text:"What does HTML stand for?",
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
        text:"What is a JavaScript element that represents either TRUE or FALSE values?",
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
        text:"What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
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
        text:"The link element must go inside the ____ tag of an HTML document or page.",
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
var currentScore = 0

// Create a global variable capturing all hi-scores
var currentScores = [
    
]


// Start the quiz
function startQuiz() {

    // Resetting our current score to zero if previous attempts occurred
    currentScore=0

    // Hide elements that should not be on the screen
    document.getElementById("start").classList.add("hide")
    document.getElementById("ended").classList.add("hide")
    document.getElementById("during").classList.remove("hide")

    
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
        document.getElementById("timer").innerHTML = seconds + " seconds";

        // If the count down is complete the quiz is done
        if (difference < 0) {
            clearInterval(x);
            // when we reach the time limit the student has the opportunity to take it again
            endQuiz()
        }
    }, 1000);

    //POPULATE first question/answers AND add event listener
    updateQuestion(currentQuestion)
}

function updateQuestion(index) {

    // Set the current question text
    document.getElementById("currentQuestion").innerHTML = questions[index].text;

    // Create 4 inputs inside of the div with id="answers"
    
    for(var i=0; i<questions[index].answers.length; i++){  
        document.getElementById("answers").innerHTML += "<button onclick='answerClicked("+index+", "+i+")'>"+questions[index].answers[i].text+"</button>"
    }
    // Each input should have a the corresponding answer.text and the value set to the answer.value
    // Since questions[index].question.answers is a list, we can use a for-loop to do this
    // e.g. for each answer in answers => create an input
    // After creating the inputs we are going to want to add event listeners to make sure when can capture when the user clicks on it
}

function answerClicked(questionIndex, answerIndex){
    //If answer is correct, increase the global score variable by one
    if(questions[questionIndex].answers[answerIndex].correct ){
        //TODO uncomment
    //    alert("correct")
        currentScore++
    } else {
        // alert("incorrect")
    }
    document.getElementById("answers").innerHTML = ""
    currentQuestion++
    if (currentQuestion == questions.length) {
        endQuiz()
    } else {
        updateQuestion(currentQuestion)
    }

}

function endQuiz() {
    document.getElementById("during").classList.add("hide")
    document.getElementById("ended").classList.remove("hide")
    document.getElementById("score").innerHTML = currentScore

    // Reset current question to zero
    currentQuestion=0

    // Reset any answers that remain 
    document.getElementById("answers").innerHTML = ""
}

