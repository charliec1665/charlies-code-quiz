var containers = document.querySelector('.containers');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');
var container6 = document.getElementById('container6');
var timesUp = document.getElementById('container7');
var questions = document.getElementById('questions');
// var questionContainer = document.getElementById('invisible-box');

var begin = document.getElementById('begin');
var button = document.querySelector('.button');

var questArr = [container2, container3, container4, container5, container6];

var challengeScore = 0;
var timeLeft = 75;

// function to start timer
var timerFunction = function() {
    var timerEl = document.getElementById('countdown');

    

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            
            //remove current container
            for (var i = 0; i < questArr.length; i++) {
                questArr[i].dataset.state = "hidden";
            };

            //show times-up container and allow user to enter initials to save highscore
            timesUp.dataset.state = "visible";
            clearInterval(timeInterval);
        }
    }, 1000);
}

// function to remove welcome page and show first question, using "data-state 'visible'"
var beginQuiz = function(event) {
    //remove welcome message by setting data-state to hidden
    container1.dataset.state = "hidden";
    //show first question by setting data-state to visible
    container2.dataset.state = "visible";
    // start timer
    timerFunction();
}

var nextQuestion = function(event) {
    var element = event.target;
    // when clicking question buttons take to next question
    if (event.target.matches('.button')) {
        console.log("clicked!");
        var state = element.getAttribute("data-answer");
            
        // if selected answer is correct add to score and move on to next question
        for (var i = 0; i < questArr.length; i++) {
            if (state === "correct") {
                challengeScore += 25;
                console.log(challengeScore);
                console.log(this);
                questArr[i].dataset.state = "hidden";
                questArr[i+1].dataset.state = "visible";
                break;
                //can only get to work once, can't get the next question to work
            // if selected answer is incorrect subtract time from timer and move on to next question
            } else if (state === "incorrect") {
                timeLeft -= 15;
                questArr[i].dataset.state = "hidden";
                questArr[i+1].dataset.state = "visible";
                break;
            };
        };
    };
};




// when clicking initials submit button take to highscores page
// create function to add initials and question scores to localstorage
    // access localstorage to display initials and score to highscores page

begin.addEventListener("click", beginQuiz);
document.querySelectorAll("#invisible-box").forEach((e) => {
    e.addEventListener("click", nextQuestion);
});
// questionContainer.addEventListener("click", nextQuestion)