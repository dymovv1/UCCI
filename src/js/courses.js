const tabsButtons = document.querySelectorAll('.tabs-btn');
tabsButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Видаляємо клас 'is-active' у всіх кнопок
        tabsButtons.forEach(btn => btn.classList.remove('is-active'));
        // Додаємо клас 'is-active' тільки на той, на який клікнули
        button.classList.add('is-active');
    });
});

const coursesCards = document.querySelectorAll('.courses-card');

tabsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dataAge = button.getAttribute('id');

        coursesCards.forEach(card => {
            if (dataAge === 'all' || card.getAttribute('data-age') === dataAge) {
                card.classList.remove('hidden'); // Показуємо відповідні карточки або всі, якщо "Усі"
            } else {
                card.classList.add('hidden'); // Ховаємо інші карточки
            }
        });

        // Оновлюємо активність кнопок після зміни карточок
        tabsButtons.forEach(btn => {
            if (btn === button) {
                btn.classList.add('is-active');
            } else {
                btn.classList.remove('is-active');
            }
        });
    });
});