window.onload = function() {
  const slideshow = document.getElementById('slideshow');
  const slideshowButtonsContainer = document.getElementById('slideshow_buttons');
  Array.from(slideshow.children).forEach(() => {
    let btn = document.createElement('div');
    btn.classList.add('slideshow__button');
    slideshowButtonsContainer.appendChild(btn);
  });
  const slideshowButtons = Array.from(document.getElementsByClassName('slideshow__button'));
  for (let i = 0; i < slideshowButtons.length; i++) {
    slideshowButtons[i].addEventListener('click', (event) => {
      console.log('click');
      slideshowButtons.forEach(element => element.classList.remove('active'));
      event.target.classList.add('active');
      slideshow.style.transform = `translateX(${i * -100}vw)`;
    });
  }
  slideshowButtons[0].click();
  let i = 1;
  let slides = setInterval(() => {
    slideshowButtons[i++ % slideshowButtons.length].click();
  }, 5000);
}
