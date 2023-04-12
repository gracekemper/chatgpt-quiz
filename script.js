// Define the quiz questions and their answers
const quizQuestions = [
	{
		question: "How often are you hungry?",
		answers: ["Always", "Often", "Sometimes", "Never"]
	},
	{
		question: "What's your favorite pet?",
		answers: ["Dog", "Cat", "Hamster", "Snake", "Bird", "Chicken"]
	},
	{
		question: "What's your favorite weather?",
		answers: ["Cloudy", "Rainy", "Sunny", "Foggy"]
	},
	{
		question: "Would you consider yourself...",
		answers: ["Extrovert", "Introvert", "Ambivert"]
	},
	{
		question: "What's your zodiac?",
		answers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"]
	}
];

// Define the result messages
const resultTitle = "You are blank";
const resultDescription = "Everyone is blank.";

// Get the quiz form and result div
const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");

// Add event listener to the form submission
quizForm.addEventListener("submit", function(event) {
	event.preventDefault();
	
	// Get the user's answers from the form
	const userAnswers = [];
	for (let i = 0; i < quizQuestions.length; i++) {
		const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
		if (!selectedAnswer) {
			alert("Please answer all questions before submitting.");
			return;
		}
		userAnswers.push(selectedAnswer.value);
	}
	
	// Display the result on a new page
	const resultUrl = `result.html?resultTitle=${resultTitle}&resultDescription=${resultDescription}`;
	window.location.href = resultUrl;
});
