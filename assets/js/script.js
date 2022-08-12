// container variables
var containers = document.querySelector('.containers');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');
var container6 = document.getElementById('container6');
var timesUp = document.getElementById('container7');
var questions = document.getElementById('questions');

var questArr = [container2, container3, container4, container5, container6, timesUp];

// button variables
var begin = document.getElementById('begin');
var button = document.querySelector('.button');
var submit = document.getElementById('go');

// tracking variables
var challengeScore = 0;
var timeLeft = 65;
var questionNumber = 0; // track the question number

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
    
    // every time button is pushed, check if answer is right
    var answerState = element.getAttribute("data-answer");

    if (answerState.toLowerCase() === "correct") {
        // add to score
        challengeScore += 20;
    // if answer is incorrect, subtract from time
    } else if (answerState.toLowerCase() === "incorrect") {
        timeLeft -= 20;
    }

    // set current question item to hidden
    questArr[questionNumber].dataset.state = "hidden";

    //check if next question is greater than length of array
    if (questArr.length >= questionNumber) {
        // set next item to visible
        questArr[questionNumber + 1].dataset.state = "visible";
        // add one to question number
        questionNumber++;
    }

    // if the quiz is over and 'finished' container is showing, hide the timer
    if (questionNumber === 5) {
        var timerEl = document.getElementById('countdown');
        timerEl.dataset.state = "hidden";
    }
};

// save score after highscore go button is clicked
var saveScore = function() {
    debugger;
    console.log('clicked!');
    // grab initials from form input
    var name = document.getElementById('initials').value;
    console.log(name);
    // set the initials and score
    // var newScore = {initials: name, score: challengeScore};
    // console.log(newScore);
    // saves pair to local storage
    JSON.stringify(localStorage.setItem('name', name));
    JSON.stringify(localStorage.setItem('score', challengeScore));
    console.log('almost there!');

    location.href = './highscores.html'
    
    // // get pair from local storage
    // var writeName = localStorage.getItem('name');
    // var writeScore = JSON.parse(localStorage.getItem('score'));
    // console.log(writeName + writeScore);

    // // create li to write pair (score, name)
    // var listItem = document.createElement("li");
    // listItem.innerText = ("Name: " + writeName + ", Score: " + writeScore);
    // console.log(listItem);

    // // append li to the parent element unordered list
    // var scoreList = document.querySelector('.highscores');
    // console.log(scoreList);
    // scoreList.appendChild(listItem);
    // console.log('so close...')
    // // take user to highscores page where their score is displayed
    // location.href('./highscores.html');
}






// write score to the highscore list
var writeScore = function() {
    
    
}

// event listeners added to button clicks and calling their corresponding functions
begin.addEventListener("click", beginQuiz);
document.querySelectorAll("#invisible-box").forEach((e) => {
    e.addEventListener("click", nextQuestion);
});
submit.addEventListener("click", saveScore);