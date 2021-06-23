
// queries the timer displey in HTML
var timerDisplay = document.querySelector(".timer-text")
var body = document.body
var quizQuestionsObj =
    {
        question1: "Commonly used data types DO NOT include?",
        question2: "The condition in an if/else statement is enclosed with?",
        question3: "Arrays in Javascript can be used to store?",
        question4: "String values must be enclosed within _______ when being assigned to variables?",
        question5: "A very useful tool used during development and debugging for printing content to the debugger is?"
    }

// Timer function starts at 75 and counts down to 0
var timerCounter = function() {
    var remainingTime = 75;
    var timer = setInterval(function(){
        timerDisplay.textContent = "Time: " + remainingTime;
        remainingTime--;
        if (remainingTime < 0) {
            clearInterval(timer);
        }
    }, 1000)
}

//Displays quiz questions box
var createQuizQuestions = function() {
    //Creates quiz container element
    var quizContainerEl = document.createElement("section");
    quizContainerEl.classList.add("quiz-container");
    body.appendChild(quizContainerEl);

    var quizQuestionEl = document.createElement("h2");
    quizQuestionEl.textContent = "Question 1";

    quizContainerEl.appendChild(quizQuestionEl);
}

$("#startButton").on("click", function() {
    timerCounter();
    createQuizQuestions();
})