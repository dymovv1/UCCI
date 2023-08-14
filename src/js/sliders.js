const Hammer = require('hammerjs');
const sliderContainers = document.querySelectorAll('.slider-custom');

function updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength) {
  nextButton.disabled = currentSlide >= sliderChildrenLength - slidesToShow;
}

sliderContainers.forEach(sliderContainer => {
  const slider = sliderContainer.querySelector('.slider');
  const slideWidth = slider.querySelector('.slide').offsetWidth + 26;
  const slidesToShow = 4;
  let currentSlide = 0;
  let currentOffset = 0; // Доданий рядок

  const nextButton = sliderContainer.querySelector('.next-button');
  const sliderChildrenLength = slider.children.length;

  if (nextButton) {
    nextButton.addEventListener('click', function () {
      if (currentSlide < sliderChildrenLength - slidesToShow) {
        currentSlide++;
        currentOffset = -currentSlide * slideWidth; // Доданий рядок
        slider.style.transform = `translateX(${currentOffset}px)`;
        updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
      }
    });
  }

  const hammertime = new Hammer(sliderContainer);

  hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 20 });

  hammertime.on('panstart', function (e) {
    currentOffset = -currentSlide * slideWidth; // Замінено currentOffset на currentSlide * slideWidth
  });

  if ('ontouchstart' in window) {
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 100 }); // Додано обробник swipe для тач-жестів
    hammertime.on('swipeleft', function () {
      if (currentSlide < sliderChildrenLength - slidesToShow) {
        currentSlide++;
        currentOffset = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${currentOffset}px)`;
        updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
      }
    });
  
    hammertime.on('swiperight', function () {
      if (currentSlide > 0) {
        currentSlide--;
        currentOffset = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${currentOffset}px)`;
        updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
      }
    });
  }
  

  hammertime.on('pan', function (e) {
    const deltaX = e.deltaX;
    const newOffset = currentOffset + deltaX * 0.5; // Замінено -currentSlide на currentOffset
    const maxOffset = (sliderChildrenLength - slidesToShow) * slideWidth * -1;
    currentOffset = Math.max(maxOffset, Math.min(0, newOffset));
    slider.style.transform = `translateX(${currentOffset}px)`;
  });

  hammertime.on('panend', function (e) {
    const deltaX = e.deltaX;
    currentSlide = Math.round(-currentOffset / slideWidth); // Замінено -Math.floor на Math.round
    currentOffset = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${currentOffset}px)`;
  });
});
