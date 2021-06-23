

var timerDisplay = document.querySelector(".timer-text")


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

var quizQuestions = function() {
    
}

$("#startButton").on("click", function() {
    timerCounter();
})