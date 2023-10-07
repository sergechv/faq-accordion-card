document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const toggleAnswer = () => {
      const answer = question.querySelector('.answer');
      answer.style.display = (answer.style.display === 'block') ? 'none': 'block';

      const arrow = question.querySelector('.arrow');
      arrow.classList.toggle('rotate');
    }

    question.addEventListener('click', toggleAnswer);
  })
})