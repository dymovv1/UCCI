import './../scss/main.scss';
import './components';
import './forms';
import './btnsLangBurger';
import './sliders.js';
import './slider_component_news';
import './slider_component_idea';
import './participants';
import './courses';
import './smm';
import './bonus';

// Отримуємо всі посилання в header
const headerLinks = document.querySelectorAll('header a');

// Додаємо обробник події для кожного посилання
headerLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Відмінюємо стандартну дію посилання
        event.preventDefault();
        
        // Отримуємо адресу, на яку вказує посилання
        const targetUrl = this.getAttribute('href');
        
        // Тут ви можете виконати будь-які додаткові дії перед переходом (наприклад, анімацію)
        
        // Переходимо на вказану сторінку
        window.location.href = targetUrl;
    });
});











