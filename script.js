// DOM Elements 
const welcomePanel = document.getElementById("welcome-panel");
const challengePanel = document.getElementById("challenge-panel");
const outcomePanel = document.getElementById("outcome-panel");
const launchButton = document.getElementById("launch-btn");
const challengeText = document.getElementById("challenge-text");
const optionsBox = document.getElementById("options-box");
const activeChallengeSpan = document.getElementById("active-challenge");
const challengeCountSpan = document.getElementById("challenge-count");
const pointsTallySpan = document.getElementById("points-tally");
const finalPointsSpan = document.getElementById("final-points");
const maximumPointsSpan = document.getElementById("maximum-points");
const performanceMessage = document.getElementById("performance-message");
const replayButton = document.getElementById("replay-btn");
const trackerBar = document.getElementById("tracker-bar");

// Challenge questions)
const footballChallenges = [
  {
    question: "In which year did Cameroon first qualify for the FIFA World Cup?",
    answers: [
      { text: "1982", correct: true },
      { text: "1990", correct: false },
      { text: "1994", correct: false },
      { text: "1998", correct: false },
    ],
  },
  {
    question: "Which legendary Cameroonian goalkeeper was known for extravagant outfits and captaincy?",
    answers: [
      { text: "Joseph-Antoine Bell", correct: false },
      { text: "Thomas N'kono", correct: true },
      { text: "Carlos Kameni", correct: false },
      { text: "Jacques Songo'o", correct: false },
    ],
  },
  {
    question: "What year did Cameroon win their first African Cup of Nations",
    answers: [
      { text: "1984", correct: false },
      { text: "1988", correct: false },
      { text: "1990", correct: false },
      { text: "2000", correct: true },
    ],
  },
  {
    question: "Who scored Cameroon's famous goal against Argentina in the 1990 World Cup?",
    answers: [
      { text: "Roger Milla", correct: false },
      { text: "François Omam-Biyik", correct: true },
      { text: "Thomas N'kono", correct: false },
      { text: "Joseph Antoine Bell", correct: false },
    ],
  },
  {
    question: "How many African Cup of Nations titles has Cameroon won?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which Cameroonian player won the African Footballer of the year award in 2000?",
    answers: [
      { text: "Samuel Eto'o", correct: false },
      { text: "Patrick Mboma", correct: true },
      { text: "Rigobert Song", correct: false },
      { text: "Marc-Vivien Foé", correct: false },
    ],
  },
  {
    question: "What was the nickname of the 1990 Cameroon World Cup squad?",
    answers: [
      { text: "Indomitable Lions", correct: true },
      { text: "The African Giants", correct: false },
      { text: "Le continent", correct: false },
      { text: "The pride of Africa", correct: false },
    ],
  },
 {
    question: "Which Stadium is considered the home of Cameroon national football team?",
    answers: [
      { text: "Stade Ahmadou Ahidjo", correct: true },
      { text: "Stade Omnisports de Yaoundé", correct: false },
      { text: "Stade de la Réunification", correct: false },
      { text: "Stade Omnisports Paul Biya", correct: false },
    ],
  },
  {
    question: "Who is Cameroon's all-time scorer?",
    answers: [
      { text: "Roger Milla", correct: false },
      { text: "Samuel Eto'o", correct: true },
      { text: "Patrick Mboma", correct: false },
      { text: "Erick Maxim Tcoupo-Moting", correct: false },
    ],
  },
  {
    question: "In which World Cup did Roger Milla become the oldest goalscoere at the age of 42?",
    answers: [
      { text: "1990", correct: false },
      { text: "1994", correct: true },
      { text: "1998", correct: false },
      { text: "2000", correct: false },
    ],
  },
  {
    question: "Which Cameroonian Club was the first to win the African Champions League?",
    answers: [
      { text: "Canon Yaoundé", correct: true },
      { text: "Union Doula", correct: false },
      { text: "Tonnerre Yaoundé", correct: false },
      { text: "Coton Sprot", correct: false },
    ],
  },
  {
    question: "How many times has Cameroon reached the World quarter-finals?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Which year did Cameroon win Olympic gold in Football?",
    answers: [
      { text: "1990", correct: false },
      { text: "2000", correct: true },
      { text: "2004", correct: false },
      { text: "2008", correct: false },
    ],
  },
  {
    question: "Who captained Cameroon during their 2000 AFCON victory?",
    answers: [
      { text: "Rigobert Song", correct: true },
      { text: "Samuel Eto'o", correct: false },
      { text: "Patrick Mboma", correct: false },
      { text: "Marc-Vivien Foé", correct: false },
    ],
  },
  {
    question: "Which Cameroonian player tragically died during a Confederations Cup match in 2003?",
    answers: [
      { text: "Patrick Mboma", correct: false },
      { text: "Marc-Vivien Foé", correct: true },
      { text: "Albert Roger Milla", correct: false },
      { text: "Thomas N'Kono", correct: false },
    ],
  },
  {
    question: "What was Cameroon's best performance in the FIFA World Cup?",
    answers: [
      { text: "Round of 16", correct: false },
      { text: "Quarter-finals", correct: true },
      { text: "Semi-finals", correct: false },
      { text: "Group stage", correct: false },
    ],
  },
  {
    question: "Which Cameroonian won the UEFA Champions League with Barcelona?",
    answers: [
      { text: "Samuel Eto'o", correct: true },
      { text: "Rigobert Song", correct: false },
      { text: "Carlos Kameni", correct: false },
      { text: "Geremi Njitap", correct: false },
    ],
  },
  {
    question: "How many World Cup appearances has Cameroon made?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
{
    question: "Which Cameroonian coach led the team to 2002 AFCON victory?",
    answers: [
      { text: "Winfried Schäfer", correct: true },
      { text: "Claude Le Roy", correct: false },
      { text: "Pierre Lechantre", correct: false },
      { text: "Volker Finke", correct: false },
    ],
  },
  {
    question: "What is the traditional kit color of the Cameroon national team?",
    answers: [
      { text: "Green and red", correct: false },
      { text: "Green and Yellow", correct: false },
      { text: "Red and yellow", correct: false },
      { text: "Green, red and Yellow", correct: true },
    ],
  },                                        
];

// Challenge State Variables
let activeChallengeIndex = 0;
let accumulatedPoints = 0;
let optionsLocked = false;

// Initialize display values 
challengeCountSpan.textContent = footballChallenges.length;
maximumPointsSpan.textContent = footballChallenges.length;

// Event Listeners
launchButton.addEventListener("click", initiateChallenge);
replayButton.addEventListener("click", resetChallenge);

function initiateChallenge() {
  // Reset state variables
  activeChallengeIndex = 0;
  accumulatedPoints = 0;
  pointsTallySpan.textContent = 0;

  // Switch panels
  welcomePanel.classList.remove("active");
  challengePanel.classList.add("active");

  // Display first challenge
  presentChallenge();
}

function presentChallenge() {
  // Reset option lock
  optionsLocked = false;

  const currentChallenge = footballChallenges[activeChallengeIndex];

  // Update display
  activeChallengeSpan.textContent = activeChallengeIndex + 1;
  
  const progressPercentage = (activeChallengeIndex / footballChallenges.length) * 100;
  trackerBar.style.width = progressPercentage + "%";

  challengeText.textContent = currentChallenge.question;

  // Clear previous options
  optionsBox.innerHTML = "";

  // Create new option cards
  currentChallenge.answers.forEach((answer) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = answer.text;
    optionElement.classList.add("option-card");
    
    // Store correctness in dataset
    optionElement.dataset.valid = answer.correct;
    
    optionElement.addEventListener("click", chooseOption);
    
    optionsBox.appendChild(optionElement);
  });
}

