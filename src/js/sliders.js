// const cardInfoList = document.querySelectorAll('.card-info');

// cardInfoList.forEach(cardInfo => {
//   const cardTitle = cardInfo.querySelector('.card-title');
//   const cardText = cardInfo.querySelector('.card-text');
//   const cardDetails = cardInfo.querySelector('.card-block__details')
//   const cardHover = cardInfo.querySelector('.card-block__hover');

//   cardInfo.addEventListener('mouseenter', function() {
//     cardTitle.style.display = 'none';
//     cardDetails.style.display = 'none';
//     cardText.style.display = 'none';
//     cardHover.style.display = 'flex';
//   });

//   cardInfo.addEventListener('mouseleave', function() {
//     cardTitle.style.display = 'block';
//     cardText.style.display = 'block';
//     cardHover.style.display = 'none';
//     cardDetails.style.display = 'flex';
//   });
// });

// cardInfoList.forEach(cardInfo => {
//   cardInfo.addEventListener('mouseenter', function() {
//     cardInfo.classList.add('hover-info');
//   });

//   cardInfo.addEventListener('mouseleave', function() {
//     cardInfo.classList.remove('hover-info');
//   });
// });

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

  const nextButton = sliderContainer.querySelector('.next-button');
  const sliderChildrenLength = slider.children.length;

  if (nextButton) {
    nextButton.addEventListener('click', function () {
      if (currentSlide < sliderChildrenLength - slidesToShow) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
      }
    });
  }

  const hammertime = new Hammer(sliderContainer);

  let startOffset = 0;
  let currentOffset = 0;

  hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 });

  hammertime.on('panstart', function (e) {
    startOffset = currentOffset;
  });

  hammertime.on('pan', function (e) {
    currentOffset = startOffset + (e.deltaX * 0.4);
    const maxOffset = (sliderChildrenLength - slidesToShow) * slideWidth * -1;
    currentSlide = Math.min(0, Math.max(currentOffset / slideWidth * -1, maxOffset));
    slider.style.transform = `translateX(${currentOffset}px)`;
    updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
  });

  hammertime.on('panend', function (e) {
    currentOffset = startOffset + (e.deltaX * 0.4); // Adjust the speed here (0.5 is the factor)
    currentSlide = Math.round(currentOffset / slideWidth * -1);
    slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    updateNextButton(nextButton, currentSlide, slidesToShow, sliderChildrenLength);
  });
});








