/* eslint-disable no-unused-vars */
import './styles/clear-style.css';
import './styles/style.css';
import './modules/swiper/swiper.min.css';
import './modules/swiper/swiper.css';
import Swiper from 'swiper';
import forms from './modules/form';
import startPage from './modules/start-page';


window.onload = () => {
  forms();
  startPage()
    .then(() => {
      const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
};