function chooseOption(event) {
  // Prevent multiple selections
  if (optionsLocked) return;
  
  optionsLocked = true;

  const selectedOption = event.target;
  const isCorrect = selectedOption.dataset.valid === "true";

  // Visual feedback for all options
  Array.from(optionsBox.children).forEach((option) => {
    if (option.dataset.valid === "true") {
      option.classList.add("correct");
    } else if (option === selectedOption) {
      option.classList.add("incorrect");
    }
  });

  // Update points if correct
  if (isCorrect) {
    accumulatedPoints++;
    pointsTallySpan.textContent = accumulatedPoints;
  }

  // Move to next challenge or show results
  setTimeout(() => {
    activeChallengeIndex++;

    if (activeChallengeIndex < footballChallenges.length) {
      presentChallenge();
    } else {
      displayOutcome();
    }
  }, 1000);
}

function displayOutcome() {
  // Switch to outcome panel
  challengePanel.classList.remove("active");
  outcomePanel.classList.add("active");

  // Display final points
  finalPointsSpan.textContent = accumulatedPoints;

  // Calculate performance percentage
  const performancePercentage = (accumulatedPoints / footballChallenges.length) * 100;

  // Set performance message
  if (performancePercentage === 100) {
    performanceMessage.textContent = "Perfect Score! You're a true Lions expert! 🏆";
  } else if (performancePercentage >= 80) {
    performanceMessage.textContent = "Outstanding! You know your Cameroon football! ⭐";
  } else if (performancePercentage >= 60) {
    performanceMessage.textContent = "Great job! Solid knowledge of the Lions! 👍";
  } else if (performancePercentage >= 40) {
    performanceMessage.textContent = "Good effort! Keep learning about Cameroon football! 💪";
  } else {
    performanceMessage.textContent = "A good start! Study more and try again! 📚";
  }
}

function resetChallenge() {
  // Return to welcome panel
  outcomePanel.classList.remove("active");
  
  // Restart the challenge
  initiateChallenge();
}