var highscoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");


    loadHighscores();

    // Clear highscores
    clearButton.addEventListener("click", function() {
        localStorage.removeItem("highscores");
        loadHighscores(); // Reload the list after clearing
    });

    // Function to load and display highscores
    function loadHighscores() {
        // Clear the existing highscores list
        highscoresList.innerHTML = "";

        // Get highscores from localStorage or set an empty array if none exists
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

        // Sort highscores by score in descending order
        highscores.sort((a, b) => b.score - a.score);

        // Display highscores in the list
        highscores.forEach(function(score) {
            var listItem = document.createElement("li");
            listItem.textContent = `${score.initials} - ${score.score}`;
            highscoresList.appendChild(listItem);
        });
    }