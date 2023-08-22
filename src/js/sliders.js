'use strict'
import customeSliderIdea from "./slider_component_idea.js";
import customeSliderNews from './slider_component_news.js';
document.querySelector('customeSliderIdea').insertAdjacentHTML('afterend' , customeSliderIdea);
document.querySelector('customeSliderNews').insertAdjacentHTML('afterend' , customeSliderNews);

const sliderContainers = document.querySelectorAll('.slider-custom');

function updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength) {
  nextButton.disabled = currentSlide >= sliderChildrenLength - slidesToShow;
}

sliderContainers.forEach(sliderContainer => {
  const slider = sliderContainer.querySelector('.slider');
  const slideWidth = slider.querySelector('.slide').offsetWidth + 26;
  const slidesToShow = 4;
  let currentSlide = 0;
  let currentOffset = 0;

  const nextButton = sliderContainer.querySelector('.next-button');
  const sliderChildrenLength = slider.children.length;

  if (nextButton) {
    nextButton.addEventListener('click', function () {
      if (currentSlide < sliderChildrenLength - slidesToShow) {
        currentSlide++;
        currentOffset = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${currentOffset}px)`;
        updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
      }
    });
}});


