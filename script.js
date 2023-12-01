const questionDivs = document.querySelectorAll('.questionDiv');

questionDivs.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const plusIcon = question.querySelector('.plus');
        const minusIcon = question.querySelector('.minus');
        answer.classList.toggle('hidden');

        if (answer.classList.contains('hidden')) {
            plusIcon.classList.remove('hidden');
            minusIcon.classList.add('hidden');
        } else {
            plusIcon.classList.add('hidden');
            minusIcon.classList.remove('hidden');
        }
    })
});
