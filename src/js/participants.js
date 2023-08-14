
const accordionCards = document.querySelectorAll('.faq-accordion__card');

accordionCards.forEach(card => {
    card.addEventListener('click', () => {
        const infoElement = card.querySelector('.accordion-card__info');

        infoElement.style.display = (infoElement.style.display === 'block') ? 'none' : 'block';

        const titleElement = card.querySelector('.accordion-card__title');

        titleElement.classList.toggle('expanded');

        titleElement.classList.toggle('accordion-card__title--expanded', infoElement.style.display === 'block');
    });
});
