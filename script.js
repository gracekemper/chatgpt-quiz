const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');
  const resultsText = document.createElement('p');
  resultsText.classList.add('results-text');
  resultsText.textContent = 'Your result: Blank Result';
  resultsContainer.appendChild(resultsText);
  quizForm.appendChild(resultsContainer);
  window.scrollTo(0, document.body.scrollHeight);
});
