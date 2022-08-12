var showScore = function() {
    // get pair from local storage
    var writeName = localStorage.getItem('name');
    var writeScore = JSON.parse(localStorage.getItem('score'));
    console.log(writeName + writeScore);

    // create li to write pair (score, name)
    var listItem = document.createElement("li");
    listItem.innerText = ("Name: " + writeName + ", Score: " + writeScore);
    console.log(listItem);

    // append li to the parent element unordered list
    var scoreList = document.querySelector('.highscores');
    console.log(scoreList);
    scoreList.appendChild(listItem);
    console.log('so close...')
}

showScore();