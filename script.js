const questionDivs = document.querySelectorAll('.questionDiv')

questionDivs.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
    })
})