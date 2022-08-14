var showScore = function() {
    // get pair from local storage
    var writeName = localStorage.getItem('name');
    var writeScore = JSON.parse(localStorage.getItem('score'));

    // create li to write pair (score, name)
    var listItem = document.createElement("li");
    listItem.innerText = ("Name: " + writeName + ", Score: " + writeScore);

    // append li to the parent element unordered list
    var scoreList = document.querySelector('.highscores');
    scoreList.appendChild(listItem);
}

showScore();