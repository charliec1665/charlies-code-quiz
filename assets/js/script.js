var container1 = document.getElementByClassName('container1');
var container2 = document.getElementByClassName('container2');
var container3 = document.getElementByClassName('container3');
var container4 = document.getElementByClassName('container4');
var container5 = document.getElementByClassName('container5');
var container6 = document.getElementByClassName('container6');
var questions = document.getElementById('questions');

var button = document.getElementByClassName('begin');
var buttonOne = document.getElementByClassName('one');
var buttonTwo = document.getElementByClassName('two');
var buttonThree = document.getElementByClassName('three');
var buttonFour = document.getElementByClassName('four');

// removes all questions so only the welcome message is showing
questions.remove();

// function to start timer
var timerFunction = function() {
    var timerEl = document.getElementById('countdown');

    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time:' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            //show times-up container
            var timesUp = document.getElementsByClassName('times-up');

            appendChild(timesUp);
          }
    }, 1000);
}

// create conditional to show only one container at a time, using "data-state 'visible'"
var beginQuiz = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(button)) {
        //remove welcome message
    container1.remove();
    //show first question
    appendChild(container2);
    // start timer
    timerFunction();
    };
}

// ceate timer for 75 seconds
    // when timer ends use conditional to take user to times-up container using data-state
// create eventlistener for button clicks
    // when clicking question buttons take to next question
    // when answering incorrectly, use conditional to subtract 10secs from timer
    // when clicking initials submit button take to highscores page
// create function to add initials and question scores to localstorage
    // access localstorage to display initials and score to highscores page

button.addEventListener("click", beginQuiz);