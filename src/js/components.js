import header from './header.js';
import modalWindows from './modalWindows.js';
import customeSliderIdea from "./slider_component_idea.js";
import customeSliderNews from './slider_component_news.js';
import footer from './footer.js';

document.querySelector('header').insertAdjacentHTML('afterbegin', header);
document.querySelector('modalWindows').insertAdjacentHTML('afterbegin' , modalWindows);
document.querySelector('customeSliderIdea').insertAdjacentHTML('afterbegin' , customeSliderIdea);
document.querySelector('customeSliderNews').insertAdjacentHTML('beforeend' , customeSliderNews);
document.querySelector('footer').insertAdjacentHTML('beforeend', footer);