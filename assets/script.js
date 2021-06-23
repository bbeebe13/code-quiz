
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

var answersObj = [
    {
        answer1: "L",
        answer2: "B",
        answer3: "C",
        answer4: "D",
    }, 
    {
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
    },
    {
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
    },
    {
        answer1: "A",
        answer2: "B",
        answer3: "C",
        answer4: "D",
    }
]

console.log(answersObj);

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
var createQuizQuestions = function(question, answers) {
    //Creates quiz container element
    var quizContainerEl = document.createElement("section");
    quizContainerEl.classList.add("quiz-container");
    body.appendChild(quizContainerEl);

    var quizQuestionEl = document.createElement("h2");
    quizQuestionEl.textContent = question;

    quizContainerEl.appendChild(quizQuestionEl);

    var answerButtonEl = document.createElement("div");
    answerButtonEl.classList.add("answer-section");

    quizContainerEl.appendChild(answerButtonEl);

    for (var i = 0; i < 4; i++) {
        if (i===0) {
            var answerButtons = document.createElement("button");
            answerButtons.classList.add("answer-button");
            answerButtons.textContent = answers.answer1;
            answerButtonEl.appendChild(answerButtons);
        } else if (i===1) {
            var answerButtons = document.createElement("button");
            answerButtons.classList.add("answer-button");
            answerButtons.textContent = answers.answer2;
            answerButtonEl.appendChild(answerButtons);
        } else if (i===2) {
            var answerButtons = document.createElement("button");
            answerButtons.classList.add("answer-button");
            answerButtons.textContent = answers.answer3;
            answerButtonEl.appendChild(answerButtons);
        } else {
            var answerButtons = document.createElement("button");
            answerButtons.classList.add("answer-button");
            answerButtons.textContent = answers.answer4;
            answerButtonEl.appendChild(answerButtons);
        }

    }
}

$("#startButton").on("click", function() {
    timerCounter();
    createQuizQuestions(quizQuestionsObj.question1, answersObj[0]);
})