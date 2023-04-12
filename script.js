// Define the questions array
const questions = [
  {
    question: "What is your favorite color?",
    answers: {
      a: "Pink",
      b: "Blue",
      c: "Green",
      d: "Yellow"
    }
  },
  {
    question: "What is your favorite animal?",
    answers: {
      a: "Dog",
      b: "Cat",
      c: "Bird",
      d: "Fish"
    }
  },
  {
    question: "What is your zodiac sign?",
    answers: {
      a: "Aries",
      b: "Taurus",
      c: "Gemini",
      d: "Cancer",
      e: "Leo",
      f: "Virgo",
      g: "Libra",
      h: "Scorpio",
      i: "Sagittarius",
      j: "Capricorn",
      k: "Aquarius",
      l: "Pisces"
    }
  }
];

// Define the result message
const result = {
  title: "You are blank",
  description: "Everyone is blank."
};

// Define the function to display the quiz questions
function displayQuizQuestions() {
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit-button");
  const outputContainer = document.getElementById("output-container");
  const outputTitle = document.getElementById("result-title");
  const outputDescription = document.getElementById("result-description");
  
  // Display each question and its answers
  questions.forEach((question, questionIndex) => {
    const answers = [];
    for (const letter in question.answers) {
      answers.push(`
        <label>
          <input type="radio" name="question${questionIndex}" value="${letter}">
          ${question.answers[letter]}
        </label>
      `);
    }
    
    quizContainer.innerHTML += `
      <div class="question">${question.question}</div>
      <div class="answers">${answers.join("")}</div>
    `;
  });
  
  // Hide the submit button and output container initially
  submitButton.style.display = "none";
  outputContainer.style.display = "none";
  
  // Show the submit button and output container when all questions are answered
  function showOutput() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    
    questions.forEach((question, questionIndex) => {
      const answerContainer = answerContainers[questionIndex];
      const selector = `input[name=question${questionIndex}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      if (userAnswer === "a") {
        numCorrect++;
      }
    });
    
    outputTitle.textContent = result.title;
    outputDescription.textContent = result.description;
    outputContainer.style.display = "block";
    submitButton.style.display = "none";
  }
  
  // Add event listener to submit button
  submitButton.addEventListener("click", showOutput);
  
  // Add event listener to each radio button to show submit button when all questions are answered
  const radioButtons = quizContainer.querySelectorAll("input[type=radio]");
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", () => {
      if (radioButtons.length === document.querySelectorAll("input[type=radio]:checked").length) {
        submitButton.style.display = "block";
      }
    });
  });
}

// Call the function to display the quiz questions
displayQuizQuestions();
