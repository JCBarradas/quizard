//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.

//Dom elements
    var startPage = document.querySelector("#start-screen")
    var startButton = document.querySelector("#start");
    var quizContainer = document.querySelector("#questions");
    var endScreen = document.querySelector("#end-screen");
    var questionElement = document.querySelector("#question-title");
    var choicesElement = document.querySelector("#choices");
    var submitButton = document.querySelector("#submit");
    var userInitialsInput = document.querySelector("#initials");
    var finalScoreElement = document.querySelector("#final-score");
    var feedbackElement = document.querySelector("#feedback");
    var timerElement = document.querySelector("#time");
    
// variables
    var currentQuestionIndex = 0;
    var timer;
    var score=0;

// Array of question for quiz

var questions= [
    {
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
        correctAnswer: "Tim Berners-Lee",
    },
    {
        question: "What type of computer was the first laptop computer?",
        options: ["Apple Macintosh", "IBM PC", "Osborne 1"],
        correctAnswer: "Osborne 1",
    },
    {
        question: "What is the largest social media network in the world?",
        options: ["Twitter", "Facebook", "Instagram"],
        correctAnswer: "Facebook",
    }
]


 startButton.addEventListener("click", startQuiz);
 submitButton.addEventListener("click", endQuiz);

 // Function to start the quiz
 function startQuiz() {
  
 // Hide the starter page
   startPage.style.display = "none";
    
  // Show the quiz 
    quizContainer.classList.remove("hide");
    loadQuestions();

    // Start the timer
    startTimer();
}

   

// Function to load a question and its choices
function loadQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    // Create buttons for each option
    currentQuestion.options.forEach(function(choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function() {
            // Pass the choice as an argument
            checkAnswer(choice, currentQuestion.correctAnswer);
        });
        choicesElement.appendChild(button);
    });
};


// Function to check the answer
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        // Increase the score for a correct answer
        score += 10;
        feedbackElement.textContent = "Correct!";
    } else {
        // Subtract time for an incorrect answer
        timeLeft -= 10;
        feedbackElement.textContent = "Wrong!";
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Load the next question
        loadQuestions();
    } else {
        // End the quiz if all questions have been answered
        endQuiz();
    }
}

    
    // Function to start the timer
    function startTimer() {
        // Set the initial time for the quiz
            var timeLeft = 60;

        // Update the timer every second
        timer = setInterval(function() {
            timeLeft--;

            if (timeLeft <= 0) {
                // End the quiz if time runs out
                endQuiz();
            }

            // Update the timer display
            timerElement.textContent = timeLeft;
        }, 1000);
    };

      // Function to end the quiz
      function endQuiz() {
        // Stop the timer
        clearInterval(timer);

        // Hide the quiz container
        quizContainer.classList.add("hide");

        // Show the end screen
        endScreen.classList.remove("hide");

        // Display the final score
        finalScoreElement.textContent = score;
        feedbackElement.textContent = "";

        // Save the score to localStorage
    var initials = userInitialsInput.value.trim();
        if (initials !== "") {
            var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
            highscores.push({ initials: initials, score: score });
            localStorage.setItem("highscores", JSON.stringify(highscores));
        }
    }

    // Function to navigate to the highscores page
    function viewHighscores() {
        window.location.href = "highscores.html";
    }
