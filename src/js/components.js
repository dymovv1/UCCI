import header from './header.js';
import modalWindows from './modalWindows.js';
import footer from './footer.js';


document.querySelector('header').insertAdjacentHTML('beforebegin', header);
document.querySelector('modalWindows').insertAdjacentHTML('beforebegin' , modalWindows);
document.querySelector('footer').insertAdjacentHTML('beforeend', footer);


