document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const toggleAnswer = () => {
      const answer = question.querySelector('.answer');
      const arrow = question.querySelector('.arrow');

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        arrow.classList.remove('rotate');
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.classList.add('rotate');
      }
    }

    question.addEventListener('click', toggleAnswer);
  })
})