const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');

        faqItems.forEach(i => {
            i.querySelector('.faq-question').classList.remove('active');
            i.querySelector('.faq-answer').style.display = 'none';
            i.querySelector('.faq-question .icon').textContent = '+';
        });

        if (!isActive) {
            question.classList.add('active');
            answer.style.display = 'block';
            question.querySelector('.icon').textContent = '-';
        }
    });
});