/* eslint-disable no-unused-vars */
import './styles/clear-style.css';
import './styles/style.css';
import './modules/swiper/swiper.min.css';
import './modules/swiper/swiper.css';
import Swiper from 'swiper';
import forms from './modules/form';
import startPage from './modules/start-page';

let count = 1;
let countPoster = 4;

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 8,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function nextPage() {
  const slider = document.querySelector('.slider-container');
  const posters = slider.querySelectorAll('.swiper-slide');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  function handleImg(myImg, observer) {
    myImg.forEach((element) => {
      window.console.log(element.intersectionRatio);
      if (element.intersectionRatio === 1) {
        count += 1;
        window.console.log(count);
        countPoster += 10;
        window.console.log(countPoster);
        startPage(count)
          .then(() => {
            mySwiper.update();
          })
          .catch(() => {
            window.console.log('error');
          });
      }
    });
  }

  const observer = new IntersectionObserver(handleImg, options);
  const target = posters[countPoster];
  observer.observe(target);
  window.console.log(target);
}


window.onload = () => {
  forms(count);
  startPage(count)
    .then(() => {
      mySwiper.update();
    })
    .then(() => {
      document.querySelector('.slider-container').addEventListener('click', () => {
        nextPage();
      });
    })
    .catch(() => {
      window.console.log('error');
    });
};
