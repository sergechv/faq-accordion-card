document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const toggleAnswer = () => {
      const answer = question.querySelector('.answer');
      const arrow = question.querySelector('.arrow');
      const h2 = question.querySelector('h2');

      answer.style.display = (answer.style.display === 'block') ? 'none': 'block';
      arrow.classList.toggle('rotate');
      h2.classList.toggle('bold-font');
    }
    question.addEventListener('click', toggleAnswer);
  });
});