//A start button that when clicked a timer starts and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.

//Dom elements
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
    var currentQuestion = 0;
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