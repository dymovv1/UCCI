function setActiveLangButton() {
    const storedLang = localStorage.getItem('selectedLang');
    if (storedLang) {
        const activeButton = document.querySelector(`.btn-lang-${storedLang}`);
        const otherButton = document.querySelector(`.btn-lang-${storedLang === 'uk' ? 'en' : 'uk'}`);
        activeButton.classList.add('active');
        otherButton.classList.remove('active');
    }
}

function setLangButtonClickHandler() {
    const langButtons = document.querySelectorAll('.btn-lang');

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.classList.contains('btn-lang-uk') ? 'uk' : 'en';
            localStorage.setItem('selectedLang', selectedLang);
            setActiveLangButton();
        });
    });
}

setLangButtonClickHandler();
setActiveLangButton();


const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('is-active');
});